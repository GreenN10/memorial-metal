import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";
import {
  sendOrderCreatedEmail,
  sendOwnerNewOrderEmail,
} from "@/lib/mail";

function randomCode(prefix: string) {
  return prefix + Math.floor(100000 + Math.random() * 900000);
}

export async function GET() {
  try {
    await connectDB();

    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Sipariş listeleme hatası:", error);

    return NextResponse.json(
      { message: "Siparişler alınamadı." },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectDB();

    const paymentMethod =
      typeof body.paymentMethod === "string" &&
      body.paymentMethod.trim()
        ? body.paymentMethod.trim()
        : "Belirtilmedi";

    const paymentStatus =
      paymentMethod === "Kapıda Ödeme" ||
      paymentMethod === "Havale / EFT"
        ? "pending"
        : "waiting";

    const order = await Order.create({
      userEmail: body.userEmail,
      customerName: body.customerName,
      phone: body.phone,
      address: body.address,
      city: body.city,
      note: body.note || "",
      uploadedImage: body.uploadedImage || "",
      total: body.total,
      items: body.items || [],

      paymentMethod,
      paymentStatus,

      orderCode: randomCode("MM"),
      cargoCode: "",
      status: "Sipariş Alındı",
    });

    await sendOrderCreatedEmail({
      customerName: order.customerName,
      customerEmail: order.userEmail,
      orderCode: order.orderCode,
      total: order.total,
    });

    await sendOwnerNewOrderEmail({
      orderCode: order.orderCode,
      customerName: order.customerName,
      total: order.total,
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Sipariş oluşturma hatası:", error);

    return NextResponse.json(
      { message: "Sipariş oluşturulamadı." },
      { status: 500 },
    );
  }
}