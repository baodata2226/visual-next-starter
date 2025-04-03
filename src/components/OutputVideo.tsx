
import React from 'react';

interface OutputVideoProps {
  videoUrl?: string;
  isProcessing: boolean;
}

const OutputVideo: React.FC<OutputVideoProps> = ({ videoUrl, isProcessing }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {isProcessing ? (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-latent-orange mb-4"></div>
          <p className="text-white text-center">Processing your video...</p>
          <p className="text-gray-400 text-sm text-center mt-2">This might take a few minutes depending on the complexity</p>
        </div>
      ) : videoUrl ? (
        <video 
          className="max-h-full max-w-full rounded-md"
          controls
          src={videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="text-center p-4">
          <div className="mb-4 p-2 bg-latent-lighter inline-block rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-latent-orange">
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
              <line x1="16" y1="5" x2="22" y2="5"></line>
              <line x1="19" y1="2" x2="19" y2="8"></line>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            </svg>
          </div>
          <p className="text-white font-medium">Output will appear here</p>
          <p className="text-gray-400 text-sm mt-2">Process a video to see the result</p>
        </div>
      )}
    </div>
  );
};

export default OutputVideo;
