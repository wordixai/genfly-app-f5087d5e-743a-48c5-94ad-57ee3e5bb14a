import { Code, Database, FileText, Check } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Code",
    description: "Complete code ownership."
  },
  {
    icon: Database,
    title: "Data",
    description: "All app data belongs to you."
  },
  {
    icon: FileText,
    title: "IP",
    description: "Full intellectual property rights."
  }
];

const OwnershipSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-medium mb-4">Ownership guarantee</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              You own 100% of your app.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Features */}
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Guarantees */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-900 font-medium">Export anytime</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-900 font-medium">No lock-in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipSection;