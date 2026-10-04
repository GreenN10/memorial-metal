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

type CheckoutForm = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  orderNote: string;
  paymentMethod: string;
};

const SHIPPING_COST = 49.9;

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<
    "success" | "error" | "info"
  >("info");
  const [loading, setLoading] = useState(false);
  const [agreementAccepted, setAgreementAccepted] = useState(false);

  const [form, setForm] = useState<CheckoutForm>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "Tekirdağ",
    district: "",
    postalCode: "",
    orderNote: "",
    paymentMethod: "Kapıda Ödeme",
  });

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

  const subtotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  }, [cart]);

  const shipping = cart.length ? SHIPPING_COST : 0;
  const total = subtotal + shipping;

  function updateForm<Key extends keyof CheckoutForm>(
    key: Key,
    value: CheckoutForm[Key],
  ) {
    setForm((currentForm) => ({
      ...currentForm,
      [key]: value,
    }));

    setStatus("");
  }

  function splitName(fullName: string) {
    const parts = fullName.trim().split(/\s+/);
    const name = parts[0] || "Misafir";
    const surname = parts.slice(1).join(" ") || "Kullanıcı";

    return { name, surname };
  }

  function validateForm() {
    if (!cart.length) {
      return "Sepetiniz boş. Önce ürün ekleyin.";
    }

    if (form.fullName.trim().length < 3) {
      return "Lütfen ad ve soyadınızı girin.";
    }

    if (form.phone.replace(/\D/g, "").length < 10) {
      return "Lütfen geçerli bir telefon numarası girin.";
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      return "Lütfen geçerli bir e-posta adresi girin.";
    }

    if (!form.city.trim()) {
      return "Lütfen şehir bilgisini girin.";
    }

    if (!form.district.trim()) {
      return "Lütfen ilçe bilgisini girin.";
    }

    if (form.address.trim().length < 10) {
      return "Lütfen açık teslimat adresinizi girin.";
    }

    if (!agreementAccepted) {
      return "Siparişi tamamlamak için sözleşmeleri onaylayın.";
    }

    return "";
  }

  async function createOrderOnly() {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: form.email.trim(),
        customerName: form.fullName.trim(),
        phone: form.phone.trim(),
        address: `${form.address.trim()}, ${form.district.trim()}/${form.city.trim()}`,
        city: form.city.trim(),
        note: form.orderNote.trim(),
        uploadedImage: cart[0]?.image || "",
        paymentMethod: form.paymentMethod,
        total,
        items: cart.map((item) => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
          note: item.note,
          uploadedImage: item.image,
        })),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Sipariş oluşturulamadı.");
    }

    localStorage.removeItem("memoria-cart");
    setCart([]);
    setStatusType("success");
    setStatus(
      `Siparişiniz başarıyla oluşturuldu. Sipariş kodunuz: ${data.orderCode}`,
    );
  }

  async function startIyzicoPayment() {
    const { name, surname } = splitName(form.fullName);

    const productItems = cart.map((item, index) => ({
      id: item.productId || `item-${index + 1}`,
      name: item.name,
      category1: "Metal Tablo",
      itemType: "PHYSICAL",
      price: (item.price * item.quantity).toFixed(2),
    }));

    const basketItems = [
      ...productItems,
      {
        id: "shipping",
        name: "Kargo",
        category1: "Kargo",
        itemType: "VIRTUAL",
        price: SHIPPING_COST.toFixed(2),
      },
    ];

    const fullAddress = `${form.address.trim()}, ${form.district.trim()}/${form.city.trim()}`;

    const response = await fetch("/api/iyzico/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: total.toFixed(2),
        paidPrice: total.toFixed(2),
        basketItems,
        customer: {
          id: "guest-user",
          name,
          surname,
          phone: form.phone.trim(),
          email: form.email.trim(),
          identityNumber: "11111111111",
        },
        shippingAddress: {
          contactName: form.fullName.trim(),
          city: form.city.trim(),
          address: fullAddress,
          zipCode: form.postalCode.trim() || "59500",
        },
        billingAddress: {
          contactName: form.fullName.trim(),
          city: form.city.trim(),
          address: fullAddress,
          zipCode: form.postalCode.trim() || "59500",
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          data.errorMessage ||
          "iyzico ödeme formu oluşturulamadı.",
      );
    }

    if (data.paymentPageUrl) {
      window.location.href = data.paymentPageUrl;
      return;
    }

    if (data.checkoutFormContent) {
      const checkoutWindow = window.open("", "_self");

      if (checkoutWindow) {
        checkoutWindow.document.open();
        checkoutWindow.document.write(data.checkoutFormContent);
        checkoutWindow.document.close();
        return;
      }
    }

    throw new Error("iyzico ödeme formu alınamadı.");
  }

  async function handleCheckout() {
    const validationMessage = validateForm();

    if (validationMessage) {
      setStatusType("error");
      setStatus(validationMessage);
      return;
    }

    try {
      setLoading(true);
      setStatusType("info");
      setStatus("İşleminiz hazırlanıyor...");

      if (form.paymentMethod === "iyzico") {
        await startIyzicoPayment();
        return;
      }

      await createOrderOnly();
    } catch (error) {
      setStatusType("error");
      setStatus(
        error instanceof Error
          ? error.message
          : "İşlem sırasında beklenmeyen bir hata oluştu.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!isLoaded) {
    return (
      <main
        className="container"
        style={{ padding: "40px 16px 80px" }}
      >
        <div className="card" style={{ padding: 24 }}>
          Ödeme bilgileri yükleniyor...
        </div>
      </main>
    );
  }

  if (!cart.length && statusType !== "success") {
    return (
      <main
        className="container"
        style={{ padding: "40px 16px 80px" }}
      >
        <section
          className="card"
          style={{
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
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            0
          </div>

          <h1 style={{ margin: "20px 0 0", fontSize: 32 }}>
            Ödeme için ürün bulunamadı
          </h1>

          <p
            className="small"
            style={{
              maxWidth: 520,
              margin: "10px auto 0",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Ödeme adımına geçmeden önce sepetinize bir ürün
            eklemelisiniz.
          </p>

          <Link
            href="/urunler"
            className="btn btn-primary"
            style={{ width: "auto", marginTop: 22 }}
          >
            Ürünleri İncele
          </Link>
        </section>
      </main>
    );
  }

  if (!cart.length && statusType === "success") {
    return (
      <main
        className="container"
        style={{ padding: "40px 16px 80px" }}
      >
        <section
          className="card"
          style={{
            padding: "52px 24px",
            borderRadius: 28,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 76,
              height: 76,
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              borderRadius: 22,
              background: "rgba(34,197,94,.12)",
              color: "#86efac",
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            ✓
          </div>

          <h1 style={{ margin: "20px 0 0", fontSize: 32 }}>
            Siparişiniz alındı
          </h1>

          <p
            style={{
              maxWidth: 620,
              margin: "12px auto 0",
              color: "#d4d4d8",
              lineHeight: 1.7,
            }}
          >
            {status}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/siparis-takip"
              className="btn btn-primary"
              style={{ width: "auto" }}
            >
              Siparişimi Takip Et
            </Link>

            <Link
              href="/"
              className="btn btn-secondary"
              style={{ width: "auto" }}
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main
      className="container"
      style={{ padding: "40px 16px 80px" }}
    >
      <div>
        <div className="badge">Güvenli Ödeme</div>

        <h1
          style={{
            margin: "16px 0 0",
            fontSize: 42,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
          }}
        >
          Siparişini tamamla
        </h1>

        <p
          className="small"
          style={{
            maxWidth: 640,
            marginTop: 10,
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          Teslimat bilgilerini gir, ödeme yöntemini seç ve
          siparişini güvenle oluştur.
        </p>
      </div>

      <div
        className="grid grid-2"
        style={{
          alignItems: "start",
          gap: 24,
          marginTop: 28,
        }}
      >
        <section
          className="card"
          style={{
            padding: 24,
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
            Teslimat Bilgileri
          </span>

          <h2 style={{ margin: "8px 0 0", fontSize: 28 }}>
            Adres ve iletişim
          </h2>

          <div
            style={{
              display: "grid",
              gap: 18,
              marginTop: 22,
            }}
          >
            <div>
              <label
                htmlFor="checkout-name"
                style={labelStyle}
              >
                Ad Soyad
              </label>

              <input
                id="checkout-name"
                className="input"
                autoComplete="name"
                placeholder="Adınız ve soyadınız"
                value={form.fullName}
                onChange={(event) =>
                  updateForm("fullName", event.target.value)
                }
              />
            </div>

            <div className="grid grid-2">
              <div>
                <label
                  htmlFor="checkout-phone"
                  style={labelStyle}
                >
                  Telefon
                </label>

                <input
                  id="checkout-phone"
                  className="input"
                  type="tel"
                  autoComplete="tel"
                  placeholder="05XX XXX XX XX"
                  value={form.phone}
                  onChange={(event) =>
                    updateForm("phone", event.target.value)
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="checkout-email"
                  style={labelStyle}
                >
                  E-posta
                </label>

                <input
                  id="checkout-email"
                  className="input"
                  type="email"
                  autoComplete="email"
                  placeholder="ornek@mail.com"
                  value={form.email}
                  onChange={(event) =>
                    updateForm("email", event.target.value)
                  }
                />
              </div>
            </div>

            <div className="grid grid-2">
              <div>
                <label
                  htmlFor="checkout-city"
                  style={labelStyle}
                >
                  Şehir
                </label>

                <input
                  id="checkout-city"
                  className="input"
                  autoComplete="address-level1"
                  placeholder="Şehir"
                  value={form.city}
                  onChange={(event) =>
                    updateForm("city", event.target.value)
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="checkout-district"
                  style={labelStyle}
                >
                  İlçe
                </label>

                <input
                  id="checkout-district"
                  className="input"
                  autoComplete="address-level2"
                  placeholder="İlçe"
                  value={form.district}
                  onChange={(event) =>
                    updateForm("district", event.target.value)
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="checkout-postal"
                style={labelStyle}
              >
                Posta Kodu
              </label>

              <input
                id="checkout-postal"
                className="input"
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="İsteğe bağlı"
                value={form.postalCode}
                onChange={(event) =>
                  updateForm("postalCode", event.target.value)
                }
              />
            </div>

            <div>
              <label
                htmlFor="checkout-address"
                style={labelStyle}
              >
                Açık Adres
              </label>

              <textarea
                id="checkout-address"
                className="input"
                rows={5}
                autoComplete="street-address"
                placeholder="Mahalle, cadde, sokak, bina ve daire bilgileri"
                value={form.address}
                onChange={(event) =>
                  updateForm("address", event.target.value)
                }
                style={{
                  minHeight: 125,
                  resize: "vertical",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="checkout-note"
                style={labelStyle}
              >
                Sipariş Notu
              </label>

              <textarea
                id="checkout-note"
                className="input"
                rows={3}
                maxLength={300}
                placeholder="Siparişinizle ilgili eklemek istediğiniz not"
                value={form.orderNote}
                onChange={(event) =>
                  updateForm("orderNote", event.target.value)
                }
                style={{
                  minHeight: 95,
                  resize: "vertical",
                }}
              />
            </div>
          </div>

          <div
            style={{
              height: 1,
              margin: "25px 0",
              background: "rgba(255,255,255,.08)",
            }}
          />

          <span
            style={{
              color: "#facc15",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            Ödeme Yöntemi
          </span>

          <h2 style={{ margin: "8px 0 0", fontSize: 28 }}>
            Nasıl ödemek istersiniz?
          </h2>

          <div
            style={{
              display: "grid",
              gap: 11,
              marginTop: 18,
            }}
          >
            {[
              {
                value: "iyzico",
                title: "Banka veya kredi kartı",
                description: "iyzico güvenli ödeme altyapısı",
              },
              {
                value: "Havale / EFT",
                title: "Havale / EFT",
                description: "Banka hesabına para transferi",
              },
              {
                value: "Kapıda Ödeme",
                title: "Kapıda Ödeme",
                description: "Teslimat sırasında ödeme",
              },
            ].map((method) => {
              const isSelected =
                form.paymentMethod === method.value;

              return (
                <label
                  key={method.value}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 13,
                    padding: 15,
                    border: isSelected
                      ? "1px solid rgba(250,204,21,.42)"
                      : "1px solid rgba(255,255,255,.08)",
                    borderRadius: 17,
                    background: isSelected
                      ? "rgba(250,204,21,.06)"
                      : "rgba(255,255,255,.025)",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.value}
                    checked={isSelected}
                    onChange={() =>
                      updateForm(
                        "paymentMethod",
                        method.value,
                      )
                    }
                    style={{
                      width: 18,
                      height: 18,
                      accentColor: "#facc15",
                    }}
                  />

                  <div>
                    <strong
                      style={{
                        display: "block",
                        color: isSelected
                          ? "#facc15"
                          : "#f4f4f5",
                        fontSize: 14,
                      }}
                    >
                      {method.title}
                    </strong>

                    <span
                      className="small"
                      style={{
                        display: "block",
                        marginTop: 4,
                        fontSize: 12,
                      }}
                    >
                      {method.description}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>

          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              marginTop: 22,
              color: "#a1a1aa",
              fontSize: 12,
              lineHeight: 1.6,
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={agreementAccepted}
              onChange={(event) =>
                setAgreementAccepted(event.target.checked)
              }
              style={{
                width: 17,
                height: 17,
                marginTop: 2,
                accentColor: "#facc15",
              }}
            />

            <span>
              Ön bilgilendirme formunu ve mesafeli satış
              sözleşmesini okudum, kabul ediyorum.
            </span>
          </label>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCheckout}
            disabled={loading}
            style={{
              width: "100%",
              minHeight: 56,
              marginTop: 20,
              fontSize: 16,
              opacity: loading ? 0.68 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading
              ? "İşlem yapılıyor..."
              : form.paymentMethod === "iyzico"
                ? `${total.toLocaleString("tr-TR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })} TL Güvenli Öde`
                : "Siparişi Tamamla"}
          </button>

          {status ? (
            <div
              style={{
                marginTop: 14,
                padding: "13px 14px",
                border:
                  statusType === "error"
                    ? "1px solid rgba(239,68,68,.23)"
                    : statusType === "success"
                      ? "1px solid rgba(34,197,94,.23)"
                      : "1px solid rgba(250,204,21,.18)",
                borderRadius: 14,
                background:
                  statusType === "error"
                    ? "rgba(239,68,68,.07)"
                    : statusType === "success"
                      ? "rgba(34,197,94,.07)"
                      : "rgba(250,204,21,.05)",
                color:
                  statusType === "error"
                    ? "#fca5a5"
                    : statusType === "success"
                      ? "#86efac"
                      : "#e4e4e7",
                fontSize: 13,
                fontWeight: 750,
                lineHeight: 1.6,
              }}
            >
              {status}
            </div>
          ) : null}
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

          <h2 style={{ margin: "8px 0 0", fontSize: 28 }}>
            Sepetiniz
          </h2>

          <div
            style={{
              display: "grid",
              gap: 14,
              marginTop: 20,
            }}
          >
            {cart.map((item) => (
              <article
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px minmax(0, 1fr)",
                  gap: 12,
                  paddingBottom: 14,
                  borderBottom:
                    "1px solid rgba(255,255,255,.08)",
                }}
              >
                <div
                  style={{
                    height: 84,
                    overflow: "hidden",
                    borderRadius: 13,
                    background:
                      "radial-gradient(circle at top, rgba(255,255,255,.95), rgba(220,220,224,.75), rgba(110,110,118,.22))",
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
                  ) : null}
                </div>

                <div style={{ minWidth: 0 }}>
                  <strong
                    style={{
                      display: "block",
                      overflow: "hidden",
                      color: "#f4f4f5",
                      fontSize: 14,
                      lineHeight: 1.35,
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.name}
                  </strong>

                  <span
                    className="small"
                    style={{
                      display: "block",
                      marginTop: 4,
                      fontSize: 11,
                    }}
                  >
                    {item.quantity} adet • {item.size}
                  </span>

                  <strong
                    style={{
                      display: "block",
                      marginTop: 8,
                      color: "#facc15",
                      fontSize: 14,
                    }}
                  >
                    {(
                      item.price * item.quantity
                    ).toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    TL
                  </strong>
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gap: 13,
              marginTop: 18,
            }}
          >
            <div style={summaryRowStyle}>
              <span className="small">Ara toplam</span>
              <strong>
                {subtotal.toLocaleString("tr-TR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                TL
              </strong>
            </div>

            <div style={summaryRowStyle}>
              <span className="small">Kargo</span>
              <strong>
                {shipping.toLocaleString("tr-TR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                TL
              </strong>
            </div>

            <div
              style={{
                height: 1,
                margin: "3px 0",
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
                <span className="small">
                  Ödenecek toplam
                </span>

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
                {total.toLocaleString("tr-TR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                TL
              </strong>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: 9,
              marginTop: 20,
              paddingTop: 18,
              borderTop: "1px solid rgba(255,255,255,.08)",
            }}
          >
            {[
              "SSL ile güvenli bağlantı",
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

          <Link
            href="/sepet"
            style={{
              display: "inline-block",
              marginTop: 18,
              color: "#facc15",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            ← Sepete geri dön
          </Link>
        </aside>
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 8,
  color: "#e4e4e7",
  fontSize: 13,
  fontWeight: 800,
};

const summaryRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
};