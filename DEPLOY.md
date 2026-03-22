# Canlıya Alma Rehberi

## Yerelde kontrol
```bash
npm install
cp .env.example .env.local
npm run check:env
npm run seed:admin
npm run seed:products
npm run dev
```

## Test et
- /kayit
- /giris
- /admin
- /tasarla
- /siparis-takip

## Yayınlama
- projeyi GitHub'a yükle
- Vercel veya Node hosting'e bağla
- tüm `.env.local` değerlerini hosting paneline ekle
- callback URL'lerini ödeme panelinde ayarla
