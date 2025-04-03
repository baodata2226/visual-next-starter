
import React from 'react';

interface VideoPreviewProps {
  file?: File;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ file }) => {
  return (
    <div className="h-full flex items-center justify-center bg-latent-lighter rounded-md">
      {file ? (
        <video 
          className="max-h-full max-w-full" 
          controls
          src={URL.createObjectURL(file)}
        />
      ) : (
        <div className="text-center">
          <span className="text-2xl">📺</span>
          <p className="text-gray-400 text-sm mt-1">No preview available</p>
        </div>
      )}
    </div>
  );
};

export default VideoPreview;
