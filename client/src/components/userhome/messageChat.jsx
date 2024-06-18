import React, { useEffect, useRef } from "react";
import { SentMessage, ReceivedMessage } from "./message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import useConversation from "../../hooks/useConversation.js";
import useListenMessages from "../../hooks/useListenMessages.js";
function MessageChat() {
  const { messages, loading } = useGetMessages();
  const { selectedConversation } = useConversation();
   useListenMessages()
   const ref = useRef(null)
   const scrollToBottom = () => { ref.current.scrollIntoView({ behavior: "smooth" });  }
   useEffect(scrollToBottom, [messages])
  return (
    <div className="grid grid-cols-12 gap-y-2">
      {messages.map((message) =>
        message.sender === selectedConversation._id ? (
          <ReceivedMessage key={message._id} message= {message}/>
        ) : (
          <SentMessage key={message._id} message={message} />
        )
      )}
      <div ref={ref}></div>
    </div>
  );
}

export default MessageChat;
