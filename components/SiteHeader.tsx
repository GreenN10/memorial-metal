"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/urunler", label: "Ürünler" },
  { href: "/tasarla", label: "Tasarla" },
  { href: "/siparis-takip", label: "Sipariş Takip" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Fotoğraflarınıza ölümsüz bir dokunuş.</span>
          <span className="topbar-note">Kişiye özel premium metal baskı</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header-inner">
          <Link href="/" className="site-logo" onClick={() => setMenuOpen(false)}>
            <div className="logo-mark">
              <span>MM</span>
            </div>

            <div className="site-logo-text">
              <strong>MemoriaMetal</strong>
              <span>Premium Metal Baskı</span>
            </div>
          </Link>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "nav-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="nav-mobile-actions">
              <Link href="/giris" onClick={() => setMenuOpen(false)}>
                Giriş Yap
              </Link>

              <Link href="/kayit" onClick={() => setMenuOpen(false)}>
                Kayıt Ol
              </Link>
            </div>
          </nav>

          <div className="header-actions">
            <Link href="/giris" className="header-action-link">
              Giriş
            </Link>

            <Link href="/sepet" className="header-cart-link">
              <span>Sepet</span>
              <span className="header-cart-count">0</span>
            </Link>

            <button
              type="button"
              className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Menüyü aç veya kapat"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}