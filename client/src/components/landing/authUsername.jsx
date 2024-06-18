import React from 'react';

function AuthUsername({ userData, setUserData }) {
  const handleUsernameChange = (e) => {
    setUserData({ ...userData, username: e.target.value });
  };

  return (
    <div className="py-2 flex flex-col">
      <label htmlFor="username" className="text-lg md:text-xl text-slate-100 py-2">
        Username
      </label>
      <input
        onChange={handleUsernameChange}
        value={userData.username}
        id="username"
        name="username"
        className="border border-gray-300 rounded-md p-2 text-lg md:text-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter Username"
        required
      />
    </div>
  );
}

export default AuthUsername;
