import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  await connectDB();
  const products = await Product.find({ isActive: true }).sort({ createdAt: -1 }).lean();

  return (
    <main className="container" style={{ padding: "40px 16px" }}>
      <h1 style={{ fontSize: 42, marginBottom: 8 }}>Ürünler</h1>
      <p className="small">Gerçek ürün ekleme sistemi ile yönetilen katalog.</p>
      <div className="grid grid-3" style={{ marginTop: 24 }}>
        {products.map((p: any) => <ProductCard key={String(p._id)} product={{ ...p, _id: String(p._id) }} />)}
      </div>
    </main>
  );
}
