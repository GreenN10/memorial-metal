import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <div className="topbar">
          <div className="container">Fotoğraflarınıza ölümsüz bir dokunuş.</div>
        </div>

        <header className="site-header">
          <div className="container site-header-inner">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="logo-mark" />
              <div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#facc15" }}>
                  MemoriaMetal
                </div>
              </div>
            </Link>

            <nav className="nav">
              <Link href="/urunler">Ürünler</Link>
              <Link href="/tasarla">Tasarla</Link>
              <Link href="/sepet">Sepet</Link>
              <Link href="/siparis-takip">Sipariş Takip</Link>
              <Link href="/giris">Giriş</Link>
              <Link href="/kayit">Kayıt</Link>
              <Link href="/admin">Admin</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}