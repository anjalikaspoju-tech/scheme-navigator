export default function SchemeButtons() {
  const schemes = [
    "PM-KISAN",
    "PMFBY (Crop Insurance)",
    "Rythu Bandhu",
    "Telangana Seed Subsidy",
    "Soil Health Card Scheme"
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {schemes.map((scheme, index) => (
        <button
          key={index}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          {scheme}
        </button>
      ))}
    </div>
  );
}
