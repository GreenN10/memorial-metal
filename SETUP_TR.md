# Hızlı Kurulum

```bash
npm install
cp .env.example .env.local
npm run check:env
npm run seed:admin
npm run seed:products
npm run dev
```

Windows PowerShell:
```powershell
copy .env.example .env.local
```

Sonra:
- `.env.local` içine bilgilerini gir
- admin hesabını oluştur
- örnek ürünleri yükle
