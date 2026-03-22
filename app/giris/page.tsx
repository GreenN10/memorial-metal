"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setStatus(data.message || "Tamamlandı");
    if (res.ok) window.location.href = "/";
  }

  return (
    <main className="container" style={{ padding: "40px 16px" }}>
      <div className="card" style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36 }}>Giriş Yap</h1>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, marginTop: 18 }}>
          <input className="input" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="btn btn-primary" type="submit">Giriş Yap</button>
          {status ? <div className="small">{status}</div> : null}
        </form>
      </div>
    </main>
  );
}
