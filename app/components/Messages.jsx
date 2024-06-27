import { useState, useEffect } from "react";
import axios from "axios";

const Messages = ({ pageId, accessToken }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.post("/api/messages", {
          pageId,
          accessToken,
        });
        setMessages(data.messages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [pageId, accessToken]);

  return (
    <div>
      <h1>Messages</h1>
      {console.log(
        "🚀 ~ file: Messages.jsx:37 ~ Messages ~ messages:",
        messages
      )}
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p>
              <strong>Sender:</strong> {message.senderName} ({message.senderId})
            </p>
            <p>
              <strong>Message:</strong> {message.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
