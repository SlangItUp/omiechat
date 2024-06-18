import React from 'react'

function AuthAge({userData, setUserData}) {
  return (
  <div className="py-2 flex flex-col">
    <label htmlFor='age' className="text-2xl text-slate-100 py-2">Age (18+ Only):</label>
    <input onChange={(e) => {setUserData({...userData, 'age':e.target.value})}}
    className="text-xl py-0.8 "type="number" id="age" name="age" min="18" max="99"></input>
  </div>
  )
}

export default AuthAge