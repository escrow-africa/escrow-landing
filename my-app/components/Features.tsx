
import {
  ShieldCheck,
  Zap,
  Globe,
  Scale,
  Smartphone,
  Briefcase,
} from "lucide-react";

const Features = () => {

  const features = [
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      description:
        "Advanced encryption protects every transaction from start to finish.",
      iconBg: "bg-blue-100",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description:
        "Automated workflows ensure quick release of funds once conditions are met, keeping your business moving.",
      iconBg: "bg-green-100",
    },
    {
      icon: Scale,
      title: "Fair Dispute Resolution",
      description:
        "Independent mediation ensures both parties are protected.",
      iconBg: "bg-blue-100",
    },
    {
      icon: Globe,
      title: "Built for Africa",
      description:
        "Designed around African markets, currencies, and trade realities.",
      iconBg: "bg-blue-100",
    },
    {
      icon: Briefcase,
      title: "Perfect for SMEs",
      description:
        "Ideal for online sellers, freelancers, and growing businesses.",
      iconBg: "bg-blue-100",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description:
        "Simple, intuitive experience built for seamless mobile transactions.",
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <section id="why-escrow" className="py-20 lg:py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose our Escrow service?
          </h2>
          <p className="text-lg text-gray-600">
            We provide a secure environment for your transactions, ensuring
            peace of mind for both buyers and sellers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
              >
                <div
                  className={`card-icon ${feature.iconBg} group-hover:bg-white/20`}
                >
                  <Icon className="w-6 h-6 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-600 group-hover:text-white/90">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Features;