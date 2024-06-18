import React from 'react'

function ProfileCard() {
const userInfo = JSON.parse(localStorage.getItem('user'))
  return (
    
    <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-18 w-20 rounded-full border overflow-hidden">
        <img
          src={userInfo.pfp}
          alt="Avatar"
          className="h-full w-full"
        />
      </div>
      <div className="text- font-semibold mt-2">{userInfo.username}.</div>
      <div className="py-1 text-xm text-gray-500">{userInfo.age}, {userInfo.gender}</div>    
    </div>   
  )
}

export default ProfileCard