import React from 'react'
import SideBar from './sidebar.jsx'
import ChatBox from './chatbox.jsx'

function UserHome() {
  return (
  <div className="flex h-screen antialiased text-gray-800">
        <SideBar />
        <ChatBox />
  </div>
  )
}

export default UserHome