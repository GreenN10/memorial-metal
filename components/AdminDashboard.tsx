type Stats = {
  ordersCount: number;
  productsCount: number;
  usersCount: number;
  revenue: number;
  orderSeries: { label: string; value: number }[];
};

export default function AdminDashboard({ stats }: { stats: Stats }) {
  const maxValue = Math.max(
    ...stats.orderSeries.map((item) => item.value),
    1,
  );

  const averageOrderValue =
    stats.ordersCount > 0
      ? stats.revenue / stats.ordersCount
      : 0;

  const totalLast7Days = stats.orderSeries.reduce(
    (total, item) => total + item.value,
    0,
  );

  const statCards = [
    {
      label: "Toplam Sipariş",
      value: stats.ordersCount.toLocaleString("tr-TR"),
      description: "Tüm zamanlardaki siparişler",
      icon: "01",
    },
    {
      label: "Toplam Ürün",
      value: stats.productsCount.toLocaleString("tr-TR"),
      description: "Sistemde kayıtlı ürünler",
      icon: "02",
    },
    {
      label: "Toplam Üye",
      value: stats.usersCount.toLocaleString("tr-TR"),
      description: "Kayıtlı müşteri hesapları",
      icon: "03",
    },
    {
      label: "Toplam Ciro",
      value: `${stats.revenue.toLocaleString("tr-TR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} TL`,
      description: "Tüm siparişlerin toplamı",
      icon: "04",
    },
  ];

  return (
    <section
      style={{
        display: "grid",
        gap: 22,
      }}
    >
      <div
        className="grid grid-4"
        style={{
          gap: 16,
        }}
      >
        {statCards.map((card) => (
          <article
            key={card.label}
            className="card"
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: 170,
              padding: 22,
              borderRadius: 24,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 150,
                height: 150,
                borderRadius: "50%",
                background: "rgba(250,204,21,.06)",
                filter: "blur(28px)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <span
                    style={{
                      display: "block",
                      color: "#a1a1aa",
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: ".03em",
                    }}
                  >
                    {card.label}
                  </span>

                  <strong
                    style={{
                      display: "block",
                      marginTop: 12,
                      color: "#facc15",
                      fontSize: 32,
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      wordBreak: "break-word",
                    }}
                  >
                    {card.value}
                  </strong>
                </div>

                <span
                  style={{
                    display: "inline-flex",
                    width: 38,
                    height: 38,
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid rgba(250,204,21,.17)",
                    borderRadius: 13,
                    background: "rgba(250,204,21,.07)",
                    color: "#facc15",
                    fontSize: 11,
                    fontWeight: 950,
                  }}
                >
                  {card.icon}
                </span>
              </div>

              <p
                className="small"
                style={{
                  margin: "18px 0 0",
                  lineHeight: 1.55,
                }}
              >
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div
        className="grid grid-2"
        style={{
          alignItems: "stretch",
          gap: 22,
        }}
      >
        <article
          className="card"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: 24,
            borderRadius: 28,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -110,
              right: -90,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "rgba(250,204,21,.055)",
              filter: "blur(38px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 14,
              }}
            >
              <div>
                <div className="badge">Son 7 Gün</div>

                <h3
                  style={{
                    margin: "16px 0 0",
                    fontSize: 30,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Günlük sipariş dağılımı
                </h3>

                <p
                  className="small"
                  style={{
                    maxWidth: 530,
                    marginTop: 9,
                    lineHeight: 1.7,
                  }}
                >
                  Son yedi gündeki sipariş hareketlerini günlük olarak
                  karşılaştırabilirsiniz.
                </p>
              </div>

              <div
                style={{
                  padding: "10px 13px",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 14,
                  background: "rgba(255,255,255,.025)",
                  textAlign: "right",
                }}
              >
                <span
                  className="small"
                  style={{
                    display: "block",
                    fontSize: 10,
                  }}
                >
                  7 günlük toplam
                </span>

                <strong
                  style={{
                    display: "block",
                    marginTop: 3,
                    color: "#facc15",
                    fontSize: 20,
                  }}
                >
                  {totalLast7Days}
                </strong>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                height: 290,
                alignItems: "flex-end",
                gap: 12,
                marginTop: 26,
                padding: "20px 14px 18px",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 22,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.025), rgba(255,255,255,.012))",
              }}
            >
              {stats.orderSeries.map((item) => {
                const barHeight = Math.max(
                  (item.value / maxValue) * 190,
                  12,
                );

                return (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      height: "100%",
                      minWidth: 0,
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <span
                      style={{
                        minHeight: 18,
                        marginBottom: 8,
                        color: "#facc15",
                        fontSize: 11,
                        fontWeight: 900,
                      }}
                    >
                      {item.value}
                    </span>

                    <div
                      title={`${item.label}: ${item.value} sipariş`}
                      style={{
                        width: "100%",
                        maxWidth: 48,
                        height: barHeight,
                        minHeight: 12,
                        borderRadius: "14px 14px 7px 7px",
                        background:
                          "linear-gradient(180deg, #fde047 0%, #facc15 58%, #ca8a04 100%)",
                        boxShadow:
                          "0 14px 28px rgba(250,204,21,.15)",
                        transition: "height .3s ease",
                      }}
                    />

                    <span
                      style={{
                        marginTop: 10,
                        color: "#a1a1aa",
                        fontSize: 11,
                        fontWeight: 750,
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        <aside
          style={{
            display: "grid",
            gap: 16,
          }}
        >
          <article
            className="card"
            style={{
              padding: 22,
              borderRadius: 24,
            }}
          >
            <span
              style={{
                color: "#facc15",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Satış Özeti
            </span>

            <h3
              style={{
                margin: "9px 0 0",
                fontSize: 26,
              }}
            >
              Genel performans
            </h3>

            <div
              style={{
                display: "grid",
                gap: 13,
                marginTop: 20,
              }}
            >
              <div style={summaryCardStyle}>
                <div>
                  <span className="small">Ortalama sipariş tutarı</span>

                  <strong style={summaryValueStyle}>
                    {averageOrderValue.toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    TL
                  </strong>
                </div>

                <span style={summaryNumberStyle}>01</span>
              </div>

              <div style={summaryCardStyle}>
                <div>
                  <span className="small">Son 7 gün siparişi</span>

                  <strong style={summaryValueStyle}>
                    {totalLast7Days}
                  </strong>
                </div>

                <span style={summaryNumberStyle}>02</span>
              </div>

              <div style={summaryCardStyle}>
                <div>
                  <span className="small">Ürün başına sipariş</span>

                  <strong style={summaryValueStyle}>
                    {stats.productsCount > 0
                      ? (
                          stats.ordersCount / stats.productsCount
                        ).toLocaleString("tr-TR", {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })
                      : "0,0"}
                  </strong>
                </div>

                <span style={summaryNumberStyle}>03</span>
              </div>
            </div>
          </article>

          <article
            className="card"
            style={{
              padding: 22,
              borderRadius: 24,
            }}
          >
            <span
              style={{
                color: "#facc15",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Hızlı Bilgi
            </span>

            <div
              style={{
                display: "grid",
                gap: 10,
                marginTop: 16,
              }}
            >
              {[
                "Ürün ve sipariş yönetimi aşağıdaki bölümlerde yer alır.",
                "Kargo kodu ve sipariş durumu sipariş panelinden güncellenir.",
                "Yeni siparişler tarih sırasına göre listelenir.",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 9,
                    padding: "11px 12px",
                    border: "1px solid rgba(255,255,255,.07)",
                    borderRadius: 13,
                    background: "rgba(255,255,255,.022)",
                    color: "#a1a1aa",
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      width: 18,
                      height: 18,
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      borderRadius: "50%",
                      background: "rgba(34,197,94,.1)",
                      color: "#86efac",
                      fontSize: 10,
                    }}
                  >
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}

const summaryCardStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 14,
  padding: "15px 16px",
  border: "1px solid rgba(255,255,255,.07)",
  borderRadius: 16,
  background: "rgba(255,255,255,.025)",
};

const summaryValueStyle: React.CSSProperties = {
  display: "block",
  marginTop: 6,
  color: "#f4f4f5",
  fontSize: 21,
  lineHeight: 1.2,
};

const summaryNumberStyle: React.CSSProperties = {
  display: "inline-flex",
  width: 35,
  height: 35,
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  border: "1px solid rgba(250,204,21,.15)",
  borderRadius: 12,
  background: "rgba(250,204,21,.06)",
  color: "#facc15",
  fontSize: 10,
  fontWeight: 950,
};