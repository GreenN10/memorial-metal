import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ code: string }> },
) {
  try {
    const { code } = await params;
    const normalizedCode = decodeURIComponent(code || "")
      .trim()
      .toUpperCase();

    if (!normalizedCode) {
      return NextResponse.json(
        { message: "Sipariş veya kargo kodu girilmedi." },
        { status: 400 },
      );
    }

    await connectDB();

    const order = await Order.findOne({
      $or: [
        { orderCode: normalizedCode },
        { cargoCode: normalizedCode },
      ],
    })
      .select(
        "orderCode cargoCode status customerName userEmail phone city address items total uploadedImage note paymentMethod createdAt",
      )
      .lean();

    if (!order) {
      return NextResponse.json(
        {
          message:
            "Bu kodla eşleşen bir sipariş bulunamadı. Kodu kontrol edip tekrar deneyin.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Sipariş takip hatası:", error);

    return NextResponse.json(
      { message: "Sipariş sorgulanırken bir hata oluştu." },
      { status: 500 },
    );
  }
}