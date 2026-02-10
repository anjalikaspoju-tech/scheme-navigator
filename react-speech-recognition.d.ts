declare module 'react-speech-recognition' {
  export function useSpeechRecognition(): {
    transcript: string;
    listening: boolean;
    resetTranscript: () => void;
    browserSupportsSpeechRecognition: boolean;
  };

  const SpeechRecognition: {
    startListening: (options?: { continuous?: boolean }) => void;
    stopListening: () => void;
    abortListening: () => void;
    browserSupportsSpeechRecognition: boolean;
  };

  export default SpeechRecognition;
}
