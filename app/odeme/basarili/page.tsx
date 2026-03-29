export default function PaymentSuccessPage() {
  return (
    <main className="container" style={{ padding: "40px 16px" }}>
      <div
        className="card"
        style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}
      >
        <div className="badge">Ödeme Sonucu</div>

        <h1 style={{ fontSize: 38, marginTop: 16 }}>
          Ödeme tamamlandı 🎉
        </h1>

        <p className="small" style={{ marginTop: 12 }}>
          iyzico dönüşü başarıyla alındı.
        </p>
      </div>
    </main>
  );
}