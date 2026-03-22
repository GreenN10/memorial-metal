import crypto from "crypto";

function tl(value: number) {
  return value.toFixed(2);
}

function iyziAuth(uri: string, body: string) {
  const apiKey = process.env.IYZIPAY_API_KEY!;
  const secretKey = process.env.IYZIPAY_SECRET_KEY!;
  const randomKey = String(Date.now());
  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(randomKey + uri + body)
    .digest("base64");
  return `IYZWSv2 apiKey:${apiKey}&randomKey:${randomKey}&signature:${signature}`;
}

export async function initIyzicoCheckout(payload: {
  orderCode: string;
  total: number;
  buyer: {
    name: string;
    surname: string;
    email: string;
    gsmNumber: string;
    registrationAddress: string;
    city: string;
    country?: string;
    zipCode?: string;
  };
}) {
  const uri = "/payment/iyzipos/checkoutform/initialize/auth/ecom";
  const bodyObj = {
    locale: "tr",
    conversationId: payload.orderCode,
    price: tl(payload.total),
    paidPrice: tl(payload.total),
    currency: "TRY",
    basketId: payload.orderCode,
    paymentGroup: "PRODUCT",
    callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/iyzico/callback`,
    enabledInstallments: [1],
    buyer: {
      id: payload.orderCode,
      name: payload.buyer.name,
      surname: payload.buyer.surname,
      gsmNumber: payload.buyer.gsmNumber,
      email: payload.buyer.email,
      identityNumber: "11111111111",
      lastLoginDate: "2026-01-01 00:00:00",
      registrationDate: "2026-01-01 00:00:00",
      registrationAddress: payload.buyer.registrationAddress,
      ip: "127.0.0.1",
      city: payload.buyer.city,
      country: payload.buyer.country || "Turkey",
      zipCode: payload.buyer.zipCode || "59500"
    },
    shippingAddress: {
      contactName: `${payload.buyer.name} ${payload.buyer.surname}`,
      city: payload.buyer.city,
      country: payload.buyer.country || "Turkey",
      address: payload.buyer.registrationAddress,
      zipCode: payload.buyer.zipCode || "59500"
    },
    billingAddress: {
      contactName: `${payload.buyer.name} ${payload.buyer.surname}`,
      city: payload.buyer.city,
      country: payload.buyer.country || "Turkey",
      address: payload.buyer.registrationAddress,
      zipCode: payload.buyer.zipCode || "59500"
    },
    basketItems: [
      {
        id: payload.orderCode,
        name: "Metal Tablo Siparişi",
        category1: "Metal Baskı",
        itemType: "PHYSICAL",
        price: tl(payload.total)
      }
    ]
  };

  const body = JSON.stringify(bodyObj);
  const res = await fetch(`${process.env.IYZIPAY_BASE_URL}${uri}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: iyziAuth(uri, body)
    },
    body
  });

  if (!res.ok) throw new Error(`iyzico initialize failed: ${res.status}`);
  return res.json();
}

export async function retrieveIyzicoCheckout(token: string, conversationId: string) {
  const uri = "/payment/iyzipos/checkoutform/auth/ecom/detail";
  const body = JSON.stringify({ locale: "tr", conversationId, token });
  const res = await fetch(`${process.env.IYZIPAY_BASE_URL}${uri}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: iyziAuth(uri, body)
    },
    body
  });

  if (!res.ok) throw new Error(`iyzico retrieve failed: ${res.status}`);
  return res.json();
}

export function createPayTRToken(params: {
  merchantOid: string;
  email: string;
  paymentAmount: number;
  userIp: string;
  userName: string;
  userAddress: string;
  userPhone: string;
}) {
  const merchantId = process.env.PAYTR_MERCHANT_ID!;
  const merchantKey = process.env.PAYTR_MERCHANT_KEY!;
  const merchantSalt = process.env.PAYTR_MERCHANT_SALT!;
  const paymentAmount = Math.round(params.paymentAmount * 100).toString();
  const userBasket = Buffer.from(JSON.stringify([["Metal Tablo Siparişi", paymentAmount, 1]])).toString("base64");
  const noInstallment = "0";
  const maxInstallment = "0";
  const currency = "TL";
  const testMode = "1";
  const iframeV2 = "1";

  const hashStr = `${merchantId}${params.userIp}${params.merchantOid}${params.email}${paymentAmount}${userBasket}${noInstallment}${maxInstallment}${currency}${testMode}`;
  const paytrToken = crypto.createHmac("sha256", merchantKey).update(hashStr + merchantSalt).digest("base64");

  return {
    merchant_id: merchantId,
    user_ip: params.userIp,
    merchant_oid: params.merchantOid,
    email: params.email,
    payment_amount: paymentAmount,
    paytr_token: paytrToken,
    user_basket: userBasket,
    no_installment: noInstallment,
    max_installment: maxInstallment,
    currency,
    test_mode: testMode,
    iframe_v2: iframeV2,
    user_name: params.userName,
    user_address: params.userAddress,
    user_phone: params.userPhone,
    merchant_ok_url: process.env.PAYTR_OK_URL!,
    merchant_fail_url: process.env.PAYTR_FAIL_URL!,
    timeout_limit: "30",
    debug_on: "1",
    lang: "tr"
  };
}

export function verifyPayTRCallback(params: {
  merchant_oid: string;
  status: string;
  total_amount: string;
  hash: string;
}) {
  const merchantKey = process.env.PAYTR_MERCHANT_KEY!;
  const merchantSalt = process.env.PAYTR_MERCHANT_SALT!;
  const token = crypto
    .createHmac("sha256", merchantKey)
    .update(`${params.merchant_oid}${merchantSalt}${params.status}${params.total_amount}`)
    .digest("base64");
  return token === params.hash;
}
