"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
  note: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const shipping = 49.9;

  useEffect(() => {
    const saved = localStorage.getItem("memoria-cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  function removeItem(id: string) {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("memoria-cart", JSON.stringify(updated));
  }

  function increaseQty(id: string) {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
    localStorage.setItem("memoria-cart", JSON.stringify(updated));
  }

  function decreaseQty(id: string) {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCart(updated);
    localStorage.setItem("memoria-cart", JSON.stringify(updated));
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = cart.length ? subtotal + shipping : 0;

  return (
    <main className="container" style={{ padding: "40px 16px" }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>Sepetim</h1>

      {cart.length === 0 ? (
        <div className="card" style={{ padding: 24 }}>
          <p>Sepet boş.</p>
          <Link href="/urunler" className="btn btn-primary" style={{ display: "inline-block", marginTop: 12 }}>
            Ürünlere Git
          </Link>
        </div>
      ) : (
        <div className="grid grid-2" style={{ marginTop: 24 }}>
          <div className="card" style={{ padding: 20 }}>
            <h2 style={{ fontSize: 28 }}>Sepetteki Ürünler</h2>

            <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: 18,
                    padding: 14,
                    display: "flex",
                    gap: 14,
                    alignItems: "center"
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800 }}>{item.name}</div>
                    <div className="small">Boyut: {item.size}</div>
                    <div className="small">Birim fiyat: {item.price.toFixed(2)} TL</div>

                    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                      <button className="btn btn-secondary" onClick={() => decreaseQty(item.id)}>-</button>
                      <span style={{ alignSelf: "center", fontWeight: 800 }}>{item.quantity}</span>
                      <button className="btn btn-secondary" onClick={() => increaseQty(item.id)}>+</button>
                      <button className="btn btn-secondary" onClick={() => removeItem(item.id)}>Sil</button>
                    </div>
                  </div>

                  <div style={{ fontWeight: 900, color: "#facc15" }}>
                    {(item.price * item.quantity).toFixed(2)} TL
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 20, height: "fit-content" }}>
            <h2 style={{ fontSize: 28 }}>Sipariş Özeti</h2>

            <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="small">Ara Toplam</span>
                <span>{subtotal.toFixed(2)} TL</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="small">Kargo</span>
                <span>{shipping.toFixed(2)} TL</span>
              </div>

              <hr className="sep" />

              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, fontSize: 22 }}>
                <span>Toplam</span>
                <span style={{ color: "#facc15" }}>{total.toFixed(2)} TL</span>
              </div>
            </div>

            <Link
              href="/odeme"
              className="btn btn-primary"
              style={{ display: "block", marginTop: 18, textAlign: "center" }}
            >
              Ödeme Sayfasına Git
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
