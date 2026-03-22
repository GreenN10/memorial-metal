import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";
import { sendOrderCreatedEmail, sendOwnerNewOrderEmail } from "@/lib/mail";

function randomCode(prefix: string) {
  return prefix + Math.floor(100000 + Math.random() * 900000);
}

export async function GET() {
  await connectDB();
  const orders = await Order.find().sort({ createdAt: -1 });
  return NextResponse.json(orders);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();

    const order = await Order.create({
      ...body,
      orderCode: randomCode("MM"),
      cargoCode: "",
      paymentStatus: body.paymentMethod === "Kapıda Ödeme" || body.paymentMethod === "Havale / EFT" ? "pending" : "waiting"
    });

    await sendOrderCreatedEmail({
      customerName: order.customerName,
      customerEmail: order.userEmail,
      orderCode: order.orderCode,
      total: order.total
    });

    await sendOwnerNewOrderEmail({
      orderCode: order.orderCode,
      customerName: order.customerName,
      total: order.total
    });

    return NextResponse.json(order, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Sipariş oluşturulamadı." }, { status: 500 });
  }
}
