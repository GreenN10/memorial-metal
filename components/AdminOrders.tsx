"use client";

import { useEffect, useState } from "react";

type OrderItem = {
  name: string;
  price: number;
  quantity: number;
  size: string;
};

type Order = {
  _id: string;
  orderCode: string;
  cargoCode?: string;
  customerName: string;
  userEmail: string;
  phone: string;
  address: string;
  city: string;
  note?: string;
  uploadedImage?: string;
  paymentStatus: string;
  paymentMethod: string;
  status: string;
  total: number;
  items: OrderItem[];
};

const statusOptions = [
  "Sipariş Alındı",
  "Hazırlanıyor",
  "Kargoya Verildi",
  "Teslim Edildi"
];

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [cargoInputs, setCargoInputs] = useState<Record<string, string>>({});

  async function load() {
    const res = await fetch("/api/orders", { cache: "no-store" });
    const data = await res.json();
    setOrders(data);

    const map: Record<string, string> = {};
    data.forEach((item: Order) => {
      map[item._id] = item.cargoCode || "";
    });
    setCargoInputs(map);
  }

  async function updateOrder(id: string, payload: any) {
    await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="card" style={{ padding: 20 }}>
      <h3 style={{ fontSize: 28 }}>Sipariş Yönetimi</h3>

      <div style={{ marginTop: 16, display: "grid", gap: 16 }}>
        {orders.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 18,
              padding: 16
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap"
              }}
            >
              <div>
                <div style={{ fontWeight: 900, fontSize: 22, color: "#facc15" }}>
                  {item.orderCode}
                </div>
                <div className="small" style={{ marginTop: 4 }}>
                  {item.customerName} • {item.userEmail}
                </div>
                <div className="small">{item.phone}</div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div className="badge">{item.status}</div>
                <div className="small" style={{ marginTop: 8 }}>
                  {item.paymentMethod} • {item.paymentStatus}
                </div>
                <div style={{ fontWeight: 900, marginTop: 8, color: "#facc15" }}>
                  {item.total.toFixed(2)} TL
                </div>
              </div>
            </div>

            <div className="grid grid-2" style={{ marginTop: 16 }}>
              <div className="card" style={{ padding: 14 }}>
                <div className="small">Adres</div>
                <div style={{ marginTop: 8, fontWeight: 700 }}>{item.city}</div>
                <div className="small" style={{ marginTop: 6 }}>{item.address}</div>
              </div>

              <div className="card" style={{ padding: 14 }}>
                <div className="small">Sipariş İçeriği</div>
                <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
                  {item.items?.map((p, index) => (
                    <div key={index} className="small">
                      {p.name} • {p.quantity} adet • {p.size}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {item.uploadedImage ? (
              <div className="card" style={{ padding: 14, marginTop: 14 }}>
                <div className="small" style={{ marginBottom: 8 }}>Yüklenen Fotoğraf</div>
                <img
                  src={item.uploadedImage}
                  alt="Uploaded"
                  style={{
                    width: 180,
                    maxWidth: "100%",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,.08)"
                  }}
                />
              </div>
            ) : null}

            {item.note ? (
              <div className="card" style={{ padding: 14, marginTop: 14 }}>
                <div className="small">Sipariş Notu</div>
                <div style={{ marginTop: 8 }}>{item.note}</div>
              </div>
            ) : null}

            <div className="grid grid-2" style={{ marginTop: 16 }}>
              <div>
                <label className="small">Sipariş Durumu</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      className="btn btn-secondary"
                      onClick={() => updateOrder(item._id, { status })}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="small">Kargo Kodu</label>
                <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                  <input
                    className="input"
                    value={cargoInputs[item._id] || ""}
                    onChange={(e) =>
                      setCargoInputs((prev) => ({
                        ...prev,
                        [item._id]: e.target.value
                      }))
                    }
                    placeholder="Örn: ARS123456"
                    style={{ flex: 1 }}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      updateOrder(item._id, {
                        cargoCode: cargoInputs[item._id] || ""
                      })
                    }
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}