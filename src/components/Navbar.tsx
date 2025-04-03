
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-[#2A2A2A] px-4 py-2 overflow-x-auto">
      <div className="flex justify-center">
        <div 
          className="px-3 py-1 rounded-t-md text-xs whitespace-nowrap flex items-center bg-latent text-white"
        >
          <span className="mr-1">🚀</span>
          <span>LatentSync</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
