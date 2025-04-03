
import React from 'react';

interface MediaExampleProps {
  videoSrc: string;
  audioName: string;
  onClick?: () => void;
}

const MediaExample: React.FC<MediaExampleProps> = ({ videoSrc, audioName, onClick }) => {
  return (
    <div 
      className="flex py-2 hover:bg-latent-lighter cursor-pointer"
      onClick={onClick}
    >
      <div className="w-20 h-20 rounded-md overflow-hidden">
        <img 
          src={videoSrc} 
          alt="Video thumbnail" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 px-4 flex items-center justify-center">
        <p className="text-gray-300">{audioName}</p>
      </div>
    </div>
  );
};

export default MediaExample;
