import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";

export async function GET(_: Request, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  await connectDB();
  const order = await Order.findOne({
    $or: [{ orderCode: code }, { cargoCode: code }]
  });

  if (!order) {
    return NextResponse.json({ message: "Sipariş bulunamadı." }, { status: 404 });
  }

  return NextResponse.json(order);
}
