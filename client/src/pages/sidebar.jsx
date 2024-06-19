import React from "react";
import ProfileCard from "../components/userhome/profileCard.jsx";
import SideBarUser from "../components/userhome/sideBarUser.jsx";
import useGetConversations from '../hooks/useGetConversations.js'
import { useSocketContext } from "../context/SocketContext.jsx";

function SideBar() {
  const {loading, conversations} = useGetConversations()
  const { onlineUsers } = useSocketContext()
  console.log(onlineUsers)
  return (
    <div className="flex flex-col  pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <ProfileCard />
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="text-lg font-bold">Online Users</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            {onlineUsers!=0 ? onlineUsers.length - 1 : 0}
          </span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          {conversations.map((conv)=>(
               <SideBarUser 
               key={conv._id}
               conversation = {conv}
             />
          ))}
          </div>
        <div className="flex flex-row items-center justify-between text-xs mt-6">
          <span className="font-bold">Groups</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
