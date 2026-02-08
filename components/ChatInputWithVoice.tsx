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
    <div className="border-t bg-gray-50 p-3 flex gap-2 items-center shadow-lg">
      {/* Voice Button */}
      <button
        onClick={isSpeaking ? handleStopListening : handleStartListening}
        className={`px-3 py-2 rounded text-white font-semibold transition ${
          isSpeaking
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        title={isSpeaking ? "Stop listening" : "Start listening"}
      >
        {isSpeaking ? "🛑 Stop" : "🎤"}
      </button>

      {/* Input Field */}
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder={listening ? "Listening... 👂" : "Type or speak your message..."}
        value={transcript || input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Send Button */}
      <button
        onClick={handleSend}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition"
      >
        Send ➤
      </button>
    </div>
  );
}
