"use client";
import { useState } from "react";
import Login from "./components/Login";
import PagesSelection from "./components/PagesSelection";
import Messages from "./components/Messages";

export default function Home() {
  const [accessToken, setAccessToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [pageId, setPageId] = useState(null);

  if (!accessToken) {
    return <Login setAccessToken={setAccessToken} setUserId={setUserId} />;
  }

  if (!pageId) {
    return (
      <PagesSelection
        userId={userId}
        accessToken={accessToken}
        setPageId={setPageId}
      />
    );
  }

  return <Messages pageId={pageId} accessToken={accessToken} />;
}
