
import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface DropzoneProps {
  type: 'video' | 'audio';
  onFileSelected?: (file: File) => void;
}

const UploadDropzone: React.FC<DropzoneProps> = ({ type, onFileSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };
  
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    if (onFileSelected) {
      onFileSelected(file);
    }
  };
  
  return (
    <div
      className={`dropzone h-full ${isDragging ? 'border-latent-orange bg-latent-lighter/70' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id={`file-${type}`}
        className="hidden"
        accept={type === 'video' ? 'video/*' : 'audio/*'}
        onChange={handleFileInput}
      />
      
      <Upload className="w-10 h-10 text-gray-400 mb-2" />
      
      <p className="text-lg font-medium text-white mb-1">
        Drop {type === 'video' ? 'Video' : 'Audio'} Here
      </p>
      <p className="text-sm text-gray-400 mb-2">- or -</p>
      <label
        htmlFor={`file-${type}`}
        className="text-latent-orange hover:text-latent-hover cursor-pointer"
      >
        Click to Upload
      </label>
      
      {type === 'audio' && (
        <div className="absolute bottom-3 left-3 flex space-x-2">
          <button className="w-8 h-8 bg-latent-lighter rounded-full flex items-center justify-center border border-latent-border hover:bg-latent-orange/20">
            <Upload className="w-4 h-4 text-latent-orange" />
          </button>
          <button className="w-8 h-8 bg-latent-lighter rounded-full flex items-center justify-center border border-latent-border hover:bg-latent-orange/20">
            <span className="text-latent-orange">🎤</span>
          </button>
        </div>
      )}
      
      {type === 'video' && (
        <div className="absolute bottom-3 left-3 flex space-x-2">
          <button className="w-8 h-8 bg-latent-lighter rounded-full flex items-center justify-center border border-latent-border hover:bg-latent-orange/20">
            <Upload className="w-4 h-4 text-latent-orange" />
          </button>
          <button className="w-8 h-8 bg-latent-lighter rounded-full flex items-center justify-center border border-latent-border hover:bg-latent-orange/20">
            <span className="text-latent-orange">📷</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadDropzone;
