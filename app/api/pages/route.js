import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const { userId, accessToken } = await request.json();
  console.log("🚀 ~ file: route.js:6 ~ POST ~ accessToken:", accessToken);
  console.log("🚀 ~ file: route.js:6 ~ POST ~ userId:", userId);

  try {
    const { data: pagesData } = await axios.get(
      `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`
    );
    console.log("🚀 ~ file: route.js:13 ~ POST ~ pagesData:", pagesData.data);

    return NextResponse.json({ pages: pagesData.data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
