"use client";

import { FormEvent, useMemo, useState } from "react";

type OrderItem = {
  name: string;
  price: number;
  quantity: number;
  size: string;
};

type TrackingResult = {
  orderCode: string;
  cargoCode?: string;
  status: string;
  customerName: string;
  userEmail: string;
  phone: string;
  city: string;
  address: string;
  items?: OrderItem[];
  total?: number;
  uploadedImage?: string;
  note?: string;
  paymentMethod?: string;
  createdAt?: string;
};

const shipmentStatuses = [
  "Sipariş Alındı",
  "Hazırlanıyor",
  "Kargoya Verildi",
  "Teslim Edildi",
];

export default function TrackingPage() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<
    "info" | "error" | "success"
  >("info");
  const [loading, setLoading] = useState(false);

  const currentStep = useMemo(() => {
    if (!result) return -1;

    return shipmentStatuses.indexOf(result.status);
  }, [result]);

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedCode = code.trim().toUpperCase();

    if (!normalizedCode) {
      setResult(null);
      setMessageType("error");
      setMessage("Lütfen sipariş veya kargo kodunu girin.");
      return;
    }

    try {
      setLoading(true);
      setResult(null);
      setMessageType("info");
      setMessage("Siparişiniz aranıyor...");

      const response = await fetch(
        `/api/tracking/${encodeURIComponent(normalizedCode)}`,
        {
          method: "GET",
          cache: "no-store",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setMessageType("error");
        setMessage(data.message || "Sipariş bulunamadı.");
        return;
      }

      setResult(data);
      setMessageType("success");
      setMessage("Siparişiniz bulundu.");
    } catch {
      setResult(null);
      setMessageType("error");
      setMessage(
        "Sipariş sorgulanırken bağlantı hatası oluştu. Tekrar deneyin.",
      );
    } finally {
      setLoading(false);
    }
  }

  function formatPrice(value?: number) {
    return Number(value || 0).toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function formatDate(value?: string) {
    if (!value) return "Tarih bilgisi bulunmuyor";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Tarih bilgisi bulunmuyor";
    }

    return new Intl.DateTimeFormat("tr-TR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(date);
  }

  function getProgressWidth() {
    if (currentStep < 0) return "0%";

    return `${((currentStep + 1) / shipmentStatuses.length) * 100}%`;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 16px 80px",
        background:
          "radial-gradient(circle at top right, rgba(250,204,21,.08), transparent 25%), linear-gradient(180deg, #0b0b0c 0%, #111214 100%)",
      }}
    >
      <div className="container">
        <section
          className="card"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: 28,
            borderRadius: 30,
            border: "1px solid rgba(250,204,21,.16)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.02))",
            boxShadow: "0 30px 80px rgba(0,0,0,.35)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -120,
              right: -120,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(250,204,21,.07)",
              filter: "blur(42px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <div style={{ maxWidth: 760 }}>
              <div className="badge">Premium Sipariş Takibi</div>

              <h1
                style={{
                  margin: "18px 0 0",
                  fontSize: 46,
                  lineHeight: 1.1,
                  letterSpacing: "-0.04em",
                }}
              >
                Siparişini kolayca takip et
              </h1>

              <p
                className="small"
                style={{
                  marginTop: 12,
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
              >
                Sipariş kodunu veya kargo kodunu girerek üretim ve teslimat
                sürecini görüntüleyebilirsin.
              </p>
            </div>

            <form
              onSubmit={handleSearch}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 26,
              }}
            >
              <input
                className="input"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                  setMessage("");
                }}
                placeholder="Örn: MM225959 veya ARS456734"
                aria-label="Sipariş veya kargo kodu"
                autoComplete="off"
                style={{
                  flex: 1,
                  minWidth: 250,
                  height: 56,
                  fontSize: 16,
                  textTransform: "uppercase",
                }}
              />

              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
                style={{
                  minWidth: 150,
                  height: 56,
                  opacity: loading ? 0.68 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Aranıyor..." : "Siparişi Sorgula"}
              </button>
            </form>

            {message ? (
              <div
                style={{
                  marginTop: 16,
                  padding: "13px 15px",
                  border:
                    messageType === "error"
                      ? "1px solid rgba(239,68,68,.24)"
                      : messageType === "success"
                        ? "1px solid rgba(34,197,94,.24)"
                        : "1px solid rgba(250,204,21,.18)",
                  borderRadius: 14,
                  background:
                    messageType === "error"
                      ? "rgba(239,68,68,.07)"
                      : messageType === "success"
                        ? "rgba(34,197,94,.07)"
                        : "rgba(250,204,21,.05)",
                  color:
                    messageType === "error"
                      ? "#fca5a5"
                      : messageType === "success"
                        ? "#86efac"
                        : "#e4e4e7",
                  fontSize: 13,
                  fontWeight: 750,
                }}
              >
                {message}
              </div>
            ) : null}

            {result ? (
              <div style={{ marginTop: 28 }}>
                <section
                  style={{
                    padding: 24,
                    border: "1px solid rgba(250,204,21,.18)",
                    borderRadius: 28,
                    background:
                      "radial-gradient(circle at top, rgba(250,204,21,.07), transparent 30%), rgba(255,255,255,.025)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 18,
                    }}
                  >
                    <div>
                      <div className="small">Sipariş Kodu</div>

                      <div
                        style={{
                          marginTop: 6,
                          color: "#facc15",
                          fontSize: 30,
                          fontWeight: 950,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {result.orderCode}
                      </div>

                      <div
                        className="small"
                        style={{
                          marginTop: 9,
                          lineHeight: 1.7,
                        }}
                      >
                        Kargo Kodu:{" "}
                        <strong style={{ color: "#e4e4e7" }}>
                          {result.cargoCode || "Henüz oluşturulmadı"}
                        </strong>
                      </div>

                      <div className="small">
                        Sipariş Tarihi:{" "}
                        <strong style={{ color: "#e4e4e7" }}>
                          {formatDate(result.createdAt)}
                        </strong>
                      </div>
                    </div>

                    <div>
                      <div
                        className="small"
                        style={{
                          textAlign: "right",
                        }}
                      >
                        Güncel Durum
                      </div>

                      <div
                        className="badge"
                        style={{
                          marginTop: 8,
                        }}
                      >
                        {result.status}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 30 }}>
                    <div
                      style={{
                        height: 10,
                        overflow: "hidden",
                        borderRadius: 999,
                        background: "rgba(255,255,255,.08)",
                        boxShadow:
                          "inset 0 0 0 1px rgba(255,255,255,.04)",
                      }}
                    >
                      <div
                        style={{
                          width: getProgressWidth(),
                          height: "100%",
                          borderRadius: 999,
                          background:
                            "linear-gradient(90deg, #facc15, #fde047)",
                          boxShadow:
                            "0 0 20px rgba(250,204,21,.26)",
                          transition: "width .4s ease",
                        }}
                      />
                    </div>

                    <div
                      className="grid grid-4"
                      style={{
                        gap: 12,
                        marginTop: 18,
                      }}
                    >
                      {shipmentStatuses.map((status, index) => {
                        const completed = currentStep >= index;
                        const current = currentStep === index;

                        return (
                          <div
                            key={status}
                            style={{
                              position: "relative",
                              minHeight: 95,
                              padding: 15,
                              border: completed
                                ? "1px solid rgba(250,204,21,.35)"
                                : "1px solid rgba(255,255,255,.08)",
                              borderRadius: 18,
                              background: completed
                                ? current
                                  ? "#facc15"
                                  : "rgba(250,204,21,.09)"
                                : "rgba(255,255,255,.025)",
                              color: current
                                ? "#090909"
                                : completed
                                  ? "#fde047"
                                  : "#71717a",
                              textAlign: "center",
                              boxShadow: current
                                ? "0 14px 30px rgba(250,204,21,.18)"
                                : "none",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                width: 30,
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 10px",
                                borderRadius: "50%",
                                background: current
                                  ? "rgba(0,0,0,.13)"
                                  : completed
                                    ? "rgba(250,204,21,.12)"
                                    : "rgba(255,255,255,.04)",
                                fontSize: 12,
                                fontWeight: 950,
                              }}
                            >
                              {completed ? "✓" : index + 1}
                            </div>

                            <div
                              style={{
                                fontSize: 12,
                                fontWeight: 900,
                                lineHeight: 1.4,
                              }}
                            >
                              {status}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    className="grid grid-2"
                    style={{
                      marginTop: 24,
                    }}
                  >
                    <article
                      className="card"
                      style={{
                        padding: 19,
                        borderRadius: 22,
                      }}
                    >
                      <div className="small">Müşteri Bilgileri</div>

                      <div
                        style={{
                          marginTop: 10,
                          fontSize: 21,
                          fontWeight: 900,
                        }}
                      >
                        {result.customerName}
                      </div>

                      <div
                        className="small"
                        style={{
                          marginTop: 9,
                          lineHeight: 1.7,
                        }}
                      >
                        {result.userEmail || "E-posta bulunmuyor"}
                        <br />
                        {result.phone || "Telefon bulunmuyor"}
                      </div>
                    </article>

                    <article
                      className="card"
                      style={{
                        padding: 19,
                        borderRadius: 22,
                      }}
                    >
                      <div className="small">Teslimat Bilgileri</div>

                      <div
                        style={{
                          marginTop: 10,
                          fontSize: 21,
                          fontWeight: 900,
                        }}
                      >
                        {result.city || "Şehir bilgisi bulunmuyor"}
                      </div>

                      <div
                        className="small"
                        style={{
                          marginTop: 9,
                          lineHeight: 1.7,
                        }}
                      >
                        {result.address || "Adres bilgisi bulunmuyor"}
                      </div>
                    </article>
                  </div>

                  <article
                    className="card"
                    style={{
                      marginTop: 20,
                      padding: 19,
                      borderRadius: 22,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <div>
                        <div className="small">Sipariş Özeti</div>

                        <h3
                          style={{
                            margin: "7px 0 0",
                            fontSize: 22,
                          }}
                        >
                          Sipariş edilen ürünler
                        </h3>
                      </div>

                      <div
                        style={{
                          padding: "7px 11px",
                          border: "1px solid rgba(255,255,255,.08)",
                          borderRadius: 999,
                          background: "rgba(255,255,255,.03)",
                          color: "#d4d4d8",
                          fontSize: 11,
                          fontWeight: 800,
                        }}
                      >
                        {result.paymentMethod || "Ödeme yöntemi belirtilmedi"}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gap: 13,
                        marginTop: 17,
                      }}
                    >
                      {result.items?.length ? (
                        result.items.map((item, index) => (
                          <div
                            key={`${item.name}-${index}`}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "space-between",
                              gap: 14,
                              paddingBottom: 13,
                              borderBottom:
                                "1px solid rgba(255,255,255,.08)",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontSize: 16,
                                  fontWeight: 850,
                                }}
                              >
                                {item.name}
                              </div>

                              <div
                                className="small"
                                style={{
                                  marginTop: 5,
                                }}
                              >
                                {item.quantity} adet • {item.size}
                              </div>
                            </div>

                            <strong
                              style={{
                                flexShrink: 0,
                                color: "#f4f4f5",
                              }}
                            >
                              {formatPrice(
                                item.price * item.quantity,
                              )}{" "}
                              TL
                            </strong>
                          </div>
                        ))
                      ) : (
                        <div className="small">
                          Ürün bilgisi bulunamadı.
                        </div>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        gap: 14,
                        marginTop: 18,
                      }}
                    >
                      <div>
                        <span className="small">Sipariş toplamı</span>

                        <div
                          style={{
                            marginTop: 3,
                            color: "#71717a",
                            fontSize: 10,
                          }}
                        >
                          Kargo dahil
                        </div>
                      </div>

                      <strong
                        style={{
                          color: "#facc15",
                          fontSize: 27,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {formatPrice(result.total)} TL
                      </strong>
                    </div>
                  </article>

                  {result.uploadedImage ? (
                    <article
                      className="card"
                      style={{
                        marginTop: 20,
                        padding: 19,
                        borderRadius: 22,
                      }}
                    >
                      <div className="small">Yüklenen Fotoğraf</div>

                      <img
                        src={result.uploadedImage}
                        alt="Sipariş için yüklenen fotoğraf"
                        style={{
                          width: 260,
                          maxWidth: "100%",
                          maxHeight: 320,
                          marginTop: 13,
                          objectFit: "cover",
                          border: "1px solid rgba(255,255,255,.08)",
                          borderRadius: 18,
                          boxShadow:
                            "0 20px 40px rgba(0,0,0,.25)",
                        }}
                      />
                    </article>
                  ) : null}

                  {result.note ? (
                    <article
                      className="card"
                      style={{
                        marginTop: 20,
                        padding: 19,
                        borderRadius: 22,
                      }}
                    >
                      <div className="small">Sipariş Notu</div>

                      <div
                        style={{
                          marginTop: 10,
                          color: "#d4d4d8",
                          lineHeight: 1.8,
                        }}
                      >
                        {result.note}
                      </div>
                    </article>
                  ) : null}
                </section>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}