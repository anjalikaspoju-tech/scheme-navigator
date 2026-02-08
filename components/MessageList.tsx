import ChatBubble from "./ChatBubble";
import SchemeButtons from "./SchemeButtons";

type Message = {
  text: string;
  sender: "user" | "bot";
};

type MessageListProps = {
  messages: Message[];
  showSchemes: boolean;
};

export default function MessageList({ messages, showSchemes }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gradient-to-b from-white to-blue-50">
      {messages.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          <div className="text-4xl mb-2">👋</div>
          <p>Welcome! Let's find the best schemes for you</p>
        </div>
      ) : (
        <>
          {messages.map((msg, index) => (
            <ChatBubble key={index} message={msg} />
          ))}
          {showSchemes && (
            <div className="mt-6 p-4 bg-white rounded-xl border-2 border-green-200 shadow-md">
              <SchemeButtons />
            </div>
          )}
        </>
      )}
    </div>
  );
}
