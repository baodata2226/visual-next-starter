
import React from 'react';

const Navbar = () => {
  const tabs = [
    { icon: "📹", label: "Video" },
    { icon: "🔊", label: "ByteDance" },
    { icon: "📺", label: "(3) YouTubeProject" },
    { icon: "📝", label: "TEXT..." },
    { icon: "📊", label: "Recording" },
    { icon: "🎬", label: "(2) YouTubeShorts" },
    { icon: "🔑", label: "Kaggle" },
    { icon: "🏠", label: "Hugging Face" },
    { icon: "🎙️", label: "Voice" },
    { icon: "⏱️", label: "Latent" },
    { icon: "🔄", label: "ByteDance" },
    { icon: "📋", label: "Baidu" },
    { icon: "🔍", label: "Sprint" },
    { icon: "🚀", label: "LatentSync" },
  ];

  return (
    <div className="bg-[#2A2A2A] px-4 py-2 overflow-x-auto">
      <div className="flex space-x-1">
        {tabs.map((tab, index) => (
          <div 
            key={index} 
            className={`px-3 py-1 rounded-t-md text-xs whitespace-nowrap flex items-center ${
              index === 13 ? 'bg-latent text-white' : 'bg-opacity-50 text-gray-300 hover:bg-opacity-70'
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
