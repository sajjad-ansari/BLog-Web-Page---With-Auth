import React from 'react';

const SideBar = () => {
  return (
    <div className="w-1/5 bg-gray-50 p-6 mt-4 flex flex-col justify-between  shadow-md">
      {/* Top Links */}
      <div className="space-y-4">
        <a href="#" className="block p-3 text-blue-600 hover:bg-blue-100 rounded-lg transition duration-300 ease-in-out">Home</a>
        <a href="#" className="block p-3 text-blue-600 hover:bg-blue-100 rounded-lg transition duration-300 ease-in-out">User</a>
        <a href="#" className="block p-3 text-blue-600 hover:bg-blue-100 rounded-lg transition duration-300 ease-in-out">Blog</a>
      </div>
      
      {/* Bottom Profile Section */}
      <div className="space-y-4 flex flex-col items-center">
        <div className="flex flex-col items-center">
          {/* Profile Circle */}
          <div className="w-14 h-14 bg-gray-300 rounded-full mb-3"></div> {/* Placeholder for Profile Image */}
          <span className="text-gray-800 text-lg font-semibold">Admin</span>
        </div>

        <div className="block p-3 text-red-600 hover:bg-red-100 rounded-lg transition duration-300 ease-in-out">
          <a href="/">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
