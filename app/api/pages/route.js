import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const { userId, accessToken } = await request.json();

  try {
    const { data: pagesData } = await axios.get(
      `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`
    );

    return NextResponse.json({ pages: pagesData.data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
