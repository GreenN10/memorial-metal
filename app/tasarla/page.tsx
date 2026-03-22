import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import ProductDesigner from "@/components/ProductDesigner";

export default async function DesignerPage() {
  await connectDB();
  const products = await Product.find({ isActive: true }).sort({ createdAt: 1 }).lean();
  const normalized = products.map((p: any) => ({ ...p, _id: String(p._id) }));

  return (
    <main className="container" style={{ padding: "40px 16px" }}>
      <h1 style={{ fontSize: 42, marginBottom: 8 }}>Tasarım Oluştur</h1>
      <p className="small">Fotoğraf yükleyip metal tablo önizleyebilirsin.</p>
      <div style={{ marginTop: 24 }}>
        <ProductDesigner products={normalized} />
      </div>
    </main>
  );
}
