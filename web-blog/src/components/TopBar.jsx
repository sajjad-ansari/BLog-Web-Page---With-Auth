import React from 'react';

const TopBar = () => {
  return (
    <div className="w-full h-16 bg-blue-600 flex justify-between items-center px-8 fixed top-0 left-0 shadow-md">
      <div></div> {/* Empty space */}
      <a href="#" className="p-3 text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition duration-300 ease-in-out">Add User</a>
    </div>
  );
};

export default TopBar;
