import React from "react";
import useConversation from "../../hooks/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function SideBarUser({ conversation }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  if (!isOnline) {
    return;
  }
  return (
    <button
      className={`flex flex-row items-center hover:bg-gray-100 rounded-xl p-2
      ${isSelected ? "bg-gray-200 hover:bg-gray-200" : ""}
    `}
      onClick={() => {
        setSelectedConversation(conversation);
      }}
    >
      <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
        <img src={conversation.pfp} />
      </div>

      <div className="ml-2 text-sm font-semibold">{conversation.username}</div>
      <div className="ml-2 text-sm ">{conversation.age}</div>
      <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
        1
      </div>
    </button>
  );
}

export default SideBarUser;
