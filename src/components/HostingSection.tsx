import { ArrowRight, TrendingUp, Globe, Copyright, FileStack, Lock, MessageCircle } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    name: "Autoscaling"
  },
  {
    icon: Globe,
    name: "Fast loading worldwide"
  },
  {
    icon: Copyright,
    name: "Use your own domains"
  },
  {
    icon: FileStack,
    name: "Automatic backups"
  },
  {
    icon: Lock,
    name: "Secure connections"
  },
  {
    icon: MessageCircle,
    name: "Live support"
  }
];

const HostingSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Hosting that scales with you.
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Production-grade hosting ensures your app can support as many users as you need.
          </p>
          <a
            href="/login"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors group"
          >
            Start building
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-slate-300" />
              </div>
              <span className="text-slate-300 font-medium">{feature.name}</span>
            </div>
          ))}
        </div>

        {/* Fun fact */}
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-400 italic">
            Fun fact: Our CTO worked at AWS and built the infrastructure for some of the world's biggest apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HostingSection;