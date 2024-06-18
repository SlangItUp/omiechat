import React from 'react'

function AuthGender({userData, setUserData}) {

  return (
    <div>
 <label className="py-2 text-2xl text-slate-100">Gender</label>
              <div className="px-2">
                <input type="radio" id="male" name="gender" value="Male" onChange={(e)=>{setUserData({...userData, 'gender':e.target.value})}} />
                <label className="text-xl text-gray-100 px-2">Male</label>
                <input type="radio" id="female" name="gender" value="Female" onChange={(e)=>{setUserData({...userData, 'gender':e.target.value})}}/>
                <label className="text-xl text-gray-100 px-2">Female</label>
              </div>
    </div>
  )
}

export default AuthGender