"use client";
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

type ChatInputWithVoiceProps = {
  input: string;
  setInput: (input: string) => void;
  sendMessage: () => void;
};

export default function ChatInputWithVoice({
  input,
  setInput,
  sendMessage,
}: ChatInputWithVoiceProps) {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleStartListening = () => {
    setIsSpeaking(true);
    SpeechRecognition.startListening({ continuous: false });
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    setInput(transcript || input);
    setIsSpeaking(false);
  };

  const handleSend = () => {
    sendMessage();
    resetTranscript();
  };

  return (
    <div className="border-t bg-gradient-to-r from-blue-50 to-green-50 px-4 py-3 flex justify-center shadow-lg">
      <div className="w-full max-w-md">
        <div className="flex gap-2 items-center bg-white rounded-full px-1 py-1 shadow-md border border-green-200 hover:shadow-lg transition-all">
          {/* Voice Button */}
          <button
            onClick={isSpeaking ? handleStopListening : handleStartListening}
            className={`flex-shrink-0 ml-2 px-3 py-2 rounded-full text-white font-semibold transition text-sm ${
              isSpeaking
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            title={isSpeaking ? "Stop listening" : "Start listening"}
          >
            {isSpeaking ? "🛑" : "🎤"}
          </button>

          {/* Input Field */}
          <input
            type="text"
            className="flex-1 border-0 rounded-full px-3 py-2 text-sm focus:outline-none bg-transparent placeholder-gray-500 text-black"
            placeholder={listening ? "Listening... 👂" : "Type or speak..."}
            value={transcript || input}
            onChange={(e) => setInput(e.target.value)}
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="flex-shrink-0 mr-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition shadow-sm"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
