import React from 'react'

function AuthUsername({userData, setUserData}) {
  return (
    <div className='py-2 flex flex-col'>
      <label htmlFor ="username" className="py-2 text-slate-100 text-2xl">Username</label>
      
    <input onChange={(e) => setUserData({...userData, 'username': e.target.value})} value={userData.username} 
      id="username" name="username" className= "border border-black shadow bg-slate-100 p-2 text-xl" type="text" placeholder="Enter Username"></input>
    </div>
  )
}

export default AuthUsername