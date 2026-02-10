type Message = {
  text: string;
  sender: "user" | "bot";
};

type ChatBubbleProps = {
  message: Message;
};

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex mb-2 animate-fadeIn w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-sm px-3 py-2 rounded-lg text-sm leading-relaxed shadow-md transition-all hover:shadow-lg ${
          isUser
            ? "bg-gradient-to-r from-green-500 to-green-600 text-white rounded-br-none"
            : "bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 rounded-bl-none border border-blue-200"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
