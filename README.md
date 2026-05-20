# 🟡 MemorialMetal Pro V4

Modern, full-stack bir e-ticaret uygulaması.  
Kullanıcılar fotoğraflarını yükleyip metal tablolara dönüştürebilir, sipariş verebilir ve takip edebilir.

---

## 🚀 Canlı Demo
👉 https://memorial-metal.vercel.app

---

## ✨ Özellikler

### 👤 Kullanıcı
- Kayıt / giriş sistemi (JWT)
- Sepet yönetimi
- Sipariş oluşturma
- Sipariş takibi

### 🛒 E-Ticaret
- Ürün listeleme
- Sepete ekleme
- Ödeme akışı

### 💳 Ödeme Sistemleri
- İyzico (init + callback)
- PayTR (iframe + doğrulama)

### 🛠️ Admin Panel
- Ürün CRUD
- Sipariş yönetimi
- Dashboard (istatistikler)
- Admin middleware koruması

### ☁️ Altyapı
- MongoDB (Mongoose)
- Supabase Storage (dosya yükleme)
- Resend (mail sistemi)

---

## 🧱 Teknolojiler

- Next.js 15
- React
- TypeScript
- MongoDB
- Tailwind CSS
- Vercel

---

## ⚙️ Kurulum

```bash
npm install
cp .env.example .env.local
npm run check:env
npm run seed:admin
npm run seed:products
npm run dev
