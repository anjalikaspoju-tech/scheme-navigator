type LanguageSelectorProps = {
  language: string;
  onChange: (lang: string) => void;
};

export default function LanguageSelector({ language, onChange }: LanguageSelectorProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 text-center border-b border-green-200">
      <div className="flex items-center justify-center gap-3">
        <span className="text-2xl">🌐</span>
        <label className="font-bold text-gray-700 text-lg">Select Language:</label>
        <div className="relative inline-block">
          <select
            className="appearance-none border-2 border-green-500 bg-white px-6 py-3 rounded-lg cursor-pointer font-semibold text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition hover:border-green-600"
            value={language}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="English">�🇧 English</option>
            <option value="Hindi">🇮🇳 हिंदी (Hindi)</option>
            <option value="Tamil">🇮🇳 தமிழ் (Tamil)</option>
            <option value="Telugu">🇮🇳 తెలుగు (Telugu)</option>
            <option value="Kannada">🇮🇳 ಕನ್ನಡ (Kannada)</option>
            <option value="Malayalam">🇮🇳 മലയാളം (Malayalam)</option>
            <option value="Marathi">🇮🇳 मराठी (Marathi)</option>
            <option value="Gujarati">🇮🇳 ગુજરાતી (Gujarati)</option>
            <option value="Punjabi">🇮🇳 ਪੰਜਾਬੀ (Punjabi)</option>
            <option value="Bengali">🇮🇳 বাংলা (Bengali)</option>
            <option value="Oriya">🇮🇳 ଓଡ଼ିଆ (Oriya)</option>
            <option value="Assamese">🇮🇳 অসমীয়া (Assamese)</option>
            <option value="Urdu">🇮🇳 اردو (Urdu)</option>
            <option value="Kashmiri">🇮🇳 کشمیری (Kashmiri)</option>
            <option value="Konkani">🇮🇳 कोंकणी (Konkani)</option>
            <option value="Manipuri">🇮🇳 ମଣିପୁରୀ (Manipuri)</option>
            <option value="Nepali">🇮🇳 नेपाली (Nepali)</option>
            <option value="Sanskrit">🇮🇳 संस्कृत (Sanskrit)</option>
            <option value="Santali">🇮🇳 ᱥᱟᱱᱛᱟᱲᱤ (Santali)</option>
            <option value="Sindhi">🇮🇳 سنڌي (Sindhi)</option>
            <option value="Dogri">🇮🇳 डोगरी (Dogri)</option>
            <option value="Bodo">🇮🇳 बड़ो (Bodo)</option>
            <option value="Maithili">🇮🇳 मैथिली (Maithili)</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700">
            ▼
          </div>
        </div>
      </div>
    </div>
  );
}
