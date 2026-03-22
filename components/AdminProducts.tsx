"use client";

import { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  size: string;
  image: string;
  description: string;
  isActive: boolean;
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<any>({
    name: "",
    slug: "",
    price: 0,
    size: "A4",
    image: "/placeholder-product.png",
    description: "",
    isActive: true
  });
  const [editingId, setEditingId] = useState<string>("");

  async function load() {
    const res = await fetch("/api/products", { cache: "no-store" });
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function save() {
    const method = editingId ? "PATCH" : "POST";
    const url = editingId ? `/api/products/${editingId}` : "/api/products";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setForm({ name: "", slug: "", price: 0, size: "A4", image: "/placeholder-product.png", description: "", isActive: true });
      setEditingId("");
      load();
    }
  }

  async function removeProduct(id: string) {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    load();
  }

  function startEdit(item: Product) {
    setEditingId(item._id);
    setForm(item);
  }

  return (
    <div className="grid grid-2">
      <div className="card" style={{ padding: 20 }}>
        <h3 style={{ fontSize: 28 }}>Ürün Ekle / Düzenle</h3>
        <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
          <input className="input" placeholder="Ürün adı" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className="input" placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          <input className="input" type="number" placeholder="Fiyat" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
          <input className="input" placeholder="Boyut" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} />
          <input className="input" placeholder="Görsel URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
          <textarea className="input" rows={4} placeholder="Açıklama" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <select className="input" value={String(form.isActive)} onChange={(e) => setForm({ ...form, isActive: e.target.value === "true" })}>
            <option value="true">Aktif</option>
            <option value="false">Pasif</option>
          </select>
          <button className="btn btn-primary" onClick={save}>{editingId ? "Güncelle" : "Ürün Ekle"}</button>
        </div>
      </div>

      <div className="card" style={{ padding: 20 }}>
        <h3 style={{ fontSize: 28 }}>Ürünler</h3>
        <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
          {products.map((item) => (
            <div key={item._id} style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, padding: 14 }}>
              <div style={{ fontWeight: 800 }}>{item.name}</div>
              <div className="small">{item.slug} • {item.price.toFixed(2)} TL • {item.size}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <button className="btn btn-secondary" onClick={() => startEdit(item)}>Düzenle</button>
                <button className="btn btn-secondary" onClick={() => removeProduct(item._id)}>Sil</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
