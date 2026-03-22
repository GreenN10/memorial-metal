import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { hashPassword } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { fullName, email, password } = await req.json();
    if (!fullName || !email || !password) {
      return NextResponse.json({ message: "Eksik alan var." }, { status: 400 });
    }

    await connectDB();
    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json({ message: "Bu e-posta zaten kayıtlı." }, { status: 409 });
    }

    const hashed = await hashPassword(password);
    await User.create({ fullName, email, password: hashed, role: "user" });

    return NextResponse.json({ message: "Kayıt başarılı." });
  } catch {
    return NextResponse.json({ message: "Sunucu hatası." }, { status: 500 });
  }
}
