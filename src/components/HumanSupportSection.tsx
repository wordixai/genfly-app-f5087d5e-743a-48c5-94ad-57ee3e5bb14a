import { ArrowRight } from "lucide-react";

const HumanSupportSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
              <div
                className="bg-gradient-to-br p-8"
                style={{
                  background: "linear-gradient(to bottom right, color-mix(in srgb, hsl(28 100% 95%) 70%, white 30%), hsl(28 100% 95%))",
                  border: "1px solid color-mix(in srgb, hsl(28 100% 95%) 90%, black 10%)"
                }}
              >
                <img
                  src="https://assets.floot.app/9f7aa15f-407b-42a1-a912-67490a670b75/d421bd2d-a5df-4bc7-b7f3-834d3df07f30.png"
                  alt="Supportive chat interaction showing business guidance"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get human support.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Live chat or call us for personalized support. We'll help you fix issues and give you guidance on your app.
            </p>
            <a
              href="/login"
              className="cta-button group"
            >
              Start building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanSupportSection;