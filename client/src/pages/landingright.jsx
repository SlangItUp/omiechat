import { useState } from 'react'
import AuthUsername from '../components/landing/authUsername.jsx';
import AuthGender from '../components/landing/authGender.jsx'; 
import AuthAge from '../components/landing/authAge.jsx';
import AuthButton from '../components/landing/authButton.jsx';
import toast ,{ Toaster } from 'react-hot-toast';
import useSignup from '../hooks/useSignup.js'

function LandingRight() {
  const [userData, setUserData] = useState({
    "username" : "",
    "gender": "",
    "age": 0,
  })
  const {loading, signup} = useSignup();

  async function formSubmit(event){
    event.preventDefault();
    await signup(userData);
  }
  
  return (
    <div className="flex justify-center items-center bg-indigo-300"> 
    <div>
      <h2 className="text-4xl text-slate-100">Free Chat - No registration</h2>
      <p className="text-xl text-slate-400 pb-12">Enter Your Username and Start Chatting</p>  
      <form method="post" onSubmit={formSubmit}>
        <div className="flex flex-col">
          <AuthUsername userData={userData} setUserData={setUserData}/>
          <AuthGender userData={userData} setUserData={setUserData}/>
          <AuthAge userData={userData} setUserData={setUserData}/>
          <AuthButton userData={userData} setUserData={setUserData}/>
        </div>
      </form> 
      </div>
      <Toaster />
    </div>
  )
}

export default LandingRight