"use client";

import { useEffect, useMemo, useState } from "react";

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
  createdAt?: string;
};

const statusOptions = [
  "Sipariş Alındı",
  "Hazırlanıyor",
  "Kargoya Verildi",
  "Teslim Edildi",
];

const paymentStatusOptions = [
  { value: "pending", label: "Bekliyor" },
  { value: "waiting", label: "Ödeme Bekleniyor" },
  { value: "paid", label: "Ödendi" },
  { value: "failed", label: "Başarısız" },
];

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [cargoInputs, setCargoInputs] = useState<Record<string, string>>({});
  const [expandedOrders, setExpandedOrders] = useState<Record<string, boolean>>(
    {},
  );
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  async function loadOrders() {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/orders", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Siparişler alınamadı.");
      }

      const normalizedOrders = Array.isArray(data) ? data : [];

      setOrders(normalizedOrders);

      const cargoMap: Record<string, string> = {};

      normalizedOrders.forEach((order: Order) => {
        cargoMap[order._id] = order.cargoCode || "";
      });

      setCargoInputs(cargoMap);
    } catch (error) {
      setMessageType("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Siparişler yüklenirken hata oluştu.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function updateOrder(
    id: string,
    payload: Record<string, string>,
    successMessage: string,
  ) {
    try {
      setUpdatingId(id);
      setMessage("");

      const response = await fetch(`/api/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Sipariş güncellenemedi.");
      }

      setMessageType("success");
      setMessage(successMessage);

      await loadOrders();
    } catch (error) {
      setMessageType("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Sipariş güncellenirken hata oluştu.",
      );
    } finally {
      setUpdatingId("");
    }
  }

  useEffect(() => {
    loadOrders();
  }, []);

  const orderSummary = useMemo(() => {
    return {
      total: orders.length,
      preparing: orders.filter((order) => order.status === "Hazırlanıyor")
        .length,
      shipped: orders.filter((order) => order.status === "Kargoya Verildi")
        .length,
      delivered: orders.filter((order) => order.status === "Teslim Edildi")
        .length,
    };
  }, [orders]);

  function toggleDetails(id: string) {
    setExpandedOrders((current) => ({
      ...current,
      [id]: !current[id],
    }));
  }

  function formatPrice(value: number) {
    return Number(value || 0).toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function formatDate(value?: string) {
    if (!value) return "Tarih bulunmuyor";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Tarih bulunmuyor";
    }

    return new Intl.DateTimeFormat("tr-TR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  }

  function getPaymentStatusLabel(status: string) {
    return (
      paymentStatusOptions.find((item) => item.value === status)?.label ||
      status ||
      "Belirtilmedi"
    );
  }

  return (
    <section
      className="card"
      style={{
        padding: 22,
        borderRadius: 28,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className="badge">Sipariş Yönetimi</div>

          <h3
            style={{
              margin: "16px 0 0",
              fontSize: 30,
              letterSpacing: "-0.03em",
            }}
          >
            Siparişleri yönet
          </h3>

          <p
            className="small"
            style={{
              maxWidth: 620,
              marginTop: 9,
              lineHeight: 1.7,
            }}
          >
            Sipariş durumunu, ödeme durumunu ve kargo kodunu buradan
            güncelleyebilirsin.
          </p>
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={loadOrders}
          disabled={loading}
          style={{
            width: "auto",
            opacity: loading ? 0.65 : 1,
          }}
        >
          {loading ? "Yükleniyor..." : "Yenile"}
        </button>
      </div>

      <div
        className="grid grid-4"
        style={{
          gap: 12,
          marginTop: 22,
        }}
      >
        {[
          ["Toplam", orderSummary.total],
          ["Hazırlanıyor", orderSummary.preparing],
          ["Kargoda", orderSummary.shipped],
          ["Teslim Edildi", orderSummary.delivered],
        ].map(([label, value]) => (
          <div
            key={String(label)}
            style={{
              padding: 16,
              border: "1px solid rgba(255,255,255,.07)",
              borderRadius: 17,
              background: "rgba(255,255,255,.025)",
            }}
          >
            <span
              className="small"
              style={{
                display: "block",
                fontSize: 11,
              }}
            >
              {label}
            </span>

            <strong
              style={{
                display: "block",
                marginTop: 7,
                color: "#facc15",
                fontSize: 24,
              }}
            >
              {value}
            </strong>
          </div>
        ))}
      </div>

      {message ? (
        <div
          style={{
            marginTop: 18,
            padding: "12px 14px",
            border:
              messageType === "success"
                ? "1px solid rgba(34,197,94,.22)"
                : "1px solid rgba(239,68,68,.22)",
            borderRadius: 14,
            background:
              messageType === "success"
                ? "rgba(34,197,94,.07)"
                : "rgba(239,68,68,.07)",
            color: messageType === "success" ? "#86efac" : "#fca5a5",
            fontSize: 13,
            fontWeight: 750,
          }}
        >
          {message}
        </div>
      ) : null}

      {loading ? (
        <div
          style={{
            marginTop: 20,
            padding: 24,
            border: "1px solid rgba(255,255,255,.07)",
            borderRadius: 18,
            color: "#a1a1aa",
          }}
        >
          Siparişler yükleniyor...
        </div>
      ) : orders.length === 0 ? (
        <div
          style={{
            marginTop: 20,
            padding: "36px 20px",
            border: "1px solid rgba(255,255,255,.07)",
            borderRadius: 18,
            background: "rgba(255,255,255,.02)",
            textAlign: "center",
          }}
        >
          <strong style={{ fontSize: 20 }}>Henüz sipariş yok</strong>

          <p className="small" style={{ marginTop: 8 }}>
            Yeni siparişler oluştuğunda burada listelenecek.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: 16,
            marginTop: 20,
          }}
        >
          {orders.map((order) => {
            const detailsOpen = Boolean(expandedOrders[order._id]);
            const isUpdating = updatingId === order._id;

            return (
              <article
                key={order._id}
                style={{
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 22,
                  background: "rgba(255,255,255,.018)",
                }}
              >
                <div style={{ padding: 18 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 18,
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: "#facc15",
                          fontSize: 24,
                          fontWeight: 950,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {order.orderCode}
                      </div>

                      <div
                        className="small"
                        style={{
                          marginTop: 6,
                          lineHeight: 1.7,
                        }}
                      >
                        {order.customerName}
                        <br />
                        {order.userEmail}
                        <br />
                        {order.phone}
                      </div>

                      <div
                        className="small"
                        style={{
                          marginTop: 6,
                          fontSize: 11,
                        }}
                      >
                        {formatDate(order.createdAt)}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        justifyItems: "end",
                        gap: 8,
                      }}
                    >
                      <span className="badge">{order.status}</span>

                      <span
                        style={{
                          color: "#a1a1aa",
                          fontSize: 12,
                          fontWeight: 750,
                        }}
                      >
                        {order.paymentMethod || "Ödeme belirtilmedi"} •{" "}
                        {getPaymentStatusLabel(order.paymentStatus)}
                      </span>

                      <strong
                        style={{
                          color: "#facc15",
                          fontSize: 22,
                        }}
                      >
                        {formatPrice(order.total)} TL
                      </strong>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      marginTop: 17,
                      paddingTop: 15,
                      borderTop: "1px solid rgba(255,255,255,.07)",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      className="small"
                      style={{
                        lineHeight: 1.6,
                      }}
                    >
                      Kargo kodu:{" "}
                      <strong style={{ color: "#e4e4e7" }}>
                        {order.cargoCode || "Henüz girilmedi"}
                      </strong>
                    </div>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => toggleDetails(order._id)}
                      style={{
                        width: "auto",
                        minHeight: 40,
                        padding: "8px 13px",
                      }}
                    >
                      {detailsOpen ? "Detayları Kapat" : "Detayları Aç"}
                    </button>
                  </div>
                </div>

                {detailsOpen ? (
                  <div
                    style={{
                      padding: 18,
                      borderTop: "1px solid rgba(255,255,255,.08)",
                      background: "rgba(0,0,0,.12)",
                    }}
                  >
                    <div className="grid grid-2">
                      <div
                        className="card"
                        style={{
                          padding: 16,
                          borderRadius: 18,
                        }}
                      >
                        <div className="small">Teslimat Adresi</div>

                        <strong
                          style={{
                            display: "block",
                            marginTop: 8,
                            fontSize: 18,
                          }}
                        >
                          {order.city}
                        </strong>

                        <p
                          className="small"
                          style={{
                            margin: "7px 0 0",
                            lineHeight: 1.7,
                          }}
                        >
                          {order.address}
                        </p>
                      </div>

                      <div
                        className="card"
                        style={{
                          padding: 16,
                          borderRadius: 18,
                        }}
                      >
                        <div className="small">Sipariş İçeriği</div>

                        <div
                          style={{
                            display: "grid",
                            gap: 9,
                            marginTop: 10,
                          }}
                        >
                          {order.items?.length ? (
                            order.items.map((item, index) => (
                              <div
                                key={`${item.name}-${index}`}
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  gap: 12,
                                  paddingBottom: 8,
                                  borderBottom:
                                    "1px solid rgba(255,255,255,.06)",
                                }}
                              >
                                <div>
                                  <strong
                                    style={{
                                      display: "block",
                                      fontSize: 13,
                                    }}
                                  >
                                    {item.name}
                                  </strong>

                                  <span
                                    className="small"
                                    style={{
                                      display: "block",
                                      marginTop: 3,
                                      fontSize: 11,
                                    }}
                                  >
                                    {item.quantity} adet • {item.size}
                                  </span>
                                </div>

                                <strong
                                  style={{
                                    flexShrink: 0,
                                    fontSize: 13,
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
                      </div>
                    </div>

                    {order.uploadedImage ? (
                      <div
                        className="card"
                        style={{
                          marginTop: 14,
                          padding: 16,
                          borderRadius: 18,
                        }}
                      >
                        <div className="small">Yüklenen Fotoğraf</div>

                        <img
                          src={order.uploadedImage}
                          alt="Sipariş için yüklenen görsel"
                          style={{
                            width: 190,
                            maxWidth: "100%",
                            maxHeight: 260,
                            marginTop: 10,
                            objectFit: "cover",
                            border: "1px solid rgba(255,255,255,.08)",
                            borderRadius: 15,
                          }}
                        />
                      </div>
                    ) : null}

                    {order.note ? (
                      <div
                        className="card"
                        style={{
                          marginTop: 14,
                          padding: 16,
                          borderRadius: 18,
                        }}
                      >
                        <div className="small">Sipariş Notu</div>

                        <div
                          style={{
                            marginTop: 8,
                            color: "#d4d4d8",
                            lineHeight: 1.7,
                          }}
                        >
                          {order.note}
                        </div>
                      </div>
                    ) : null}

                    <div
                      className="grid grid-2"
                      style={{
                        marginTop: 16,
                      }}
                    >
                      <div>
                        <label style={labelStyle}>Sipariş Durumu</label>

                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 8,
                            marginTop: 9,
                          }}
                        >
                          {statusOptions.map((status) => {
                            const active = order.status === status;

                            return (
                              <button
                                key={status}
                                type="button"
                                disabled={isUpdating}
                                onClick={() =>
                                  updateOrder(
                                    order._id,
                                    { status },
                                    "Sipariş durumu güncellendi.",
                                  )
                                }
                                style={{
                                  minHeight: 40,
                                  padding: "9px 12px",
                                  border: active
                                    ? "1px solid #facc15"
                                    : "1px solid rgba(255,255,255,.09)",
                                  borderRadius: 12,
                                  background: active
                                    ? "#facc15"
                                    : "rgba(255,255,255,.035)",
                                  color: active ? "#111" : "#e4e4e7",
                                  fontSize: 12,
                                  fontWeight: 850,
                                  cursor: isUpdating
                                    ? "not-allowed"
                                    : "pointer",
                                  opacity: isUpdating ? 0.65 : 1,
                                }}
                              >
                                {status}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label style={labelStyle}>Ödeme Durumu</label>

                        <select
                          className="input"
                          value={order.paymentStatus || "pending"}
                          disabled={isUpdating}
                          onChange={(event) =>
                            updateOrder(
                              order._id,
                              {
                                paymentStatus: event.target.value,
                              },
                              "Ödeme durumu güncellendi.",
                            )
                          }
                          style={{ marginTop: 9 }}
                        >
                          {paymentStatusOptions.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div style={{ marginTop: 16 }}>
                      <label style={labelStyle}>Kargo Kodu</label>

                      <div
                        style={{
                          display: "flex",
                          gap: 9,
                          marginTop: 9,
                          flexWrap: "wrap",
                        }}
                      >
                        <input
                          className="input"
                          value={cargoInputs[order._id] || ""}
                          onChange={(event) =>
                            setCargoInputs((current) => ({
                              ...current,
                              [order._id]:
                                event.target.value.toUpperCase(),
                            }))
                          }
                          placeholder="Örn: ARS123456"
                          style={{
                            flex: 1,
                            minWidth: 220,
                          }}
                        />

                        <button
                          type="button"
                          className="btn btn-primary"
                          disabled={isUpdating}
                          onClick={() =>
                            updateOrder(
                              order._id,
                              {
                                cargoCode:
                                  cargoInputs[order._id]?.trim() || "",
                              },
                              "Kargo kodu kaydedildi.",
                            )
                          }
                          style={{
                            width: "auto",
                            minWidth: 120,
                            opacity: isUpdating ? 0.65 : 1,
                          }}
                        >
                          {isUpdating ? "Kaydediliyor..." : "Kargo Kodunu Kaydet"}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#e4e4e7",
  fontSize: 13,
  fontWeight: 850,
};