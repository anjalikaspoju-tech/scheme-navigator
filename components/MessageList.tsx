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
    <div className="w-full flex flex-col space-y-2 bg-gradient-to-b from-white to-blue-50">
      {messages.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <div className="text-3xl mb-2">👋</div>
          <p className="text-sm">Welcome! Let's find the best schemes for you</p>
        </div>
      ) : (
        <>
          {messages.map((msg, index) => (
            <ChatBubble key={index} message={msg} />
          ))}
          {showSchemes && (
            <div className="mt-3 p-3 bg-white rounded-lg border-2 border-green-200 shadow-md">
              <SchemeButtons />
            </div>
          )}
        </>
      )}
    </div>
  );
}
