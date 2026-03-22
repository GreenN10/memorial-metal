import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";
import { retrieveIyzicoCheckout } from "@/lib/payment";

export async function POST(req: Request) {
  const form = await req.formData();
  const token = String(form.get("token") || "");
  const conversationId = String(form.get("conversationId") || "");

  if (!token) {
    return NextResponse.json({ message: "Token yok." }, { status: 400 });
  }

  try {
    await connectDB();
    const detail = await retrieveIyzicoCheckout(token, conversationId);
    const orderCode = detail.conversationId || conversationId;
    const paid = detail.paymentStatus === "SUCCESS";

    await Order.findOneAndUpdate(
      { orderCode },
      {
        paymentStatus: paid ? "paid" : "failed",
        status: paid ? "Sipariş Alındı" : "Ödeme Başarısız"
      }
    );

    return NextResponse.redirect(new URL(paid ? "/odeme/basarili" : "/odeme/hata", process.env.NEXT_PUBLIC_SITE_URL));
  } catch {
    return NextResponse.redirect(new URL("/odeme/hata", process.env.NEXT_PUBLIC_SITE_URL));
  }
}
