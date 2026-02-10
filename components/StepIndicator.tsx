type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const steps = [
    { num: 1, label: "Your State", emoji: "🗺️" },
    { num: 2, label: "Your Land", emoji: "🌾" },
    { num: 3, label: "Schemes", emoji: "💰" },
  ];

  return (
    <div className="bg-white border-b px-4 py-2">
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.num} className="flex flex-col items-center flex-1">
            {/* Step Circle */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-all mb-1 ${
                currentStep >= step.num
                  ? "bg-green-600 text-white shadow-md scale-110"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step.emoji}
            </div>
            {/* Step Label */}
            <div className={`text-xs font-semibold ${currentStep >= step.num ? "text-green-600" : "text-gray-500"}`}>
              {step.label}
            </div>
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute h-1 w-12 mt-6 ${
                  currentStep > step.num ? "bg-green-600" : "bg-gray-300"
                }`}
                style={{ left: `calc(50% + 2rem)` }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
