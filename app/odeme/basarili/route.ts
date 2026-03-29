import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const token = formData.get("token")?.toString() || "";
  const conversationId = formData.get("conversationId")?.toString() || "";

  const redirectUrl = new URL("/odeme/basarili", req.url);

  if (token) {
    redirectUrl.searchParams.set("token", token);
  }

  if (conversationId) {
    redirectUrl.searchParams.set("conversationId", conversationId);
  }

  return NextResponse.redirect(redirectUrl, 303);
}