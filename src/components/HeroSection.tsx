import { Button } from "@/components/ui/button";
import { Rocket, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        {/* Product Hunt Badge */}
        <div className="mb-8">
          <a
            href="https://www.producthunt.com/products/floot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=999324&theme=light&period=daily"
              alt="Floot - Build serious apps with AI without getting stuck | Product Hunt"
              className="w-[250px] h-[54px]"
            />
          </a>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
          The easiest way for entrepreneurs to build web apps.
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Turn your ideas into products without coding, all on one platform.
        </p>

        {/* Input Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <div className="relative">
              <textarea
                className="w-full resize-none border-0 text-lg placeholder-gray-400 focus:outline-none min-h-[120px]"
                placeholder="Build me a "
                rows={4}
              />
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Lock className="w-4 h-4 mr-2" />
                  <span>Your project will be private</span>
                </div>
                
                <Button className="hero-button">
                  <Rocket className="w-4 h-4" />
                  Build
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Backed by Y Combinator */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-sm text-gray-500">Backed by</span>
            <img
              src="https://floot.com/images/yc_logo.svg"
              alt="Y Combinator"
              className="h-6"
            />
          </div>
        </div>

        {/* Built by engineers section */}
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6">
            Built by engineers who've scaled products for millions at
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              alt="AWS"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg"
              alt="Asana"
              className="h-8"
            />
            <img
              src="https://cdn.brandfetch.io/id3V8wH0I2/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
              alt="Retool"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;