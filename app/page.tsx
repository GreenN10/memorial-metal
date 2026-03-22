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
              <div className="badge">Premium Metal Baskı Mağazası</div>

              <h1 className="home-title">
                Fotoğraflarınızı
                <br />
                <span style={{ color: "#facc15" }}>metal tablolarla</span>
                <br />
                ölümsüzleştirin.
              </h1>

              <p className="small home-desc">
                MemoriaMetal ile fotoğrafını yükle, ölçünü seç, metal tabloya
                dönüştür, sipariş ver ve üretim sürecini kolayca takip et.
              </p>

              <div className="hero-actions">
                <Link href="/urunler" className="btn btn-primary">
                  Ürünleri İncele
                </Link>

                <Link href="/tasarla" className="btn btn-secondary">
                  Tasarıma Başla
                </Link>
              </div>

              <div className="grid grid-4 home-stats">
                <div className="card" style={{ padding: 18 }}>
                  <div style={{ fontSize: 22, fontWeight: 900 }}>48 Saat</div>
                  <div className="small">Ortalama üretim süresi</div>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div style={{ fontSize: 22, fontWeight: 900 }}>3 Boy</div>
                  <div className="small">A5 • A4 • A3</div>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div style={{ fontSize: 22, fontWeight: 900 }}>Canlı</div>
                  <div className="small">Fotoğraf önizleme</div>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div style={{ fontSize: 22, fontWeight: 900 }}>Takip</div>
                  <div className="small">Sipariş ve kargo</div>
                </div>
              </div>
            </div>

            <div>
              <div className="card home-hero-card">
                <div className="home-hero-right">
                  <div className="home-hero-preview-wrap">
                    <div className="home-metal-frame">
                      <div className="home-metal-inner">
                        <div style={{ color: "#111" }}>
                          <div style={{ fontSize: 26, fontWeight: 900 }}>
                            Metal Baskı
                          </div>
                          <div style={{ marginTop: 6, fontSize: 14 }}>
                            Parlak • Dayanıklı • Şık
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card home-hero-info">
                    <div className="badge">Profesyonel Baskı Yüzeyi</div>

                    <h3 className="home-hero-info-title">
                      Fotoğrafın metal üzerinde daha canlı,
                      <span style={{ color: "#facc15" }}> daha premium</span>{" "}
                      görünür.
                    </h3>

                    <p className="small" style={{ marginTop: 12, lineHeight: 1.8 }}>
                      Çizilmeye dayanıklı yüzey, modern metal görünüm ve uzun
                      ömürlü baskı kalitesi.
                    </p>

                    <div className="grid grid-2" style={{ marginTop: 18 }}>
                      <div className="card" style={{ padding: 14 }}>
                        <div style={{ fontWeight: 900 }}>Premium</div>
                        <div className="small">Metal parlaklık</div>
                      </div>

                      <div className="card" style={{ padding: 14 }}>
                        <div style={{ fontWeight: 900 }}>Özel</div>
                        <div className="small">Kişiye özel üretim</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 60 }}>
        <div className="container">
          <h2 style={{ fontSize: 34 }}>Metal Tablolar</h2>

          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {products.length ? (
              products.map((p: any) => (
                <ProductCard
                  key={String(p._id)}
                  product={{ ...p, _id: String(p._id) }}
                />
              ))
            ) : (
              <div className="card" style={{ padding: 20 }}>
                Henüz ürün yok.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}