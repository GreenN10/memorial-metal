type Stats = {
  ordersCount: number;
  productsCount: number;
  usersCount: number;
  revenue: number;
  orderSeries: { label: string; value: number }[];
};

export default function AdminDashboard({ stats }: { stats: Stats }) {
  const max = Math.max(...stats.orderSeries.map((s) => s.value), 1);

  return (
    <div className="grid grid-2">
      <div className="card" style={{ padding: 24 }}>
        <div className="badge">Dashboard</div>
        <h3 style={{ fontSize: 32, marginTop: 16, marginBottom: 8 }}>
          Son 7 Gün Sipariş Grafiği
        </h3>
        <p className="small">Günlük sipariş dağılımını buradan görebilirsin.</p>

        <div
          style={{
            marginTop: 28,
            height: 260,
            padding: "20px 12px 36px",
            borderRadius: 22,
            border: "1px solid rgba(255,255,255,.08)",
            background: "rgba(255,255,255,.02)",
            display: "flex",
            alignItems: "end",
            gap: 12
          }}
        >
          {stats.orderSeries.map((item) => {
            const h = Math.max((item.value / max) * 170, 14);

            return (
              <div
                key={item.label}
                style={{
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "end",
                  height: "100%",
                  position: "relative"
                }}
              >
                <div
                  style={{
                    marginBottom: 8,
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#facc15",
                    minHeight: 18
                  }}
                >
                  {item.value}
                </div>

                <div
                  style={{
                    width: "100%",
                    maxWidth: 54,
                    height: h,
                    borderRadius: "16px 16px 8px 8px",
                    background: "linear-gradient(180deg, #fde047 0%, #facc15 55%, #ca8a04 100%)",
                    boxShadow: "0 12px 24px rgba(250,204,21,.18)"
                  }}
                />

                <div
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    color: "#a1a1aa",
                    fontWeight: 700,
                    textAlign: "center"
                  }}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card" style={{ padding: 22 }}>
          <div className="small">Toplam Sipariş</div>
          <div style={{ fontSize: 42, fontWeight: 900, color: "#facc15", marginTop: 10 }}>
            {stats.ordersCount}
          </div>
        </div>

        <div className="card" style={{ padding: 22 }}>
          <div className="small">Toplam Ürün</div>
          <div style={{ fontSize: 42, fontWeight: 900, color: "#facc15", marginTop: 10 }}>
            {stats.productsCount}
          </div>
        </div>

        <div className="card" style={{ padding: 22 }}>
          <div className="small">Toplam Üye</div>
          <div style={{ fontSize: 42, fontWeight: 900, color: "#facc15", marginTop: 10 }}>
            {stats.usersCount}
          </div>
        </div>

        <div className="card" style={{ padding: 22 }}>
          <div className="small">Toplam Ciro</div>
          <div style={{ fontSize: 42, fontWeight: 900, color: "#facc15", marginTop: 10 }}>
            {stats.revenue.toFixed(2)} TL
          </div>
        </div>
      </div>
    </div>
  );
}