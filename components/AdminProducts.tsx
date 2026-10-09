
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

const emptyForm = {
  name: "",
  slug: "",
  price: 0,
  size: "A4",
  image: "",
  description: "",
  isActive: true,
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function load() {
    const res = await fetch("/api/products", { cache: "no-store" });
    if (!res.ok) throw new Error("Ürünler yüklenemedi.");
    setProducts(await res.json());
  }

  useEffect(() => {
    load().catch((error) => setMessage(error.message));
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const url = URL.createObjectURL(selectedFile);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  function startEdit(item: Product) {
    setEditingId(item._id);
    setForm({
      name: item.name,
      slug: item.slug,
      price: item.price,
      size: item.size || "A4",
      image: item.image || "",
      description: item.description || "",
      isActive: item.isActive,
    });
    setSelectedFile(null);
    setMessage("");
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId("");
    setSelectedFile(null);
  }

  async function save() {
    if (!form.name.trim() || !form.slug.trim() || form.price <= 0) {
      setMessage("Ürün adı, slug ve geçerli fiyat zorunludur.");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      let image = form.image;

      if (selectedFile) {
        const uploadData = new FormData();
        uploadData.append("file", selectedFile);
        uploadData.append("purpose", "product");

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadData,
        });

        const uploadResult = await uploadRes.json();

        if (!uploadRes.ok) {
          throw new Error(uploadResult.message || "Fotoğraf yüklenemedi.");
        }

        image = uploadResult.image;
      }

      const payload = { ...form, image };
      const url = editingId
        ? `/api/products/${editingId}`
        : "/api/products";

      const res = await fetch(url, {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result.message || "Ürün kaydedilemedi.");
      }

      await load();
      resetForm();
      setMessage("Ürün başarıyla kaydedildi.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Bir hata oluştu."
      );
    } finally {
      setSaving(false);
    }
  }

  async function removeProduct(id: string) {
    if (!window.confirm("Bu ürünü silmek istediğine emin misin?")) return;

    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      setMessage("Ürün silinemedi.");
      return;
    }

    await load();
    setMessage("Ürün silindi.");
  }

  return (
    <div className="grid grid-2">
      <div className="card" style={{ padding: 20 }}>
        <h3 style={{ fontSize: 28 }}>Ürün Ekle / Düzenle</h3>

        <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
          <input
            className="input"
            placeholder="Ürün adı"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="input"
            placeholder="Slug (ör. kalpli-metal-tablo)"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />

          <input
            className="input"
            type="number"
            min="0"
            placeholder="Fiyat"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: Number(e.target.value) })
            }
          />

          <input
            className="input"
            placeholder="Boyut"
            value={form.size}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
          />

          <label style={{ display: "grid", gap: 8 }}>
            **Ürün fotoğrafı**
            <input
              className="input"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={(e) =>
                setSelectedFile(e.target.files?.[0] || null)
              }
            />
          </label>

          {(preview || form.image) && (
            <div>
              <p className="small">Fotoğraf ön izlemesi</p>
              <img
                src={preview || form.image}
                alt="Ürün ön izlemesi"
                style={{
                  width: "100%",
                  maxWidth: 280,
                  maxHeight: 280,
                  objectFit: "contain",
                  borderRadius: 12,
                }}
              />
            </div>
          )}

          <textarea
            className="input"
            rows={4}
            placeholder="Açıklama"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <select
            className="input"
            value={String(form.isActive)}
            onChange={(e) =>
              setForm({ ...form, isActive: e.target.value === "true" })
            }
          >
            <option value="true">Aktif</option>
            <option value="false">Pasif</option>
          </select>

          <button
            className="btn btn-primary"
            onClick={save}
            disabled={saving}
          >
            {saving
              ? "Kaydediliyor..."
              : editingId
                ? "Güncelle"
                : "Ürün Ekle"}
          </button>

          {editingId && (
            <button className="btn btn-secondary" onClick={resetForm}>
              Düzenlemeyi İptal Et
            </button>
          )}

          {message && <p role="status">{message}</p>}
        </div>
      </div>

      <div className="card" style={{ padding: 20 }}>
        <h3 style={{ fontSize: 28 }}>Ürünler</h3>

        <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
          {products.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 18,
                padding: 14,
              }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: 90,
                    height: 90,
                    objectFit: "contain",
                  }}
                />
              )}

              <div style={{ fontWeight: 800 }}>{item.name}</div>
              <div className="small">
                {item.slug} • {item.price.toFixed(2)} TL • {item.size}
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <button
                  className="btn btn-secondary"
                  onClick={() => startEdit(item)}
                >
                  Düzenle
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => removeProduct(item._id)}
                >
                  Sil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}