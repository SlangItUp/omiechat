import React from 'react';

function AuthAge({ userData, setUserData }) {
  const handleAgeChange = (e) => {
    const age = parseInt(e.target.value);
    setUserData({ ...userData, age: age });
  };

  return (
    <div className="py-2 flex flex-col">
      <label htmlFor="age" className="text-lg md:text-xl text-slate-100 py-2">
        Age (18+ Only):
      </label>
      <input
        onChange={handleAgeChange}
        value={userData.age}
        className="text-lg md:text-xl py-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        id="age"
        name="age"
        min="18"
        max="99"
        required
      />
    </div>
  );
}

export default AuthAge;
