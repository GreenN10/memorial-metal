"use client";

import { useEffect, useMemo, useState } from "react";

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

const SHIPPING_COST = 49.9;

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "Tekirdağ",
    paymentMethod: "Kapıda Ödeme"
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem("memoria-cart");
    const parsed = existing ? JSON.parse(existing) : [];
    setCart(parsed);
  }, []);

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const total = cart.length ? subtotal + SHIPPING_COST : 0;

  function splitName(fullName: string) {
    const parts = fullName.trim().split(" ");
    const name = parts[0] || "Misafir";
    const surname = parts.slice(1).join(" ") || "Kullanıcı";
    return { name, surname };
  }

  async function createOrderOnly() {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userEmail: form.email,
        customerName: form.fullName,
        phone: form.phone,
        address: form.address,
        city: form.city,
        note: "",
        uploadedImage: "",
        paymentMethod: form.paymentMethod,
        total,
        items: cart.map((item) => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size
        }))
      })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Sipariş oluşturulamadı.");
    }

    localStorage.removeItem("memoria-cart");
    setCart([]);
    setStatus(`Sipariş oluşturuldu. Sipariş kodu: ${data.orderCode}`);
  }

  async function startIyzicoPayment() {
    const { name, surname } = splitName(form.fullName);

    const productItems = cart.map((item, index) => ({
      id: item.productId || `item-${index + 1}`,
      name: item.name,
      category1: "Metal Tablo",
      itemType: "PHYSICAL",
      price: (item.price * item.quantity).toFixed(2)
    }));

    const basketItems = [
      ...productItems,
      {
        id: "shipping",
        name: "Kargo",
        category1: "Kargo",
        itemType: "VIRTUAL",
        price: SHIPPING_COST.toFixed(2)
      }
    ];

    const res = await fetch("/api/iyzico/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: total.toFixed(2),
        paidPrice: total.toFixed(2),
        basketItems,
        customer: {
          id: "guest-user",
          name,
          surname,
          phone: form.phone,
          email: form.email,
          identityNumber: "11111111111"
        },
        shippingAddress: {
          contactName: form.fullName,
          city: form.city,
          address: form.address,
          zipCode: "59500"
        },
        billingAddress: {
          contactName: form.fullName,
          city: form.city,
          address: form.address,
          zipCode: "59500"
        }
      })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(data, null, 2));
    }

    if (data.paymentPageUrl) {
      window.location.href = data.paymentPageUrl;
      return;
    }

    if (data.checkoutFormContent) {
      const newWindow = window.open("", "_self");
      if (newWindow) {
        newWindow.document.open();
        newWindow.document.write(data.checkoutFormContent);
        newWindow.document.close();
        return;
      }
    }

    throw new Error("iyzico ödeme formu alınamadı.");
  }

  async function handleCheckout() {
    try {
      setLoading(true);
      setStatus("");

      if (!cart.length) {
        setStatus("Sepet boş.");
        return;
      }

      if (!form.fullName || !form.phone || !form.email || !form.address || !form.city) {
        setStatus("Lütfen tüm teslimat bilgilerini doldur.");
        return;
      }

      if (form.paymentMethod === "iyzico") {
        await startIyzicoPayment();
        return;
      }

      await createOrderOnly();
    } catch (error: any) {
      setStatus(error?.message || "İşlem sırasında hata oluştu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container" style={{ padding: "40px 16px" }}>
      <h1 style={{ fontSize: 42, marginBottom: 8 }}>Ödeme</h1>
      <p className="small">Teslimat bilgilerini gir ve siparişini tamamla.</p>

      <div className="grid grid-2" style={{ marginTop: 24 }}>
        <div className="card" style={{ padding: 20 }}>
          <h2 style={{ fontSize: 28 }}>Teslimat Bilgileri</h2>

          <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
            <input
              className="input"
              placeholder="Ad Soyad"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
            <input
              className="input"
              placeholder="Telefon"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              className="input"
              placeholder="E-posta"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="input"
              placeholder="Şehir"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <textarea
              className="input"
              rows={4}
              placeholder="Açık adres"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />

            <select
              className="input"
              value={form.paymentMethod}
              onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
            >
              <option>Kapıda Ödeme</option>
              <option>Havale / EFT</option>
              <option>iyzico</option>
            </select>

            <button className="btn btn-primary" onClick={handleCheckout} disabled={loading}>
              {loading
                ? "İşlem yapılıyor..."
                : form.paymentMethod === "iyzico"
                ? "iyzico ile Öde"
                : "Siparişi Tamamla"}
            </button>

            {status ? (
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  fontSize: 12,
                  lineHeight: 1.6,
                  color: "#fca5a5",
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.08)",
                  padding: 12,
                  borderRadius: 12,
                  margin: 0
                }}
              >
                {status}
              </pre>
            ) : null}
          </div>
        </div>

        <div className="card" style={{ padding: 20, height: "fit-content" }}>
          <h2 style={{ fontSize: 28 }}>Sipariş Özeti</h2>

          <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 10,
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                  paddingBottom: 10
                }}
              >
                <div>
                  <div style={{ fontWeight: 700 }}>{item.name}</div>
                  <div className="small">
                    {item.quantity} adet • {item.size}
                  </div>
                </div>
                <div style={{ fontWeight: 800 }}>
                  {(item.price * item.quantity).toFixed(2)} TL
                </div>
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <span className="small">Ara Toplam</span>
              <span>{subtotal.toFixed(2)} TL</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="small">Kargo</span>
              <span>{SHIPPING_COST.toFixed(2)} TL</span>
            </div>

            <hr className="sep" />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 900,
                fontSize: 22
              }}
            >
              <span>Toplam</span>
              <span style={{ color: "#facc15" }}>{total.toFixed(2)} TL</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}