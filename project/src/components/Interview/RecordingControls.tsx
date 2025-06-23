import React from 'react';
import { Mic, Video, MicOff, VideoOff } from 'lucide-react';

interface RecordingControlsProps {
  isRecording: boolean;
  onToggleRecording: (recording: boolean) => void;
}

const RecordingControls: React.FC<RecordingControlsProps> = ({
  isRecording,
  onToggleRecording,
}) => {
  return (
    <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
            Recording Options
          </h3>
          <p className="text-sm text-secondary-600 dark:text-secondary-400">
            Practice with audio/video recording for better feedback
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onToggleRecording(!isRecording)}
            className={`p-3 rounded-full transition-all ${
              isRecording
                ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 animate-pulse-soft'
                : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-600'
            }`}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          
          <button className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors">
            <VideoOff className="w-5 h-5" />
          </button>
          
          {isRecording && (
            <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Recording</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordingControls;