import { ArrowRight, Rocket, Database, Server, Users, ChartNoAxesCombined, DollarSign } from "lucide-react";

const features = [
  {
    icon: Rocket,
    name: "1-click Hosting"
  },
  {
    icon: Database,
    name: "Database & Editor"
  },
  {
    icon: Server,
    name: "Backend"
  },
  {
    icon: Users,
    name: "User management"
  },
  {
    icon: ChartNoAxesCombined,
    name: "Monitoring"
  },
  {
    icon: DollarSign,
    name: "Accept payments"
  }
];

const AllInOnePlatformSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-medium mb-4">All-in-one platform</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need, built-in.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Build, launch, and scale your app all in one place.
          </p>
          <a
            href="/login"
            className="cta-button group"
          >
            Start building
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-gray-900 font-medium">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllInOnePlatformSection;