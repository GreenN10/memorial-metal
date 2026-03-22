import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";
import { createPayTRToken } from "@/lib/payment";

export async function POST(req: Request) {
  try {
    const { orderId } = await req.json();
    await connectDB();
    const order = await Order.findById(orderId);
    if (!order) return NextResponse.json({ message: "Sipariş bulunamadı." }, { status: 404 });

    const tokenData = createPayTRToken({
      merchantOid: order.orderCode,
      email: order.userEmail,
      paymentAmount: order.total,
      userIp: "127.0.0.1",
      userName: order.customerName,
      userAddress: `${order.address} ${order.city}`,
      userPhone: order.phone
    });

    const formBody = new URLSearchParams(tokenData as Record<string, string>).toString();
    const res = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody
    });

    const data = await res.json();
    return NextResponse.json({
      iframeToken: data?.token || null,
      status: data?.status || null,
      reason: data?.reason || null
    });
  } catch (error: any) {
    return NextResponse.json({ message: error?.message || "PayTR başlatılamadı." }, { status: 500 });
  }
}
