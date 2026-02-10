export default function ChatInput({ input, setInput, sendMessage }) {
  return (
    <div className="flex p-2 border-t">
      <input
        className="flex-1 border rounded p-2 text-black"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="ml-2 bg-green-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
