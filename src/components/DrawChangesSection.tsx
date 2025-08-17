import { ArrowRight } from "lucide-react";

const DrawChangesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Video */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
              <div
                className="bg-gradient-to-br p-8"
                style={{
                  background: "linear-gradient(to bottom right, color-mix(in srgb, hsl(28 100% 95%) 70%, white 30%), hsl(28 100% 95%))",
                  border: "1px solid color-mix(in srgb, hsl(28 100% 95%) 90%, black 10%)"
                }}
              >
                <video
                  className="w-full h-auto rounded-lg"
                  loop
                  muted
                  playsInline
                  autoPlay
                  src="https://floot.com/landing/drawtochange.mp4"
                  title="Visual edit"
                />
                <div className="mt-4 bg-orange-200/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-400 rounded-full"
                    style={{ width: "23.5%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Draw your changes.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Circle what you want to change. Draw arrows where things should move. Perfect when you need more than words.
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

export default DrawChangesSection;