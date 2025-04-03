
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import UploadDropzone from '@/components/UploadDropzone';
import VideoPreview from '@/components/VideoPreview';
import CustomSlider from '@/components/CustomSlider';
import MediaExample from '@/components/MediaExample';
import RandomSeed from '@/components/RandomSeed';

const Index = () => {
  const [videoFile, setVideoFile] = useState<File | undefined>(undefined);
  const [audioFile, setAudioFile] = useState<File | undefined>(undefined);
  const [guidanceScale, setGuidanceScale] = useState(1.5);
  const [inferenceSteps, setInferenceSteps] = useState(20);
  const [randomSeed, setRandomSeed] = useState('1247');
  const [processing, setProcessing] = useState(false);

  const handleVideoUpload = (file: File) => {
    setVideoFile(file);
    toast.success(`Video uploaded: ${file.name}`);
  };

  const handleAudioUpload = (file: File) => {
    setAudioFile(file);
    toast.success(`Audio uploaded: ${file.name}`);
  };

  const handleProcess = () => {
    if (!videoFile || !audioFile) {
      toast.error('Please upload both video and audio files before processing');
      return;
    }

    setProcessing(true);
    toast.info('Processing started. This might take a while...');
    
    // Simulate processing time
    setTimeout(() => {
      setProcessing(false);
      toast.success('Processing complete!');
    }, 3000);
  };

  const exampleItems = [
    {
      videoSrc: 'https://picsum.photos/100/100?random=1',
      audioName: 'demo1_audio.wav'
    },
    {
      videoSrc: 'https://picsum.photos/100/100?random=2',
      audioName: 'demo2_audio.wav'
    },
    {
      videoSrc: 'https://picsum.photos/100/100?random=3',
      audioName: 'demo3_audio.wav'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-latent">
      <header className="border-b border-latent-border">
        <Navbar />
        <div className="p-4 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            LatentSync: Taming Audio-Conditioned Latent Diffusion Models for Lip Sync with SyncNet Supervision
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Upload a video and audio file to process with LatentSync model.
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <a href="#" className="px-3 py-1 rounded bg-gray-700 text-white text-sm">GitHub</a>
            <a href="#" className="px-3 py-1 rounded bg-blue-600 text-white text-sm">Repo</a>
            <a href="#" className="px-3 py-1 rounded bg-gray-700 text-white text-sm">ArXiv</a>
            <a href="#" className="px-3 py-1 rounded bg-orange-600 text-white text-sm">Paper</a>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 grid grid-rows-2 gap-4 h-[600px]">
          <div className="relative border border-latent-border rounded-md bg-latent-lighter">
            <div className="absolute top-2 left-2 bg-latent-lighter px-2 py-1 rounded text-xs text-white flex items-center">
              <span className="mr-1">📷</span>
              Input Video
            </div>
            <div className="h-full">
              {videoFile ? (
                <VideoPreview file={videoFile} />
              ) : (
                <UploadDropzone type="video" onFileSelected={handleVideoUpload} />
              )}
            </div>
          </div>
          
          <div className="relative border border-latent-border rounded-md bg-latent-lighter">
            <div className="absolute top-2 left-2 bg-latent-lighter px-2 py-1 rounded text-xs text-white flex items-center">
              <span className="mr-1">🎵</span>
              Input Audio
            </div>
            <div className="h-full">
              <UploadDropzone type="audio" onFileSelected={handleAudioUpload} />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="border border-latent-border rounded-md bg-latent-lighter p-4 flex-1">
            <div className="flex items-center mb-4">
              <span className="text-white mr-2">📋</span>
              <h2 className="text-white font-medium">Examples</h2>
            </div>
            <div className="h-[calc(100%-40px)] overflow-y-auto">
              {exampleItems.map((item, index) => (
                <MediaExample 
                  key={index}
                  videoSrc={item.videoSrc}
                  audioName={item.audioName}
                  onClick={() => {
                    toast.info(`Selected example ${index + 1}`);
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="border border-latent-border rounded-md bg-latent-lighter p-4">
            <div className="space-y-6">
              <div>
                <CustomSlider
                  label="Guidance Scale"
                  min={1}
                  max={2.5}
                  value={guidanceScale}
                  onChange={setGuidanceScale}
                />
              </div>
              
              <div>
                <CustomSlider
                  label="Inference Steps"
                  min={10}
                  max={50}
                  step={1}
                  value={inferenceSteps}
                  onChange={setInferenceSteps}
                />
              </div>
              
              <RandomSeed 
                initialValue={randomSeed}
                onChange={setRandomSeed}
              />
              
              <Button 
                className="w-full bg-latent-orange hover:bg-latent-hover text-white"
                disabled={processing || !videoFile || !audioFile}
                onClick={handleProcess}
              >
                {processing ? "Processing..." : "Process Video"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="p-4 border-t border-latent-border text-center text-gray-400 text-sm flex justify-between">
        <div>
          <a href="#" className="text-latent-orange hover:underline">
            Use via API ✍️
          </a>
        </div>
        <div>
          <span>•</span> Built with Gradio <span className="text-yellow-500">😊</span> <span>•</span>
        </div>
        <div>
          <a href="#" className="text-latent-orange hover:underline">
            Settings ⚙️
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
