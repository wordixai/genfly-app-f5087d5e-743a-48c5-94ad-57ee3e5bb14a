import { 
  Smile, 
  Hammer, 
  Layers, 
  MessageCircle, 
  RefreshCw, 
  Server,
  CircleCheckBig,
  CircleX 
} from "lucide-react";
import { ArrowRight } from "lucide-react";

const comparisonData = [
  {
    icon: Smile,
    category: "Ease of Use",
    floot: "Easy even for absolute beginners",
    others: "Headache for non-coders"
  },
  {
    icon: Hammer,
    category: "What You Can Build",
    floot: "Fully-featured apps",
    others: "Basic apps only"
  },
  {
    icon: Layers,
    category: "All-in-one Platform",
    floot: "Everything built-in",
    others: "Requires external services"
  },
  {
    icon: MessageCircle,
    category: "Human Support",
    floot: "Live chat & calls",
    others: "Little to no support"
  },
  {
    icon: RefreshCw,
    category: "Error Correction",
    floot: "Smart & automatic",
    others: "Gets stuck often"
  },
  {
    icon: Server,
    category: "Hosting",
    floot: "Scales with you",
    others: "Limited"
  }
];

const ComparisonSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Why Floot?
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div></div>
            <div className="text-center text-xl font-bold text-gray-900">Floot</div>
            <div className="text-center text-xl font-bold text-gray-900">Others</div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-8 py-6 border-b border-gray-200">
              {/* Category */}
              <div className="flex items-center space-x-3">
                <item.icon className="w-6 h-6 text-gray-600" />
                <span className="font-medium text-gray-900">{item.category}</span>
              </div>

              {/* Floot */}
              <div className="flex items-center space-x-3">
                <CircleCheckBig className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-900">{item.floot}</span>
              </div>

              {/* Others */}
              <div className="flex items-center space-x-3">
                <CircleX className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-600">{item.others}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/login"
            className="cta-button group"
          >
            Start building
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;