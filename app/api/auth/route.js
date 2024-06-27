import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  const { accessToken } = await request.json();

  try {
    // Get user profile
    const { data: userData } = await axios.get(
      `https://graph.facebook.com/me?access_token=${accessToken}`
    );

    return NextResponse.json({ userId: userData.id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
