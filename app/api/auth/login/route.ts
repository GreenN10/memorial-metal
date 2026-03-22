import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { comparePassword, signToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ message: "Kullanıcı bulunamadı." }, { status: 404 });

    const ok = await comparePassword(password, user.password);
    if (!ok) return NextResponse.json({ message: "Şifre hatalı." }, { status: 401 });

    const token = signToken({ email: user.email, role: user.role, fullName: user.fullName });
    const response = NextResponse.json({ message: "Giriş başarılı." });
    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/"
    });
    return response;
  } catch {
    return NextResponse.json({ message: "Sunucu hatası." }, { status: 500 });
  }
}
