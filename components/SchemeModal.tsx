export default function SchemeModal({ scheme, close }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-lg font-bold mb-2">{scheme.name}</h2>
        <p><b>Benefits:</b> {scheme.benefits}</p>
        <p><b>Documents:</b> {scheme.docs}</p>
        <button onClick={close} className="mt-4 bg-red-500 text-white px-3 py-1 rounded">
          Close
        </button>
      </div>
    </div>
  );
}
