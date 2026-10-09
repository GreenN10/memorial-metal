import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import crypto from "crypto";

export const runtime = "nodejs";

cloudinary.config();

export async function POST(req: Request) {
  try {
    const cloudinaryUrl = process.env.CLOUDINARY_URL;

    console.log("Cloudinary ortam kontrolü:", {
      exists: Boolean(cloudinaryUrl),
      length: cloudinaryUrl?.length ?? 0,
    });

    if (!cloudinaryUrl) {
      console.error("CLOUDINARY_URL ortam değişkeni bulunamadı.");

      return NextResponse.json(
        { message: "Cloudinary bağlantı ayarı bulunamadı." },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file");
    const purpose = formData.get("purpose");

    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        { message: "Lütfen fotoğraf seçin." },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { message: "JPG, PNG, WEBP veya GIF seçin." },
        { status: 400 }
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { message: "Fotoğraf en fazla 10 MB olabilir." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const isProduct = purpose === "product";

    const result = await cloudinary.uploader.upload(
      `data:${file.type};base64,${buffer.toString("base64")}`,
      {
        folder: isProduct
          ? "memorial-metal/products"
          : "memorial-metal/orders",
        public_id: `${Date.now()}-${crypto.randomUUID()}`,
        resource_type: "image",
        type: isProduct ? "upload" : "authenticated",
      }
    );

    const imageUrl = isProduct
      ? result.secure_url
      : cloudinary.url(result.public_id, {
          secure: true,
          resource_type: "image",
          type: "authenticated",
          sign_url: true,
        });

    return NextResponse.json({
      path: result.public_id,
      image: imageUrl,
      signedUrl: imageUrl,
    });
  } catch (error: unknown) {
    console.error("Cloudinary yükleme hatası:", error);

    return NextResponse.json(
      {
        message: "Fotoğraf yüklenemedi. Sunucu hatasını kontrol edin.",
      },
      { status: 500 }
    );
  }
}