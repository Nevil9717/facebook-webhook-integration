// app/api/webhook/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      return new NextResponse(challenge, { status: 200 });
    } else {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return new NextResponse("Bad Request", { status: 400 });
}

export async function POST(request) {
  const body = await request.json();

  if (body.object === "page") {
    body.entry.forEach((entry) => {
      const webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });
    return new NextResponse("EVENT_RECEIVED", { status: 200 });
  }

  return new NextResponse("Not Found", { status: 404 });
}
