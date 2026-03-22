import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";

const products = [
  { name: "A5 Metal Tablo", slug: "a5-metal-tablo", price: 299.9, size: "A5", description: "Kompakt ölçüde parlak metal baskı.", image: "/placeholder-product.png", isActive: true },
  { name: "A4 Metal Tablo", slug: "a4-metal-tablo", price: 499.9, size: "A4", description: "En çok tercih edilen metal tablo ölçüsü.", image: "/placeholder-product.png", isActive: true },
  { name: "A3 Metal Tablo", slug: "a3-metal-tablo", price: 699.9, size: "A3", description: "Geniş yüzeyli premium metal baskı.", image: "/placeholder-product.png", isActive: true }
];

export async function POST() {
  await connectDB();
  for (const item of products) {
    await Product.updateOne({ slug: item.slug }, item, { upsert: true });
  }
  return NextResponse.json({ ok: true, count: products.length });
}
