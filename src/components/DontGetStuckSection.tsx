import { ArrowRight } from "lucide-react";

const DontGetStuckSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Don't get stuck.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Floot fixes errors on its own so you can actually finish building your app.
            </p>
            <a
              href="/login"
              className="cta-button group"
            >
              Start building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Video */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
              <div
                className="bg-gradient-to-br p-8"
                style={{
                  background: "linear-gradient(to bottom right, color-mix(in srgb, hsl(213 94% 95%) 70%, white 30%), hsl(213 94% 95%))",
                  border: "1px solid color-mix(in srgb, hsl(213 94% 95%) 90%, black 10%)"
                }}
              >
                <video
                  className="w-full h-auto rounded-lg"
                  loop
                  muted
                  playsInline
                  autoPlay
                  src="https://floot.com/landing/investigate.mp4"
                  title="Autonomous debugging"
                />
                <div className="mt-4 bg-blue-200/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-400 rounded-full"
                    style={{ width: "38.2%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DontGetStuckSection;