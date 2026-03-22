const required = ["MONGODB_URI", "JWT_SECRET", "NEXT_PUBLIC_SITE_URL"];
const recommended = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "SUPABASE_BUCKET",
  "RESEND_API_KEY",
  "MAIL_FROM",
  "MAIL_TO_OWNER",
  "IYZIPAY_API_KEY",
  "IYZIPAY_SECRET_KEY",
  "IYZIPAY_BASE_URL",
  "PAYTR_MERCHANT_ID",
  "PAYTR_MERCHANT_KEY",
  "PAYTR_MERCHANT_SALT",
  "PAYTR_OK_URL",
  "PAYTR_FAIL_URL"
];

let bad = false;
console.log("=== Zorunlu alanlar ===");
for (const key of required) {
  const ok = Boolean(process.env[key]);
  console.log(`${ok ? "OK" : "X"} ${key}`);
  if (!ok) bad = true;
}
console.log("\n=== Önerilen alanlar ===");
for (const key of recommended) {
  const ok = Boolean(process.env[key]);
  console.log(`${ok ? "OK" : "-"} ${key}`);
}
if (bad) process.exitCode = 1;
