"use client";

import { useState } from "react";

const shipmentStatuses = [
  "Sipariş Alındı",
  "Hazırlanıyor",
  "Kargoya Verildi",
  "Teslim Edildi"
];

export default function TrackingPage() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [message, setMessage] = useState("");

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Sipariş aranıyor...");
    setResult(null);

    try {
      const res = await fetch(`/api/tracking/${code}`);
      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Sipariş bulunamadı.");
        return;
      }

      setResult(data);
      setMessage("");
    } catch {
      setMessage("Bir hata oluştu.");
    }
  }

  const currentStep = result ? shipmentStatuses.indexOf(result.status) : -1;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(250,204,21,.08), transparent 25%), linear-gradient(180deg, #0b0b0c 0%, #111214 100%)",
        padding: "40px 16px 80px"
      }}
    >
      <div className="container">
        <div
          className="card"
          style={{
            padding: 28,
            borderRadius: 30,
            border: "1px solid rgba(250,204,21,.18)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02))",
            boxShadow: "0 30px 80px rgba(0,0,0,.35)"
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div
              style={{
                display: "inline-block",
                background: "#facc15",
                color: "#000",
                padding: "8px 14px",
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 13
              }}
            >
              Premium Sipariş Takibi
            </div>

            <h1 style={{ fontSize: 46, marginTop: 18, marginBottom: 10 }}>
              Siparişini anlık takip et
            </h1>

            <p className="small" style={{ fontSize: 16, lineHeight: 1.8 }}>
              Sipariş kodu veya kargo kodu ile üretim ve teslimat durumunu kolayca sorgulayabilirsin.
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            style={{
              display: "flex",
              gap: 12,
              marginTop: 24,
              flexWrap: "wrap"
            }}
          >
            <input
              className="input"
              placeholder="Örn: MM225959 veya ARS456734"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                flex: 1,
                minWidth: 260,
                height: 54,
                fontSize: 16
              }}
            />
            <button
              className="btn btn-primary"
              type="submit"
              style={{ height: 54, minWidth: 140 }}
            >
              Sorgula
            </button>
          </form>

          {message ? (
            <div style={{ marginTop: 16 }} className="small">
              {message}
            </div>
          ) : null}

          {result ? (
            <div style={{ marginTop: 28 }}>
              <div
                style={{
                  borderRadius: 28,
                  padding: 24,
                  background:
                    "radial-gradient(circle at top, rgba(250,204,21,.08), transparent 30%), rgba(255,255,255,.03)",
                  border: "1px solid rgba(250,204,21,.18)"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <div className="small">Sipariş Kodu</div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 30,
                        fontWeight: 900,
                        color: "#facc15"
                      }}
                    >
                      {result.orderCode}
                    </div>
                    <div className="small" style={{ marginTop: 10 }}>
                      Kargo Kodu: {result.cargoCode || "Henüz girilmedi"}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div className="small">Güncel Durum</div>
                    <div className="badge" style={{ marginTop: 8 }}>
                      {result.status}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 28 }}>
                  <div
                    style={{
                      height: 10,
                      borderRadius: 999,
                      background: "rgba(255,255,255,.08)",
                      overflow: "hidden",
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,.04)"
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width:
                          currentStep === 0
                            ? "25%"
                            : currentStep === 1
                            ? "50%"
                            : currentStep === 2
                            ? "75%"
                            : currentStep === 3
                            ? "100%"
                            : "0%",
                        background:
                          "linear-gradient(90deg, #facc15 0%, #fde047 100%)",
                        transition: "all .4s ease"
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                      gap: 14,
                      marginTop: 18
                    }}
                  >
                    {shipmentStatuses.map((item, index) => {
                      const active = currentStep >= index;
                      return (
                        <div
                          key={item}
                          style={{
                            padding: 16,
                            borderRadius: 20,
                            textAlign: "center",
                            fontWeight: 800,
                            fontSize: 13,
                            background: active ? "#facc15" : "rgba(255,255,255,.04)",
                            color: active ? "#000" : "#9ca3af",
                            border: "1px solid rgba(255,255,255,.08)",
                            boxShadow: active ? "0 10px 24px rgba(250,204,21,.18)" : "none"
                          }}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-2" style={{ marginTop: 24 }}>
                  <div className="card" style={{ padding: 18, borderRadius: 22 }}>
                    <div className="small">Müşteri Bilgileri</div>
                    <div style={{ fontWeight: 900, fontSize: 22, marginTop: 10 }}>
                      {result.customerName}
                    </div>
                    <div className="small" style={{ marginTop: 8 }}>
                      {result.userEmail}
                    </div>
                    <div className="small">{result.phone}</div>
                  </div>

                  <div className="card" style={{ padding: 18, borderRadius: 22 }}>
                    <div className="small">Teslimat Bilgileri</div>
                    <div style={{ fontWeight: 900, fontSize: 22, marginTop: 10 }}>
                      {result.city}
                    </div>
                    <div className="small" style={{ marginTop: 8 }}>
                      {result.address}
                    </div>
                  </div>
                </div>

                <div className="card" style={{ padding: 18, marginTop: 20, borderRadius: 22 }}>
                  <div className="small">Sipariş Özeti</div>

                  <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
                    {result.items?.map((item: any, index: number) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 12,
                          borderBottom: "1px solid rgba(255,255,255,.08)",
                          paddingBottom: 12
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 800, fontSize: 17 }}>{item.name}</div>
                          <div className="small">
                            {item.quantity} adet • {item.size}
                          </div>
                        </div>

                        <div style={{ fontWeight: 900 }}>
                          {(item.price * item.quantity).toFixed(2)} TL
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: 18,
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: 900,
                      fontSize: 24
                    }}
                  >
                    <span>Toplam</span>
                    <span style={{ color: "#facc15" }}>
                      {result.total?.toFixed(2)} TL
                    </span>
                  </div>
                </div>

                {result.uploadedImage ? (
                  <div className="card" style={{ padding: 18, marginTop: 20, borderRadius: 22 }}>
                    <div className="small" style={{ marginBottom: 12 }}>
                      Yüklenen Fotoğraf
                    </div>
                    <img
                      src={result.uploadedImage}
                      alt="Yüklenen fotoğraf"
                      style={{
                        width: 260,
                        maxWidth: "100%",
                        borderRadius: 20,
                        border: "1px solid rgba(255,255,255,.08)",
                        boxShadow: "0 20px 40px rgba(0,0,0,.25)"
                      }}
                    />
                  </div>
                ) : null}

                {result.note ? (
                  <div className="card" style={{ padding: 18, marginTop: 20, borderRadius: 22 }}>
                    <div className="small">Sipariş Notu</div>
                    <div style={{ marginTop: 10, lineHeight: 1.8 }}>{result.note}</div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}