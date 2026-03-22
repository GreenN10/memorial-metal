import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) return NextResponse.json({ message: "Dosya yok." }, { status: 400 });

    const ext = file.name.split(".").pop() || "jpg";
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `orders/${Date.now()}-${crypto.randomUUID()}.${ext}`;

    const supabase = createSupabaseAdmin();
    const bucket = process.env.SUPABASE_BUCKET || "uploads";

    const { error } = await supabase.storage.from(bucket).upload(path, buffer, {
      contentType: file.type,
      upsert: false
    });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    const { data } = await supabase.storage.from(bucket).createSignedUrl(path, 60 * 60 * 24);
    return NextResponse.json({ path, signedUrl: data?.signedUrl || "" });
  } catch {
    return NextResponse.json({ message: "Upload başarısız." }, { status: 500 });
  }
}
