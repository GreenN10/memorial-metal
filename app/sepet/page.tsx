"use client";

import Link from "next/link";
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

const SHIPPING_PRICE = 49.9;

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("memoria-cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];

      setCart(Array.isArray(parsedCart) ? parsedCart : []);
    } catch {
      setCart([]);
      localStorage.removeItem("memoria-cart");
    } finally {
      setIsLoaded(true);
    }
  }, []);

  function saveCart(updatedCart: CartItem[]) {
    setCart(updatedCart);
    localStorage.setItem("memoria-cart", JSON.stringify(updatedCart));
  }

  function removeItem(id: string) {
    const updatedCart = cart.filter((item) => item.id !== id);
    saveCart(updatedCart);
  }

  function increaseQty(id: string) {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.min(99, item.quantity + 1),
          }
        : item,
    );

    saveCart(updatedCart);
  }

  function decreaseQty(id: string) {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity - 1),
          }
        : item,
    );

    saveCart(updatedCart);
  }

  function clearCart() {
    saveCart([]);
  }

  const subtotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  }, [cart]);

  const shipping = cart.length ? SHIPPING_PRICE : 0;
  const total = subtotal + shipping;

  if (!isLoaded) {
    return (
      <main className="container" style={{ padding: "40px 16px 80px" }}>
        <div className="card" style={{ padding: 24 }}>
          Sepet yükleniyor...
        </div>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: "40px 16px 80px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className="badge">Alışveriş Sepeti</div>

          <h1
            style={{
              margin: "16px 0 0",
              fontSize: 42,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            Sepetim
          </h1>

          <p
            className="small"
            style={{
              marginTop: 10,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Ürünlerini kontrol et, adetleri düzenle ve ödeme adımına geç.
          </p>
        </div>

        {cart.length > 0 ? (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={clearCart}
            style={{ width: "auto" }}
          >
            Sepeti Temizle
          </button>
        ) : null}
      </div>

      {cart.length === 0 ? (
        <section
          className="card"
          style={{
            marginTop: 28,
            padding: "52px 24px",
            borderRadius: 28,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 74,
              height: 74,
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              borderRadius: 22,
              background: "rgba(250,204,21,.1)",
              color: "#facc15",
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            0
          </div>

          <h2
            style={{
              margin: "20px 0 0",
              fontSize: 30,
            }}
          >
            Sepetin şu anda boş
          </h2>

          <p
            className="small"
            style={{
              maxWidth: 520,
              margin: "10px auto 0",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Beğendiğin ürünü seçip fotoğrafını yükleyerek kişiye özel metal
            tablonu hazırlayabilirsin.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginTop: 22,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/urunler"
              className="btn btn-primary"
              style={{ width: "auto" }}
            >
              Ürünleri İncele
            </Link>

            <Link
              href="/tasarla"
              className="btn btn-secondary"
              style={{ width: "auto" }}
            >
              Tasarıma Başla
            </Link>
          </div>
        </section>
      ) : (
        <div
          className="grid grid-2"
          style={{
            alignItems: "start",
            marginTop: 28,
            gap: 24,
          }}
        >
          <section
            className="card"
            style={{
              padding: 20,
              borderRadius: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div>
                <span
                  style={{
                    color: "#facc15",
                    fontSize: 12,
                    fontWeight: 900,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  Sepetteki Ürünler
                </span>

                <h2
                  style={{
                    margin: "8px 0 0",
                    fontSize: 27,
                  }}
                >
                  {cart.length} ürün
                </h2>
              </div>

              <Link
                href="/urunler"
                style={{
                  color: "#facc15",
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                Alışverişe devam et →
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gap: 16,
                marginTop: 20,
              }}
            >
              {cart.map((item) => (
                <article
                  key={item.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "110px minmax(0, 1fr)",
                    gap: 16,
                    padding: 14,
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: 20,
                    background: "rgba(255,255,255,.025)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: 135,
                      overflow: "hidden",
                      borderRadius: 16,
                      background:
                        "radial-gradient(circle at top, rgba(255,255,255,.95), rgba(220,220,224,.78) 45%, rgba(110,110,118,.22))",
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#111",
                          fontSize: 13,
                          fontWeight: 900,
                          textAlign: "center",
                        }}
                      >
                        Metal
                        <br />
                        Baskı
                      </div>
                    )}

                    <span
                      style={{
                        position: "absolute",
                        right: 8,
                        bottom: 8,
                        padding: "5px 8px",
                        borderRadius: 999,
                        background: "rgba(0,0,0,.68)",
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 900,
                      }}
                    >
                      {item.size}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      minWidth: 0,
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 14,
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: 20,
                            lineHeight: 1.25,
                          }}
                        >
                          {item.name}
                        </h3>

                        <div
                          className="small"
                          style={{
                            marginTop: 6,
                            lineHeight: 1.6,
                          }}
                        >
                          Boyut: {item.size}
                        </div>

                        <div
                          className="small"
                          style={{
                            marginTop: 2,
                          }}
                        >
                          Birim fiyat:{" "}
                          {item.price.toLocaleString("tr-TR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}{" "}
                          TL
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        style={{
                          flexShrink: 0,
                          padding: 0,
                          border: 0,
                          background: "transparent",
                          color: "#fca5a5",
                          fontSize: 12,
                          fontWeight: 900,
                          cursor: "pointer",
                        }}
                      >
                        Sil
                      </button>
                    </div>

                    {item.note ? (
                      <div
                        style={{
                          marginTop: 10,
                          padding: "9px 11px",
                          border: "1px solid rgba(255,255,255,.06)",
                          borderRadius: 12,
                          background: "rgba(255,255,255,.025)",
                          color: "#a1a1aa",
                          fontSize: 12,
                          lineHeight: 1.55,
                        }}
                      >
                        Not: {item.note}
                      </div>
                    ) : null}

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 14,
                        marginTop: "auto",
                        paddingTop: 14,
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          overflow: "hidden",
                          border: "1px solid rgba(255,255,255,.09)",
                          borderRadius: 13,
                          background: "rgba(255,255,255,.03)",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => decreaseQty(item.id)}
                          style={{
                            width: 40,
                            height: 40,
                            border: 0,
                            background: "transparent",
                            color: "#f4f4f5",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        >
                          −
                        </button>

                        <span
                          style={{
                            display: "inline-flex",
                            minWidth: 38,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRight:
                              "1px solid rgba(255,255,255,.07)",
                            borderLeft:
                              "1px solid rgba(255,255,255,.07)",
                            fontWeight: 900,
                          }}
                        >
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQty(item.id)}
                          style={{
                            width: 40,
                            height: 40,
                            border: 0,
                            background: "transparent",
                            color: "#f4f4f5",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>
                      </div>

                      <strong
                        style={{
                          color: "#facc15",
                          fontSize: 20,
                        }}
                      >
                        {(item.price * item.quantity).toLocaleString("tr-TR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        TL
                      </strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside
            className="card"
            style={{
              position: "sticky",
              top: 110,
              padding: 22,
              borderRadius: 28,
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
              Sipariş Özeti
            </span>

            <h2
              style={{
                margin: "8px 0 0",
                fontSize: 28,
              }}
            >
              Ödeme Detayları
            </h2>

            <div
              style={{
                display: "grid",
                gap: 13,
                marginTop: 22,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <span className="small">Ara toplam</span>

                <span style={{ fontWeight: 800 }}>
                  {subtotal.toLocaleString("tr-TR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  TL
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <span className="small">Kargo</span>

                <span style={{ fontWeight: 800 }}>
                  {shipping.toLocaleString("tr-TR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  TL
                </span>
              </div>

              <div
                style={{
                  height: 1,
                  margin: "5px 0",
                  background: "rgba(255,255,255,.08)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <span className="small">Ödenecek toplam</span>
                  <div
                    style={{
                      marginTop: 3,
                      fontSize: 11,
                      color: "#71717a",
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
                  {total.toLocaleString("tr-TR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  TL
                </strong>
              </div>
            </div>

            <Link
              href="/odeme"
              className="btn btn-primary"
              style={{
                width: "100%",
                minHeight: 54,
                marginTop: 22,
              }}
            >
              Güvenli Ödemeye Geç
            </Link>

            <div
              style={{
                display: "grid",
                gap: 9,
                marginTop: 18,
              }}
            >
              {[
                "Güvenli ödeme altyapısı",
                "Koruyucu ürün paketleme",
                "Sipariş ve kargo takibi",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    color: "#a1a1aa",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      width: 18,
                      height: 18,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background: "rgba(34,197,94,.11)",
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
          </aside>
        </div>
      )}
    </main>
  );
}