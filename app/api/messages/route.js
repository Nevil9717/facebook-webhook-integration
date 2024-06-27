import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const { pageId, accessToken } = await request.json();
  console.log("🚀 ~ file: route.js:6 ~ POST ~ accessToken:", accessToken);
  console.log("🚀 ~ file: route.js:6 ~ POST ~ pageId:", pageId);

  try {
    const { data: conversationsData } = await axios.get(
      `https://graph.facebook.com/${pageId}/conversations?access_token=${accessToken}`
    );
    console.log(
      "🚀 ~ file: route.js:13 ~ POST ~ conversationsData:",
      conversationsData
    );

    const messagesPromises = conversationsData.data.map(
      async (conversation) => {
        const { data: messagesData } = await axios.get(
          `https://graph.facebook.com/${conversation.id}/messages?access_token=${accessToken}&fields=message,from`
        );

        return messagesData.data.map((message) => ({
          id: message.id,
          text: message.message,
          senderId: message.from.id,
          senderName: message.from.name,
        }));
      }
    );

    const messages = await Promise.all(messagesPromises);

    // Flatten the array of arrays
    const flatMessages = messages.flat();
    console.log("🚀 ~ file: route.js:34 ~ POST ~ flatMessages:", flatMessages);

    return NextResponse.json({ messages: flatMessages });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
