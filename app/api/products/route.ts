import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find().sort({ createdAt: -1 });

    return NextResponse.json(products);
  } catch (error) {
    console.error("PRODUCT GET HATASI:", error);

    return NextResponse.json(
      { message: "Ürünler alınamadı." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("ÜRÜN GELEN BODY:", body);

    await connectDB();

    const created = await Product.create(body);

    console.log("ÜRÜN OLUŞTURULDU:", created);

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("PRODUCT POST HATASI:", error);

    return NextResponse.json(
      {
        message: "Ürün eklenemedi.",
        error: error instanceof Error ? error.message : "Bilinmeyen hata",
      },
      { status: 500 }
    );
  }
}