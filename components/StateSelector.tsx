"use client";

const INDIAN_STATES = [
  // States
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  // Union Territories
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
  "Ladakh",
  "Jammu and Kashmir",
];

type StateSelectorProps = {
  onSelectState: (state: string) => void;
};

export default function StateSelector({ onSelectState }: StateSelectorProps) {
  return (
    <div className="my-2 p-3 bg-white rounded-lg border-2 border-green-500 w-full">
      <p className="text-green-700 font-bold text-center text-sm mb-3">📍 Select your state:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-96 overflow-y-auto">
        {INDIAN_STATES.map((state) => (
          <button
            key={state}
            onClick={() => onSelectState(state)}
            className="px-2 py-1.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg text-xs font-semibold transition transform hover:scale-105 shadow-sm hover:shadow-md"
          >
            {state}
          </button>
        ))}
      </div>
    </div>
  );
}
