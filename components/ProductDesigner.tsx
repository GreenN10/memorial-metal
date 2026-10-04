"use client";

import Cropper from "react-easy-crop";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  _id: string;
  name: string;
  price: number;
  size: string;
};

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

export default function ProductDesigner({
  products,
}: {
  products: Product[];
}) {
  const router = useRouter();

  const [selectedId, setSelectedId] = useState(products[0]?._id ?? "");
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("");
  const [note, setNote] = useState("");
  const [qty, setQty] = useState(1);
  const [status, setStatus] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const savedProduct = localStorage.getItem(
      "memoria-selected-product",
    );

    if (!savedProduct) return;

    try {
      const parsedProduct = JSON.parse(savedProduct);

      if (
        parsedProduct?._id &&
        products.some(
          (product) => product._id === parsedProduct._id,
        )
      ) {
        setSelectedId(parsedProduct._id);
      }
    } catch {
      localStorage.removeItem("memoria-selected-product");
    }
  }, [products]);

  const selected = useMemo(() => {
    return (
      products.find((product) => product._id === selectedId) ??
      products[0]
    );
  }, [products, selectedId]);

  function handleFile(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setStatus("Lütfen JPG, PNG veya WEBP görsel yükleyin.");
      return;
    }

    const maximumFileSize = 10 * 1024 * 1024;

    if (file.size > maximumFileSize) {
      setStatus("Görsel en fazla 10 MB olabilir.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPreview(String(reader.result ?? ""));
      setFileName(file.name);
      setZoom(1);
      setCrop({ x: 0, y: 0 });
      setStatus("Fotoğraf başarıyla yüklendi.");
      setIsAdded(false);
    };

    reader.onerror = () => {
      setStatus("Fotoğraf okunamadı. Tekrar deneyin.");
    };

    reader.readAsDataURL(file);
  }

  function removeImage() {
    setPreview("");
    setFileName("");
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setStatus("Fotoğraf kaldırıldı.");
    setIsAdded(false);
  }

  function changeProduct(productId: string) {
    setSelectedId(productId);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setStatus("");
    setIsAdded(false);
  }

  function addToCart() {
    if (!selected) return;

    if (!preview) {
      setStatus("Sepete eklemeden önce bir fotoğraf yükleyin.");
      return;
    }

    let cart: CartItem[] = [];

    try {
      const existingCart = localStorage.getItem("memoria-cart");

      cart = existingCart ? JSON.parse(existingCart) : [];

      if (!Array.isArray(cart)) {
        cart = [];
      }
    } catch {
      cart = [];
    }

    const newCartItem: CartItem = {
      id: `${selected._id}-${Date.now()}`,
      productId: selected._id,
      name: selected.name,
      price: selected.price,
      quantity: Math.max(1, qty),
      size: selected.size,
      image: preview,
      note: note.trim(),
    };

    cart.push(newCartItem);

    localStorage.setItem("memoria-cart", JSON.stringify(cart));

    setStatus("Ürün başarıyla sepete eklendi.");
    setIsAdded(true);
  }

  function goToCart() {
    router.push("/sepet");
  }

  if (!selected) {
    return (
      <div className="card" style={{ padding: 24 }}>
        Henüz tasarlanabilir ürün bulunmuyor.
      </div>
    );
  }

  const normalizedName = selected.name.toLocaleLowerCase("tr-TR");

  const isMagnet = normalizedName.includes("magnet");
  const isPanoramic = normalizedName.includes("panoramik");
  const isThreePiece = normalizedName.includes("3 parça");

  const frameSize = isMagnet
    ? { width: 230, height: 230 }
    : isPanoramic
      ? { width: 360, height: 180 }
      : selected.size === "A5"
        ? { width: 220, height: 300 }
        : selected.size === "A4"
          ? { width: 260, height: 360 }
          : selected.size === "A3"
            ? { width: 300, height: 410 }
            : { width: 260, height: 340 };

  const totalPrice = selected.price * Math.max(1, qty);

  function renderPlaceholder() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          color: "#111",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 58,
            height: 58,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            borderRadius: 18,
            background: "rgba(250,204,21,.24)",
            color: "#713f12",
            fontSize: 25,
            fontWeight: 900,
          }}
        >
          +
        </div>

        <strong
          style={{
            fontSize: isPanoramic ? 23 : 27,
            lineHeight: 1.15,
          }}
        >
          {isMagnet
            ? "Metal Magnet"
            : isPanoramic
              ? "Panoramik Metal"
              : "Metal Baskı"}
        </strong>

        <span
          style={{
            marginTop: 9,
            color: "#52525b",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          Yüklediğiniz fotoğraf
          <br />
          burada görünecek
        </span>
      </div>
    );
  }

  function renderSingleFrame() {
    return (
      <div
        style={{
          position: "relative",
          width: frameSize.width + 22,
          height: frameSize.height + 22,
          maxWidth: "100%",
          padding: 9,
          borderRadius: isMagnet ? 30 : 28,
          background:
            "linear-gradient(135deg, #ffffff 0%, #b8b8be 28%, #f8fafc 50%, #85858d 100%)",
          boxShadow:
            "0 38px 95px rgba(0,0,0,.52), inset 0 1px 0 rgba(255,255,255,.85)",
          transform: isPanoramic
            ? "rotate(-1.5deg)"
            : "rotate(-2.5deg)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: isMagnet ? 23 : 21,
            background:
              "radial-gradient(circle at top, rgba(255,255,255,.98), rgba(228,228,231,.88) 48%, rgba(120,120,120,.18) 100%)",
          }}
        >
          {preview ? (
            <Cropper
              image={preview}
              crop={crop}
              zoom={zoom}
              aspect={frameSize.width / frameSize.height}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              showGrid={false}
              cropShape="rect"
              style={{
                containerStyle: {
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                },
              }}
            />
          ) : (
            renderPlaceholder()
          )}

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(145deg, rgba(255,255,255,.24), transparent 28%, transparent 72%, rgba(0,0,0,.11))",
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          {note ? (
            <div
              style={{
                position: "absolute",
                right: 12,
                bottom: 12,
                left: 12,
                zIndex: 5,
                overflow: "hidden",
                padding: "8px 12px",
                border: "1px solid rgba(255,255,255,.16)",
                borderRadius: 999,
                background: "rgba(0,0,0,.64)",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                textAlign: "center",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                backdropFilter: "blur(10px)",
              }}
            >
              {note}
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  function renderThreePiece() {
    const pieceWidth = 92;
    const pieceHeight = 220;

    return (
      <div
        style={{
          display: "flex",
          maxWidth: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {[0, 1, 2].map((pieceIndex) => (
          <div
            key={pieceIndex}
            style={{
              position: "relative",
              width: pieceWidth + 16,
              height: pieceHeight + 16,
              padding: 7,
              borderRadius: 20,
              background:
                "linear-gradient(135deg, #ffffff 0%, #b8b8be 30%, #fafafa 52%, #85858d 100%)",
              boxShadow: "0 28px 65px rgba(0,0,0,.48)",
              transform:
                pieceIndex === 1
                  ? "translateY(-8px)"
                  : "translateY(8px)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: 14,
                background:
                  "radial-gradient(circle at top, rgba(255,255,255,.98), rgba(228,228,231,.88) 48%, rgba(120,120,120,.18) 100%)",
              }}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Yüklenen fotoğraf önizlemesi"
                  style={{
                    width: "300%",
                    height: "100%",
                    maxWidth: "none",
                    objectFit: "cover",
                    transform:
                      pieceIndex === 0
                        ? "translateX(0)"
                        : pieceIndex === 1
                          ? "translateX(-33.333%)"
                          : "translateX(-66.666%)",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 8,
                    color: "#111",
                    fontSize: 11,
                    fontWeight: 900,
                    textAlign: "center",
                  }}
                >
                  {pieceIndex === 1 ? "3 Parça Metal" : ""}
                </div>
              )}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,.2), transparent 30%, transparent 72%, rgba(0,0,0,.1))",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-2"
      style={{
        alignItems: "start",
        gap: 24,
      }}
    >
      <section
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
            top: -90,
            right: -90,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(250,204,21,.07)",
            filter: "blur(35px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <div className="badge">Kişiye Özel Tasarım</div>

          <h2
            style={{
              margin: "16px 0 0",
              fontSize: 34,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Metal tablonu hazırla
          </h2>

          <p
            className="small"
            style={{
              maxWidth: 540,
              marginTop: 10,
              lineHeight: 1.75,
            }}
          >
            Ürünü seçin, fotoğrafınızı yükleyin ve canlı
            önizleme üzerinden konumlandırın.
          </p>

          <div
            style={{
              display: "grid",
              gap: 18,
              marginTop: 24,
            }}
          >
            <div>
              <label
                htmlFor="designer-product"
                style={{
                  display: "block",
                  marginBottom: 8,
                  color: "#e4e4e7",
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                1. Ürün seçin
              </label>

              <select
                id="designer-product"
                className="input"
                value={selectedId}
                onChange={(event) =>
                  changeProduct(event.target.value)
                }
              >
                {products.map((product) => (
                  <option
                    key={product._id}
                    value={product._id}
                  >
                    {product.name} —{" "}
                    {product.price.toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    TL
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span
                style={{
                  display: "block",
                  marginBottom: 8,
                  color: "#e4e4e7",
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                2. Fotoğraf yükleyin
              </span>

              <label
                htmlFor="designer-file"
                style={{
                  display: "flex",
                  minHeight: 118,
                  alignItems: "center",
                  gap: 15,
                  padding: 16,
                  border: preview
                    ? "1px solid rgba(34,197,94,.28)"
                    : "1px dashed rgba(250,204,21,.34)",
                  borderRadius: 18,
                  background: preview
                    ? "rgba(34,197,94,.055)"
                    : "rgba(250,204,21,.035)",
                  cursor: "pointer",
                  transition:
                    "border-color .2s ease, background .2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 52,
                    height: 52,
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                    background: preview
                      ? "rgba(34,197,94,.14)"
                      : "rgba(250,204,21,.13)",
                    color: preview ? "#86efac" : "#facc15",
                    fontSize: 24,
                    fontWeight: 900,
                  }}
                >
                  {preview ? "✓" : "+"}
                </div>

                <div style={{ minWidth: 0 }}>
                  <strong
                    style={{
                      display: "block",
                      overflow: "hidden",
                      color: "#f4f4f5",
                      fontSize: 15,
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {fileName || "Fotoğraf seçmek için tıklayın"}
                  </strong>

                  <span
                    className="small"
                    style={{
                      display: "block",
                      marginTop: 5,
                      lineHeight: 1.5,
                    }}
                  >
                    JPG, PNG veya WEBP • En fazla 10 MB
                  </span>
                </div>
              </label>

              <input
                id="designer-file"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFile}
                style={{ display: "none" }}
              />

              {preview ? (
                <button
                  type="button"
                  onClick={removeImage}
                  style={{
                    marginTop: 9,
                    padding: 0,
                    border: 0,
                    background: "transparent",
                    color: "#fca5a5",
                    fontSize: 12,
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Fotoğrafı kaldır
                </button>
              ) : null}
            </div>

            {preview && !isThreePiece ? (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <label
                    htmlFor="designer-zoom"
                    style={{
                      color: "#e4e4e7",
                      fontSize: 13,
                      fontWeight: 800,
                    }}
                  >
                    3. Fotoğraf yakınlığı
                  </label>

                  <span
                    style={{
                      color: "#facc15",
                      fontSize: 12,
                      fontWeight: 900,
                    }}
                  >
                    {zoom.toFixed(1)}x
                  </span>
                </div>

                <input
                  id="designer-zoom"
                  type="range"
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(event) =>
                    setZoom(Number(event.target.value))
                  }
                  style={{
                    width: "100%",
                    marginTop: 12,
                    accentColor: "#facc15",
                    cursor: "pointer",
                  }}
                />

                <p
                  className="small"
                  style={{
                    margin: "8px 0 0",
                    fontSize: 12,
                  }}
                >
                  Fotoğrafı önizleme alanında sürükleyerek
                  konumlandırabilirsiniz.
                </p>
              </div>
            ) : null}

            <div>
              <label
                htmlFor="designer-note"
                style={{
                  display: "block",
                  marginBottom: 8,
                  color: "#e4e4e7",
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                Özel not
              </label>

              <textarea
                id="designer-note"
                className="input"
                rows={4}
                maxLength={250}
                value={note}
                onChange={(event) => {
                  setNote(event.target.value);
                  setIsAdded(false);
                }}
                placeholder="Örneğin: Alt bölüme tarih eklensin."
                style={{
                  minHeight: 110,
                  resize: "vertical",
                }}
              />

              <div
                className="small"
                style={{
                  marginTop: 6,
                  fontSize: 11,
                  textAlign: "right",
                }}
              >
                {note.length}/250
              </div>
            </div>

            <div className="grid grid-2">
              <div>
                <label
                  htmlFor="designer-quantity"
                  style={{
                    display: "block",
                    marginBottom: 8,
                    color: "#e4e4e7",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  Adet
                </label>

                <input
                  id="designer-quantity"
                  className="input"
                  type="number"
                  min={1}
                  max={99}
                  value={qty}
                  onChange={(event) => {
                    const value = Number(event.target.value);

                    setQty(
                      Number.isFinite(value)
                        ? Math.min(99, Math.max(1, value))
                        : 1,
                    );

                    setIsAdded(false);
                  }}
                />
              </div>

              <div>
                <span
                  style={{
                    display: "block",
                    marginBottom: 8,
                    color: "#e4e4e7",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  Toplam
                </span>

                <div
                  className="input"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#facc15",
                    fontSize: 20,
                    fontWeight: 950,
                  }}
                >
                  {totalPrice.toLocaleString("tr-TR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  TL
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: 10,
              marginTop: 22,
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={addToCart}
              style={{
                width: "100%",
                minHeight: 54,
                fontSize: 16,
              }}
            >
              {isAdded
                ? "Sepete Eklendi ✓"
                : "Sepete Ekle"}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={goToCart}
              style={{
                width: "100%",
                minHeight: 50,
              }}
            >
              Sepete Git
            </button>
          </div>

          {status ? (
            <div
              style={{
                marginTop: 14,
                padding: "12px 14px",
                border: isAdded
                  ? "1px solid rgba(34,197,94,.2)"
                  : "1px solid rgba(250,204,21,.15)",
                borderRadius: 14,
                background: isAdded
                  ? "rgba(34,197,94,.07)"
                  : "rgba(250,204,21,.05)",
                color: isAdded ? "#86efac" : "#e4e4e7",
                fontSize: 13,
                fontWeight: 750,
              }}
            >
              {status}
            </div>
          ) : null}
        </div>
      </section>

      <section
        className="card"
        style={{
          position: "sticky",
          top: 110,
          overflow: "hidden",
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
              Canlı Önizleme
            </span>

            <h3
              style={{
                margin: "8px 0 0",
                fontSize: 28,
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
              }}
            >
              {selected.name}
            </h3>

            <p
              className="small"
              style={{
                margin: "7px 0 0",
                lineHeight: 1.6,
              }}
            >
              {preview
                ? "Fotoğrafınızı sürükleyerek uygun konuma getirin."
                : "Fotoğraf yüklediğinizde ürün üzerinde görünecek."}
            </p>
          </div>

          <span
            style={{
              flexShrink: 0,
              padding: "7px 11px",
              border: "1px solid rgba(250,204,21,.18)",
              borderRadius: 999,
              background: "rgba(250,204,21,.07)",
              color: "#facc15",
              fontSize: 12,
              fontWeight: 900,
            }}
          >
            {selected.size}
          </span>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            minHeight: 590,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            overflow: "hidden",
            padding: 24,
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 25,
            background:
              "radial-gradient(circle at 50% 12%, rgba(250,204,21,.09), transparent 30%), linear-gradient(180deg, #1b1b1e 0%, #101012 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 230,
              height: 230,
              borderRadius: "50%",
              background: "rgba(255,255,255,.055)",
              filter: "blur(30px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: -100,
              left: -90,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "rgba(250,204,21,.055)",
              filter: "blur(38px)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              transform:
                selected.size === "A3" && !isThreePiece
                  ? "scale(.88)"
                  : "none",
            }}
          >
            {isThreePiece
              ? renderThreePiece()
              : renderSingleFrame()}
          </div>

          <div
            style={{
              position: "absolute",
              right: 16,
              bottom: 16,
              zIndex: 4,
              padding: "10px 13px",
              border: "1px solid rgba(255,255,255,.09)",
              borderRadius: 14,
              background: "rgba(12,12,14,.72)",
              backdropFilter: "blur(12px)",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#facc15",
                fontSize: 13,
              }}
            >
              {isMagnet
                ? "Kare Magnet"
                : isPanoramic
                  ? "Panoramik"
                  : isThreePiece
                    ? "3 Parça"
                    : selected.size}
            </strong>

            <span
              className="small"
              style={{ fontSize: 10 }}
            >
              Premium metal yüzey
            </span>
          </div>
        </div>

        <div
          className="grid grid-3"
          style={{
            gap: 9,
            marginTop: 12,
          }}
        >
          {[
            ["Canlı", "Baskı görünümü"],
            ["Premium", "Metal yüzey"],
            ["Güvenli", "Paketleme"],
          ].map(([title, description]) => (
            <div
              key={title}
              style={{
                padding: "12px 10px",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 14,
                background: "rgba(255,255,255,.025)",
                textAlign: "center",
              }}
            >
              <strong
                style={{
                  display: "block",
                  color: "#f4f4f5",
                  fontSize: 12,
                }}
              >
                {title}
              </strong>

              <span
                className="small"
                style={{
                  display: "block",
                  marginTop: 3,
                  fontSize: 10,
                }}
              >
                {description}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}