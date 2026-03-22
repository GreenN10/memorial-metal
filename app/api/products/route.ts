import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();
    const created = await Product.create(body);
    return NextResponse.json(created, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Ürün eklenemedi." }, { status: 500 });
  }
}
