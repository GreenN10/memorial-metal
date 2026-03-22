import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";
import { verifyPayTRCallback } from "@/lib/payment";

export async function POST(req: Request) {
  const form = await req.formData();

  const merchant_oid = String(form.get("merchant_oid") || "");
  const status = String(form.get("status") || "");
  const total_amount = String(form.get("total_amount") || "");
  const hash = String(form.get("hash") || "");

  if (!verifyPayTRCallback({ merchant_oid, status, total_amount, hash })) {
    return new NextResponse("FAIL", { status: 401 });
  }

  await connectDB();

  await Order.findOneAndUpdate(
    { orderCode: merchant_oid },
    {
      paymentStatus: status === "success" ? "paid" : "failed",
      status: status === "success" ? "Sipariş Alındı" : "Ödeme Başarısız"
    }
  );

  return new NextResponse("OK");
}
