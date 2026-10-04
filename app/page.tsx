import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  await connectDB();

  const products = await Product.find({ isActive: true })
    .sort({ createdAt: -1 })
    .limit(6)
    .lean();

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="home-hero-grid">
            <div>
              <div className="badge">Premium Kişiye Özel Metal Baskı</div>

              <h1 className="home-title">
                En güzel anılarınızı
                <br />
                <span style={{ color: "#facc15" }}>metal üzerinde</span>
                <br />
                ölümsüzleştirin.
              </h1>

              <p className="small home-desc">
                Fotoğrafınızı yükleyin, ölçünüzü seçin ve size özel metal
                tablonuzu birkaç adımda hazırlayın. Canlı renkler, dayanıklı
                yüzey ve premium görünüm.
              </p>

              <div className="hero-actions">
                <Link href="/urunler" className="btn btn-primary">
                  Ürünleri İncele
                </Link>

                <Link href="/tasarla" className="btn btn-secondary">
                  Kendi Tablonu Tasarla
                </Link>
              </div>

              <div className="grid grid-4 home-stats">
                <div className="card" style={{ padding: 18 }}>
                  <div
                    style={{
                      color: "#facc15",
                      fontSize: 22,
                      fontWeight: 900,
                    }}
                  >
                    48 Saat
                  </div>

                  <div className="small" style={{ marginTop: 5 }}>
                    Ortalama üretim
                  </div>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div
                    style={{
                      color: "#facc15",
                      fontSize: 22,
                      fontWeight: 900,
                    }}
                  >
                    3 Boy
                  </div>

                  <div className="small" style={{ marginTop: 5 }}>
                    A5 • A4 • A3
                  </div>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div
                    style={{
                      color: "#facc15",
                      fontSize: 22,
                      fontWeight: 900,
                    }}
                  >
                    Premium
                  </div>

                  <div className="small" style={{ marginTop: 5 }}>
                    Metal baskı yüzeyi
                  </div>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div
                    style={{
                      color: "#facc15",
                      fontSize: 22,
                      fontWeight: 900,
                    }}
                  >
                    Güvenli
                  </div>

                  <div className="small" style={{ marginTop: 5 }}>
                    Koruyucu paketleme
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card home-hero-card">
                <div className="home-hero-right">
                  <div className="home-hero-preview-wrap">
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          width: 260,
                          height: 260,
                          borderRadius: "50%",
                          background: "rgba(250, 204, 21, 0.09)",
                          filter: "blur(35px)",
                        }}
                      />

                      <div
                        className="home-metal-frame"
                        style={{
                          position: "relative",
                          transform: "rotate(-3deg)",
                        }}
                      >
                        <div className="home-metal-inner">
                          <div style={{ color: "#111", padding: 18 }}>
                            <div
                              style={{
                                marginBottom: 12,
                                color: "#a16207",
                                fontSize: 11,
                                fontWeight: 900,
                                letterSpacing: 1,
                                textTransform: "uppercase",
                              }}
                            >
                              Kişiye Özel
                            </div>

                            <div
                              style={{
                                fontSize: 28,
                                fontWeight: 950,
                                lineHeight: 1.05,
                              }}
                            >
                              Metal
                              <br />
                              Tablo
                            </div>

                            <div
                              style={{
                                marginTop: 12,
                                color: "#3f3f46",
                                fontSize: 13,
                                fontWeight: 700,
                              }}
                            >
                              Parlak • Dayanıklı • Şık
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card home-hero-info">
                    <div className="badge">MemoriaMetal Kalitesi</div>

                    <h3 className="home-hero-info-title">
                      Fotoğraflarınız metal üzerinde
                      <span style={{ color: "#facc15" }}>
                        {" "}
                        daha canlı ve etkileyici
                      </span>{" "}
                      görünür.
                    </h3>

                    <p
                      className="small"
                      style={{
                        marginTop: 12,
                        lineHeight: 1.8,
                      }}
                    >
                      Sevdiğiniz fotoğrafları modern dekorasyon ürünlerine ve
                      unutulmaz hediyelere dönüştürün.
                    </p>

                    <div className="grid grid-2" style={{ marginTop: 18 }}>
                      <div className="card" style={{ padding: 14 }}>
                        <div style={{ fontWeight: 900 }}>Canlı Renkler</div>
                        <div className="small" style={{ marginTop: 4 }}>
                          Detaylı baskı
                        </div>
                      </div>

                      <div className="card" style={{ padding: 14 }}>
                        <div style={{ fontWeight: 900 }}>Özel Üretim</div>
                        <div className="small" style={{ marginTop: 4 }}>
                          Fotoğrafınıza özel
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/tasarla"
                      className="btn btn-primary"
                      style={{
                        width: "100%",
                        marginTop: 18,
                      }}
                    >
                      Fotoğraf Yükleyip Başla
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "10px 0 70px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              gap: 20,
              marginBottom: 26,
            }}
          >
            <div>
              <div className="badge">Öne Çıkan Ürünler</div>

              <h2
                style={{
                  margin: "16px 0 0",
                  fontSize: 36,
                  letterSpacing: "-0.03em",
                }}
              >
                Metal Tablolar
              </h2>

              <p
                className="small"
                style={{
                  maxWidth: 620,
                  marginTop: 10,
                  fontSize: 15,
                  lineHeight: 1.7,
                }}
              >
                Fotoğraflarınızı uzun ömürlü, modern ve kişiye özel metal
                tablolara dönüştürün.
              </p>
            </div>

            <Link
              href="/urunler"
              className="btn btn-secondary"
              style={{
                width: "auto",
                flexShrink: 0,
              }}
            >
              Tüm Ürünleri Gör
            </Link>
          </div>

          <div className="grid grid-3">
            {products.length ? (
              products.map((product: any) => (
                <ProductCard
                  key={String(product._id)}
                  product={{
                    ...product,
                    _id: String(product._id),
                  }}
                />
              ))
            ) : (
              <div
                className="card"
                style={{
                  gridColumn: "1 / -1",
                  padding: 30,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 900 }}>
                  Henüz ürün bulunmuyor
                </div>

                <p className="small" style={{ marginTop: 8 }}>
                  Admin panelinden ürün eklediğinizde burada otomatik
                  görünecektir.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section style={{ padding: "20px 0 80px" }}>
        <div className="container">
          <div
            className="card"
            style={{
              padding: 28,
              borderRadius: 32,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div className="badge">Nasıl Sipariş Verilir?</div>

              <h2
                style={{
                  margin: "18px 0 0",
                  fontSize: 34,
                }}
              >
                Dört kolay adımda metal tablonuz hazır
              </h2>

              <p
                className="small"
                style={{
                  maxWidth: 650,
                  margin: "12px auto 0",
                  fontSize: 15,
                  lineHeight: 1.7,
                }}
              >
                Fotoğrafınızı seçmekten kargo teslimatına kadar bütün süreç
                kolay ve anlaşılır.
              </p>
            </div>

            <div className="grid grid-4" style={{ marginTop: 28 }}>
              {[
                {
                  number: "01",
                  title: "Fotoğrafını Yükle",
                  description: "Kullanmak istediğin fotoğrafı seç.",
                },
                {
                  number: "02",
                  title: "Ölçünü Seç",
                  description: "A5, A4 veya A3 boyutunu belirle.",
                },
                {
                  number: "03",
                  title: "Siparişini Ver",
                  description: "Bilgilerini tamamla ve siparişi oluştur.",
                },
                {
                  number: "04",
                  title: "Kapına Gelsin",
                  description: "Ürünün hazırlanıp güvenle gönderilsin.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="card"
                  style={{
                    padding: 20,
                    minHeight: 180,
                  }}
                >
                  <div
                    style={{
                      color: "#facc15",
                      fontSize: 14,
                      fontWeight: 950,
                    }}
                  >
                    {step.number}
                  </div>

                  <h3
                    style={{
                      margin: "18px 0 8px",
                      fontSize: 20,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="small"
                    style={{
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}