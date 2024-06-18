import React from 'react';

function LandingLeft() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-4 md:p-8 h-full">
      <h2 className="text-4xl md:text-5xl text-gray-800 mb-4 text-center">Features</h2>
      <ul className="text-lg md:text-xl text-gray-600 leading-7">
        <li className="mb-2">Real-time messaging</li>
        <li className="mb-2">Emoji support</li>
        <li className="mb-2">Secure and Private</li>
        <li className="mb-2">Responsive design</li>
      </ul>
    </div>
  );
}

export default LandingLeft;
