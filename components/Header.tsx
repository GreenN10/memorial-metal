import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="topbar">Fotoğraflarınıza ölümsüz bir dokunuş.</div>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" style={{ fontWeight: 900, fontSize: 28, color: "#facc15" }}>MemoriaMetal</Link>
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
    </>
  );
}
