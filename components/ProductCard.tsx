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
  const productName = product.name.toLocaleLowerCase("tr-TR");

  if (productName.includes("3 parça")) {
    return (
      <div className="product-card-preview product-card-preview-dark">
        <div className="mockup-triple">
          {[0, 1, 2].map((item) => (
            <div className="mockup-triple-piece" key={item}>
              {item === 1 && <span>3 Parça</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (productName.includes("panoramik")) {
    return (
      <div className="product-card-preview product-card-preview-dark">
        <div className="mockup-metal mockup-panoramic">
          <div className="mockup-metal-inner">
            <strong>{product.size || "Panoramik"}</strong>
            <span>Metal baskı yüzeyi</span>
          </div>
        </div>
      </div>
    );
  }

  if (productName.includes("magnet")) {
    return (
      <div className="product-card-preview product-card-preview-dark">
        <div className="mockup-metal mockup-magnet">
          <div className="mockup-metal-inner">
            <strong>{product.size || "Magnet"}</strong>
            <span>Kişiye özel baskı</span>
          </div>
        </div>
      </div>
    );
  }

  const sizeClass =
    product.size === "A3"
      ? "mockup-a3"
      : product.size === "A4"
        ? "mockup-a4"
        : "mockup-a5";

  return (
    <div className="product-card-preview product-card-preview-dark">
      <div className={`mockup-metal ${sizeClass}`}>
        <div className="mockup-metal-inner">
          <strong>{product.size || "Metal"}</strong>
          <span>Premium metal baskı</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  const hasRealImage =
    Boolean(product.image) &&
    product.image !== "/placeholder-product.png";

  function goToDesigner() {
    localStorage.setItem(
      "memoria-selected-product",
      JSON.stringify(product),
    );

    router.push("/tasarla");
  }

  function toggleFavorite() {
    setLiked((currentValue) => !currentValue);
  }

  return (
    <article className="product-card">
      <div className="product-card-glow" />

      <button
        type="button"
        className={`product-favorite ${liked ? "is-liked" : ""}`}
        onClick={toggleFavorite}
        aria-label={liked ? "Favorilerden çıkar" : "Favorilere ekle"}
        title={liked ? "Favorilerden çıkar" : "Favorilere ekle"}
      >
        {liked ? "♥" : "♡"}
      </button>

      <div className="product-card-media">
        {hasRealImage ? (
          <div className="product-card-preview">
            <img
              className="product-card-image"
              src={product.image}
              alt={product.name}
              loading="lazy"
            />

            <div className="product-card-image-shine" />
          </div>
        ) : (
          <ProductMockup product={product} />
        )}

        <div className="product-quality-badge">
          <span className="product-quality-dot" />
          Premium Baskı
        </div>
      </div>

      <div className="product-card-content">
        <div className="product-card-labels">
          <span className="product-size-badge">{product.size}</span>
          <span className="product-stock-badge">Siparişe hazır</span>
        </div>

        <h3 className="product-card-title">{product.name}</h3>

        <p className="product-card-description">
          {product.description}
        </p>

        <div className="product-card-rating">
          <span className="product-stars">★★★★★</span>
          <span>Premium kalite</span>
        </div>

        <div className="product-card-footer">
          <div>
            <span className="product-price-label">Başlangıç fiyatı</span>

            <div className="product-price">
              {product.price.toLocaleString("tr-TR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <span> TL</span>
            </div>
          </div>

          <span className="product-delivery">48 saatte üretim</span>
        </div>

        <button
          type="button"
          className="product-design-button"
          onClick={goToDesigner}
        >
          <span>Fotoğrafını Yükle ve Tasarla</span>
          <span className="product-design-arrow">→</span>
        </button>
      </div>
    </article>
  );
}