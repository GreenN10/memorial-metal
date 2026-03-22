import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";
import { initIyzicoCheckout } from "@/lib/payment";

export async function POST(req: Request) {
  try {
    const { orderId } = await req.json();
    await connectDB();
    const order = await Order.findById(orderId);
    if (!order) return NextResponse.json({ message: "Sipariş bulunamadı." }, { status: 404 });

    const [firstName, ...rest] = String(order.customerName).split(" ");
    const result = await initIyzicoCheckout({
      orderCode: order.orderCode,
      total: order.total,
      buyer: {
        name: firstName || "Müşteri",
        surname: rest.join(" ") || " ",
        email: order.userEmail,
        gsmNumber: order.phone,
        registrationAddress: order.address,
        city: order.city
      }
    });

    return NextResponse.json({
      paymentPageUrl: result.paymentPageUrl || null,
      checkoutFormContent: result.checkoutFormContent || null,
      token: result.token || null
    });
  } catch (error: any) {
    return NextResponse.json({ message: error?.message || "iyzico başlatılamadı." }, { status: 500 });
  }
}
