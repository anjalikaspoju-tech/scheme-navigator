export default function ChatBubble({ message }) {
  return (
    <div className={`p-3 rounded-lg max-w-xs ${
      message.sender === "user"
        ? "bg-green-600 text-white ml-auto"
        : "bg-gray-200 text-black"
    }`}>
      {message.text}
    </div>
  );
}
