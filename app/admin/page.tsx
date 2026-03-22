import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import AdminProducts from "@/components/AdminProducts";
import AdminOrders from "@/components/AdminOrders";
import AdminDashboard from "@/components/AdminDashboard";

function last7DaysLabels() {
  const out: string[] = [];
  const now = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    out.push(`${d.getDate()}.${d.getMonth() + 1}`);
  }

  return out;
}

export default async function AdminPage() {
  await connectDB();

  const [ordersCount, productsCount, usersCount, orders] = await Promise.all([
    Order.countDocuments(),
    Product.countDocuments(),
    User.countDocuments(),
    Order.find().sort({ createdAt: -1 }).lean()
  ]);

  const revenue = orders.reduce((sum: number, order: any) => sum + (order.total || 0), 0);

  const labels = last7DaysLabels();

  const orderSeries = labels.map((label) => {
    const count = orders.filter((o: any) => {
      const d = new Date(o.createdAt);
      return `${d.getDate()}.${d.getMonth() + 1}` === label;
    }).length;

    return { label, value: count };
  });

  return (
    <main className="container" style={{ padding: "40px 16px" }}>
      <h1 style={{ fontSize: 42, marginBottom: 8 }}>Admin Paneli</h1>
      <p className="small">Görsel dashboard, ürün yönetimi ve sipariş yönetimi.</p>

      <div style={{ marginTop: 24 }}>
        <AdminDashboard
          stats={{ ordersCount, productsCount, usersCount, revenue, orderSeries }}
        />
      </div>

      <div style={{ marginTop: 24 }}>
        <AdminProducts />
      </div>

      <div style={{ marginTop: 24 }}>
        <AdminOrders />
      </div>
    </main>
  );
}