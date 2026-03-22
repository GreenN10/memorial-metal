import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { User } from "@/models/User";

function labels7() {
  const arr: string[] = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    arr.push(`${d.getDate()}.${d.getMonth() + 1}`);
  }
  return arr;
}

export async function GET() {
  await connectDB();
  const [orders, productsCount, usersCount] = await Promise.all([
    Order.find().lean(),
    Product.countDocuments(),
    User.countDocuments()
  ]);

  const revenue = orders.reduce((sum: number, o: any) => sum + (o.total || 0), 0);
  const series = labels7().map((label) => ({
    label,
    value: orders.filter((o: any) => {
      const d = new Date(o.createdAt);
      return `${d.getDate()}.${d.getMonth() + 1}` === label;
    }).length
  }));

  return NextResponse.json({
    ordersCount: orders.length,
    productsCount,
    usersCount,
    revenue,
    orderSeries: series
  });
}
