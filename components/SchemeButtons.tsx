export default function SchemeButtons() {
  const schemes = [
    {
      name: "PM-KISAN",
      emoji: "💵",
      description: "Direct cash transfer to farmers",
    },
    {
      name: "PMFBY",
      emoji: "🛡️",
      description: "Crop insurance protection",
    },
    {
      name: "Rythu Bandhu",
      emoji: "💰",
      description: "Investment support per hectare",
    },
    {
      name: "Seed Subsidy",
      emoji: "🌱",
      description: "Get quality seeds at low price",
    },
    {
      name: "Soil Health Card",
      emoji: "🧪",
      description: "Free soil testing service",
    },
    {
      name: "Irrigation Aid",
      emoji: "💧",
      description: "Support for irrigation systems",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="text-lg font-bold text-gray-800 flex items-center gap-2">
        <span className="text-2xl">✅</span> Available Schemes for You:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {schemes.map((scheme, index) => (
          <button
            key={index}
            className="bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-left"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">{scheme.emoji}</div>
              <div>
                <div className="font-bold">{scheme.name}</div>
                <div className="text-xs opacity-90">{scheme.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
