import { useState, useEffect } from "react";
import axios from "axios";

const Messages = ({ pageId, accessToken }) => {
  const [groupedMessages, setGroupedMessages] = useState([]);

  const groupAndSortMessages = (messages) => {
    const groupedMessages = messages.reduce((acc, message) => {
      const { senderId, senderName } = message;
      if (!acc[senderId]) {
        acc[senderId] = {
          senderId,
          senderName,
          messages: [],
        };
      }
      acc[senderId].messages.push(message);
      return acc;
    }, {});

    Object.keys(groupedMessages).forEach((key) => {
      groupedMessages[key].messages.sort(
        (a, b) => new Date(a.createdTime) - new Date(b.createdTime)
      );
    });

    return Object.values(groupedMessages);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.post("/api/messages", {
          pageId,
          accessToken,
        });
        const grouped = groupAndSortMessages(data.messages);
        setGroupedMessages(grouped);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [pageId, accessToken]);

  return (
    <div>
      <h1>Messages</h1>
      {groupedMessages.map((group) => (
        <div key={group.senderId}>
          <h2>
            {group.senderName} ({group.senderId})
          </h2>
          <ul>
            {group.messages.map((message) => (
              <li key={message.id}>
                <p>
                  <strong>Time:</strong>{" "}
                  {new Date(message.createdTime).toLocaleString()}
                </p>
                <p>
                  <strong>Message:</strong> {message.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Messages;
