import { NextResponse } from "next/server";
import Iyzipay from "iyzipay";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.IYZICO_API_KEY;
    const secretKey = process.env.IYZICO_SECRET_KEY;
    const baseUrl = process.env.IYZICO_BASE_URL;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!apiKey || !secretKey || !baseUrl || !siteUrl) {
      return NextResponse.json(
        {
          message: "ENV okunamadı",
          debug: {
            apiKey: !!apiKey,
            secretKey: !!secretKey,
            baseUrl: !!baseUrl,
            siteUrl: !!siteUrl,
          },
        },
        { status: 500 }
      );
    }

    const iyzipay = new Iyzipay({
      apiKey,
      secretKey,
      uri: baseUrl,
    });

    const body = await req.json();

    const {
      price,
      paidPrice,
      basketItems,
      customer,
      shippingAddress,
      billingAddress,
    } = body;

    const callbackUrl = new URL("/odeme/basarili", siteUrl).toString();
    const request = {
      locale: Iyzipay.LOCALE.TR,
      conversationId: `MM-${Date.now()}`,
      price: String(price),
      paidPrice: String(paidPrice),
      currency: Iyzipay.CURRENCY.TRY,
      basketId: `BASKET-${Date.now()}`,
      paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
      callbackUrl,
      enabledInstallments: [1, 2, 3, 6, 9],

      buyer: {
        id: "user-1",
        name: customer.name,
        surname: customer.surname || customer.name,
        gsmNumber: customer.phone,
        email: customer.email,
        identityNumber: "11111111111",
        lastLoginDate: "2025-01-01 12:00:00",
        registrationDate: "2025-01-01 12:00:00",
        registrationAddress: shippingAddress.address,
        ip: "127.0.0.1",
        city: shippingAddress.city,
        country: "Turkey",
        zipCode: "59500",
      },

      shippingAddress: {
        contactName: shippingAddress.contactName,
        city: shippingAddress.city,
        country: "Turkey",
        address: shippingAddress.address,
        zipCode: "59500",
      },

      billingAddress: {
        contactName: billingAddress.contactName,
        city: billingAddress.city,
        country: "Turkey",
        address: billingAddress.address,
        zipCode: "59500",
      },

      basketItems: basketItems.map((item: any, i: number) => ({
        id: item.id || `item-${i + 1}`,
        name: item.name,
        category1: item.category1 || "Metal Tablo",
        itemType:
          item.itemType === "VIRTUAL"
            ? Iyzipay.BASKET_ITEM_TYPE.VIRTUAL
            : Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: String(item.price),
      })),
    };

    const result = await new Promise<any>((resolve, reject) => {
      iyzipay.checkoutFormInitialize.create(request, (err: any, res: any) => {
        if (err) reject(err);
        else resolve(res);
      });
    });

    if (result.status !== "success") {
      return NextResponse.json(
        {
          message: result.errorMessage || "iyzico hata",
          result,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      token: result.token,
      checkoutFormContent: result.checkoutFormContent,
      paymentPageUrl: result.paymentPageUrl,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message || "Server hata",
      },
      { status: 500 }
    );
  }
}