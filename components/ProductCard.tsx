"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Product = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  size: string;
  image?: string;
};

function ProductMockup({ product }: { product: Product }) {
  const name = (product.name || "").toLowerCase();

  const baseCardStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: 24,
    background:
      "linear-gradient(135deg, #f4f4f5 0%, #d4d4d8 32%, #fafafa 52%, #a1a1aa 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,.25)"
  };

  const innerText = (title: string, sub = "Metal baskı yüzeyi") => (
    <div style={{ textAlign: "center", color: "#111", fontWeight: 900, padding: "0 10px" }}>
      <div style={{ fontSize: 22, lineHeight: 1.1 }}>{title}</div>
      <div style={{ marginTop: 6, fontSize: 13, fontWeight: 500, opacity: 0.75 }}>
        {sub}
      </div>
    </div>
  );

  if (name.includes("magnet")) {
    return (
      <div
        className="product-preview"
        style={{
          height: 260,
          borderRadius: 24,
          background:
            "radial-gradient(circle at top, rgba(255,255,255,.08), transparent 28%), linear-gradient(180deg, #18181b 0%, #111214 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ width: 170, height: 170, borderRadius: 28, ...baseCardStyle }}>
          <div
            style={{
              position: "absolute",
              inset: 10,
              borderRadius: 20,
              background:
                "radial-gradient(circle at top, rgba(255,255,255,.95), rgba(230,230,235,.84) 45%, rgba(120,120,120,.15) 100%)"
            }}
          />
          <div style={{ position: "relative" }}>{innerText(product.size || "10x10")}</div>
        </div>
      </div>
    );
  }

  if (name.includes("panoramik")) {
    return (
      <div
        className="product-preview"
        style={{
          height: 260,
          borderRadius: 24,
          background:
            "radial-gradient(circle at top, rgba(255,255,255,.08), transparent 28%), linear-gradient(180deg, #18181b 0%, #111214 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ width: 270, height: 120, borderRadius: 24, ...baseCardStyle }}>
          <div
            style={{
              position: "absolute",
              inset: 8,
              borderRadius: 18,
              background:
                "radial-gradient(circle at top, rgba(255,255,255,.95), rgba(230,230,235,.84) 45%, rgba(120,120,120,.15) 100%)"
            }}
          />
          <div style={{ position: "relative" }}>{innerText(product.size || "Panoramik")}</div>
        </div>
      </div>
    );
  }

  if (name.includes("3 parça")) {
    return (
      <div
        className="product-preview"
        style={{
          height: 260,
          borderRadius: 24,
          background:
            "radial-gradient(circle at top, rgba(255,255,255,.08), transparent 28%), linear-gradient(180deg, #18181b 0%, #111214 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 72,
              height: 165,
              borderRadius: 18,
              ...baseCardStyle
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 6,
                borderRadius: 14,
                background:
                  "radial-gradient(circle at top, rgba(255,255,255,.95), rgba(230,230,235,.84) 45%, rgba(120,120,120,.15) 100%)"
              }}
            />
            {i === 1 ? (
              <div
                style={{
                  position: "relative",
                  textAlign: "center",
                  color: "#111",
                  fontWeight: 900,
                  fontSize: 12,
                  padding: "0 8px"
                }}
              >
                3 Parça
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="product-preview"
      style={{
        height: 260,
        borderRadius: 24,
        background:
          "radial-gradient(circle at top, rgba(255,255,255,.08), transparent 28%), linear-gradient(180deg, #18181b 0%, #111214 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: 180,
          height:
            product.size === "A5"
              ? 220
              : product.size === "A4"
              ? 245
              : product.size === "A3"
              ? 265
              : 230,
          borderRadius: 28,
          ...baseCardStyle
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 10,
            borderRadius: 22,
            background:
              "radial-gradient(circle at top, rgba(255,255,255,.95), rgba(230,230,235,.84) 45%, rgba(120,120,120,.15) 100%)"
          }}
        />
        <div style={{ position: "relative" }}>{innerText(product.size || "Metal")}</div>
      </div>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  function goToDesigner() {
    localStorage.setItem("memoria-selected-product", JSON.stringify(product));
    router.push("/tasarla");
  }

  const hasRealImage =
    !!product.image &&
    product.image !== "/placeholder-product.png" &&
    !product.name.toLowerCase().includes("magnet") &&
    !product.name.toLowerCase().includes("panoramik") &&
    !product.name.toLowerCase().includes("3 parça");

  return (
    <div
      className="card"
      style={{
        padding: 16,
        display: "flex",
        flexDirection: "column",
        minHeight: 100,
        position: "relative",
        overflow: "hidden",
        transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,.42)";
        e.currentTarget.style.borderColor = "rgba(250,204,21,.22)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.borderColor = "";
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(250,204,21,.06), transparent 24%)",
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          zIndex: 2
        }}
      >
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          style={{
            width: 44,
            height: 44,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.12)",
            background: liked ? "#facc15" : "rgba(255,255,255,.04)",
            color: liked ? "#000" : "#fff",
            cursor: "pointer",
            fontSize: 18,
            fontWeight: 900,
            transition: "all .2s ease"
          }}
        >
          ♥
        </button>
      </div>

      {hasRealImage ? (
        <div
          className="product-preview"
          style={{
            height: 260,
            borderRadius: 24,
            overflow: "hidden",
            background:
              "radial-gradient(circle at top, rgba(255,255,255,.95), rgba(220,220,220,.75) 40%, rgba(120,120,120,.25) 100%)",
            position: "relative"
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(255,255,255,.18), transparent 24%, transparent 70%, rgba(0,0,0,.08))"
            }}
          />
        </div>
      ) : (
        <ProductMockup product={product} />
      )}

      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <span className="badge">{product.size}</span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,.04)",
              color: "#d4d4d8",
              fontSize: 12,
              fontWeight: 800,
              border: "1px solid rgba(255,255,255,.08)"
            }}
          >
            Premium
          </span>
        </div>

        <h3
          style={{
            margin: "14px 0 8px",
            fontSize: 24,
            lineHeight: 1.2,
            minHeight: 56
          }}
        >
          {product.name}
        </h3>

        <p
          className="small"
          style={{
            minHeight: 120,
            lineHeight: 1.75
          }}
        >
          {product.description}
        </p>

        <div
          style={{
            marginTop: 12,
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            gap: 12
          }}
        >
          <div
            style={{
              fontWeight: 900,
              color: "#facc15",
              fontSize: 28
            }}
          >
            {product.price.toFixed(2)} TL
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <button
            className="btn btn-primary"
            style={{
              width: "100%",
              minHeight: 50,
              fontSize: 16
            }}
            onClick={goToDesigner}
          >
            Fotoğraf Yükleyip Hazırla
          </button>
        </div>
      </div>
    </div>
  );
}