// import React from 'react'

// function Profile() {
//   return (
//     <div>
//       Profile Page
//     </div>
//   )
// }

// export default Profile

import React from 'react';
import { FaTools } from 'react-icons/fa';

function Profile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <FaTools className="text-blue-500 text-6xl animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Profile Page</h1>
        <p className="text-lg text-gray-300 mb-6">
          This page is currently under construction.<br />
          We’re working hard to bring you a personalized experience soon.
        </p>
        <div className="inline-block bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
          Coming Soon...
        </div>
      </div>
    </div>
  );
}

export default Profile;
