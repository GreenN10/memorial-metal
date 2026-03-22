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

export default function ProductDesigner({ products }: { products: Product[] }) {
  const router = useRouter();

  const [selectedId, setSelectedId] = useState(products[0]?._id || "");
  const [preview, setPreview] = useState<string>("");
  const [note, setNote] = useState("");
  const [qty, setQty] = useState(1);
  const [status, setStatus] = useState("");

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const saved = localStorage.getItem("memoria-selected-product");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?._id) setSelectedId(parsed._id);
      } catch {}
    }
  }, []);

  const selected = useMemo(
    () => products.find((p) => p._id === selectedId) || products[0],
    [products, selectedId]
  );

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setPreview(String(reader.result || ""));
    reader.readAsDataURL(file);
  }

  function addToCart() {
    if (!selected) return;

    const existing = localStorage.getItem("memoria-cart");
    const cart: CartItem[] = existing ? JSON.parse(existing) : [];

    cart.push({
      id: `${selected._id}-${Date.now()}`,
      productId: selected._id,
      name: selected.name,
      price: selected.price,
      quantity: qty,
      size: selected.size,
      image: preview || "",
      note: note || ""
    });

    localStorage.setItem("memoria-cart", JSON.stringify(cart));
    setStatus("Ürün sepete eklendi.");
  }

  function goToCart() {
    router.push("/sepet");
  }

  if (!selected) return null;

  const name = selected.name.toLowerCase();

  const isMagnet = name.includes("magnet");
  const isPanoramic = name.includes("panoramik");
  const isThreePiece = name.includes("3 parça");

  const frameSize = isMagnet
    ? { width: 230, height: 230 }
    : isPanoramic
    ? { width: 360, height: 180 }
    : isThreePiece
    ? { width: 360, height: 260 }
    : selected.size === "A5"
    ? { width: 220, height: 300 }
    : selected.size === "A4"
    ? { width: 260, height: 360 }
    : selected.size === "A3"
    ? { width: 320, height: 430 }
    : { width: 260, height: 320 };

  function renderSingleFrame() {
    return (
      <div
        style={{
          position: "relative",
          width: frameSize.width + 24,
          height: frameSize.height + 24,
          borderRadius: 30,
          background:
            "linear-gradient(135deg, #f4f4f5 0%, #d4d4d8 32%, #fafafa 52%, #a1a1aa 100%)",
          padding: 10,
          boxShadow: "0 35px 90px rgba(0,0,0,.48)",
          transform: isPanoramic ? "rotate(-2deg)" : "rotate(-4deg)"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 24,
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(circle at top, rgba(255,255,255,.98), rgba(228,228,231,.85) 48%, rgba(120,120,120,.18) 100%)"
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
                  background: "transparent"
                }
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
                flexDirection: "column",
                color: "#111",
                textAlign: "center",
                padding: 20
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900 }}>
                {isMagnet ? "Metal Magnet" : isPanoramic ? "Panoramik" : "Metal Baskı"}
              </div>
              <div style={{ marginTop: 8, opacity: 0.7 }}>
                Fotoğraf burada görünecek
              </div>
            </div>
          )}

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(255,255,255,.22), transparent 22%, transparent 70%, rgba(0,0,0,.08))",
              pointerEvents: "none"
            }}
          />

          {note ? (
            <div
              style={{
                position: "absolute",
                left: 12,
                bottom: 12,
                background: "rgba(0,0,0,.72)",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: 999,
                fontSize: 12,
                maxWidth: "75%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                zIndex: 5
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
    const pieceWidth = 96;
    const pieceHeight = 220;

    return (
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: pieceWidth + 18,
              height: pieceHeight + 18,
              borderRadius: 22,
              background:
                "linear-gradient(135deg, #f4f4f5 0%, #d4d4d8 32%, #fafafa 52%, #a1a1aa 100%)",
              padding: 8,
              boxShadow: "0 25px 60px rgba(0,0,0,.4)",
              transform: i === 1 ? "translateY(-6px)" : "translateY(8px)"
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 16,
                position: "relative",
                overflow: "hidden",
                background:
                  "radial-gradient(circle at top, rgba(255,255,255,.98), rgba(228,228,231,.85) 48%, rgba(120,120,120,.18) 100%)"
              }}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  style={{
                    width: "300%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition:
                      i === 0 ? "left center" : i === 1 ? "center center" : "right center"
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
                    color: "#111",
                    fontWeight: 900,
                    textAlign: "center",
                    fontSize: 12,
                    padding: 10
                  }}
                >
                  {i === 1 ? "3 Parça" : ""}
                </div>
              )}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,.18), transparent 22%, transparent 70%, rgba(0,0,0,.08))",
                  pointerEvents: "none"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-2">
      <div className="card" style={{ padding: 22 }}>
        <div className="badge">Fotoğraf Yükle & Metal Tablo Oluştur</div>
        <h2 style={{ fontSize: 34, marginTop: 14 }}>Tasarım Alanı</h2>
        <p className="small" style={{ marginTop: 8 }}>
          Fotoğrafını yükle, zoom yap, konumlandır ve canlı önizleme ile ürününü gör.
        </p>

        <div style={{ marginTop: 18 }}>
          <label className="small">Ürün Seç</label>
          <select
            className="input"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            {products.map((p) => (
              <option key={p._id} value={p._id}>
                {p.name} — {p.price.toFixed(2)} TL
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: 16 }}>
          <label className="small">Fotoğraf Yükle</label>
          <input className="input" type="file" accept="image/*" onChange={handleFile} />
        </div>

        {preview ? (
          <div style={{ marginTop: 16 }}>
            <label className="small">Zoom</label>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              style={{ width: "100%", marginTop: 10 }}
            />
          </div>
        ) : null}

        <div style={{ marginTop: 16 }}>
          <label className="small">Özel Not</label>
          <textarea
            className="input"
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Örn: Alt tarafa tarih yazısı eklenebilir."
          />
        </div>

        <div className="grid grid-2" style={{ marginTop: 16 }}>
          <div>
            <label className="small">Adet</label>
            <input
              className="input"
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value) || 1)}
            />
          </div>

          <div>
            <label className="small">Toplam</label>
            <div
              className="input"
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: 900,
                color: "#facc15"
              }}
            >
              {(selected.price * qty).toFixed(2)} TL
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
          <button
            className="btn btn-primary"
            style={{ width: "100%", minHeight: 52 }}
            onClick={addToCart}
          >
            Sepete Ekle
          </button>

          <button
            className="btn btn-secondary"
            style={{ width: "100%", minHeight: 52 }}
            onClick={goToCart}
          >
            Sepete Git
          </button>
        </div>

        {status ? (
          <div style={{ marginTop: 12 }} className="small">
            {status}
          </div>
        ) : null}
      </div>

      <div className="card" style={{ padding: 22 }}>
        <div className="small">Canlı Önizleme</div>
        <h3 style={{ fontSize: 30, marginTop: 8 }}>{selected.name}</h3>
        <p className="small" style={{ marginTop: 6 }}>
          Ürün tipine göre özel görünüm gösterilir.
        </p>

        <div
          style={{
            marginTop: 18,
            minHeight: 560,
            borderRadius: 28,
            background:
              "radial-gradient(circle at top, rgba(250,204,21,0.08), transparent 30%), linear-gradient(180deg, #1b1b1d 0%, #111112 100%)",
            border: "1px solid rgba(255,255,255,.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            padding: 20
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, rgba(255,255,255,.08), transparent 22%), radial-gradient(circle at bottom left, rgba(250,204,21,.06), transparent 26%)"
            }}
          />

          {isThreePiece ? renderThreePiece() : renderSingleFrame()}

          <div
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              padding: "10px 14px",
              borderRadius: 16,
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)"
            }}
          >
            <div style={{ color: "#facc15", fontWeight: 900 }}>
              {isMagnet
                ? "Kare"
                : isPanoramic
                ? "Yatay"
                : isThreePiece
                ? "3 Parça"
                : selected.size}
            </div>
            <div className="small">Premium metal yüzey</div>
          </div>
        </div>
      </div>
    </div>
  );
}