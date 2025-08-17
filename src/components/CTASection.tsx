import { Button } from "@/components/ui/button";
import { Hammer } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to start building?
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Start for free today — no credit card required.
        </p>
        <a
          href="/login"
          className="inline-flex items-center space-x-3 bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-600 transition-colors"
        >
          <Hammer className="w-6 h-6" />
          <span>Start building</span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;