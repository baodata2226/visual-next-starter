
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import UploadDropzone from '@/components/UploadDropzone';
import VideoPreview from '@/components/VideoPreview';
import CustomSlider from '@/components/CustomSlider';
import MediaExample from '@/components/MediaExample';
import RandomSeed from '@/components/RandomSeed';
import OutputVideo from '@/components/OutputVideo';
import { Info } from 'lucide-react';

const Index = () => {
  const [videoFile, setVideoFile] = useState<File | undefined>(undefined);
  const [audioFile, setAudioFile] = useState<File | undefined>(undefined);
  const [guidanceScale, setGuidanceScale] = useState(1.5);
  const [inferenceSteps, setInferenceSteps] = useState(20);
  const [randomSeed, setRandomSeed] = useState('1247');
  const [processing, setProcessing] = useState(false);
  const [outputVideoUrl, setOutputVideoUrl] = useState<string | undefined>(undefined);

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
    setOutputVideoUrl(undefined);
    toast.info('Processing started. This might take a while...');
    
    // Simulate processing time
    setTimeout(() => {
      setProcessing(false);
      // Create a fake output URL (in a real app, this would be a URL from your backend)
      const fakeOutputUrl = URL.createObjectURL(videoFile);
      setOutputVideoUrl(fakeOutputUrl);
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
        <div className="lg:col-span-2 grid grid-rows-3 gap-4 h-[900px]">
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

          <div className="relative border border-latent-border rounded-md bg-latent-lighter">
            <div className="absolute top-2 left-2 bg-latent-lighter px-2 py-1 rounded text-xs text-white flex items-center">
              <span className="mr-1">🎞️</span>
              Output Video
            </div>
            <div className="h-full">
              <OutputVideo videoUrl={outputVideoUrl} isProcessing={processing} />
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
            <div className="mb-4">
              <h2 className="text-white font-medium flex items-center">
                <span className="mr-2">⚙️</span>
                Model Parameters
              </h2>
              <p className="text-gray-400 text-xs mt-1">
                Adjust these parameters to control the LatentSync model behavior
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-latent p-3 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <h3 className="text-sm text-white font-medium">Guidance Scale</h3>
                    <div className="group relative ml-1">
                      <Info size={14} className="text-gray-400 cursor-help" />
                      <div className="absolute bottom-full left-0 mb-2 w-64 p-2 bg-black rounded-md text-xs text-gray-300 hidden group-hover:block shadow-lg z-10">
                        Controls how closely the model follows the audio input. Higher values create more accurate lip sync but may reduce video quality.
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-white font-medium">{guidanceScale.toFixed(1)}</span>
                </div>
                <CustomSlider
                  label=""
                  min={1}
                  max={2.5}
                  value={guidanceScale}
                  onChange={setGuidanceScale}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-400">Less accurate (1.0)</span>
                  <span className="text-xs text-gray-400">More accurate (2.5)</span>
                </div>
              </div>
              
              <div className="bg-latent p-3 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <h3 className="text-sm text-white font-medium">Inference Steps</h3>
                    <div className="group relative ml-1">
                      <Info size={14} className="text-gray-400 cursor-help" />
                      <div className="absolute bottom-full left-0 mb-2 w-64 p-2 bg-black rounded-md text-xs text-gray-300 hidden group-hover:block shadow-lg z-10">
                        Number of denoising steps. Higher values provide better quality but increase processing time.
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-white font-medium">{inferenceSteps}</span>
                </div>
                <CustomSlider
                  label=""
                  min={10}
                  max={50}
                  step={1}
                  value={inferenceSteps}
                  onChange={setInferenceSteps}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-400">Faster (10)</span>
                  <span className="text-xs text-gray-400">Better quality (50)</span>
                </div>
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
    </div>
  );
};

export default Index;
