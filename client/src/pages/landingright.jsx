import React, { useState } from 'react';
import AuthUsername from '../components/landing/authUsername.jsx';
import AuthGender from '../components/landing/authGender.jsx'; 
import AuthAge from '../components/landing/authAge.jsx';
import AuthButton from '../components/landing/authButton.jsx';
import toast, { Toaster } from 'react-hot-toast';
import useSignup from '../hooks/useSignup.js';

function LandingRight() {
  const [userData, setUserData] = useState({
    username: '',
    gender: '',
    age: 0,
  });

  const { loading, signup } = useSignup();

  async function formSubmit(event) {
    event.preventDefault();
    await signup(userData);
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-indigo-300 p-8 md:p-12 rounded-lg shadow-lg h-full">
      <div className="">
        <h2 className="text-3xl md:text-4xl text-white mb-4">Free Chat - No Registration</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">Enter Your Username and Start Chatting</p>
        <form method="post" onSubmit={formSubmit} className="space-y-4 w-full">
          <AuthUsername userData={userData} setUserData={setUserData} />
          <AuthGender userData={userData} setUserData={setUserData} />
          <AuthAge userData={userData} setUserData={setUserData} />
          <AuthButton userData={userData} setUserData={setUserData} />
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default LandingRight;
