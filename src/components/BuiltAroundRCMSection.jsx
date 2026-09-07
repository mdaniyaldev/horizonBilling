import { Users, Cpu, FileCheck, RefreshCw } from "lucide-react";

export default function BuiltAroundRCMSection() {
  const features = [
    {
      icon: Users,
      title: "Experienced Billing Professionals",
      description:
        "Certified billing specialists and coders embedded into your workflow, taking ownership of complex appeals, audit resolution, and specialty-specific guidelines.",
    },
    {
      icon: Cpu,
      title: "AI Technology Engine",
      description:
        "Automated claim scrubbing, intelligent batch validation, and real-time rejection pattern recognition to intercept errors prior to clearinghouse transmission.",
    },
    {
      icon: FileCheck,
      title: "Payer Rules Engine",
      description:
        "Dynamic updates across Medicare, Medicaid, and commercial payers ensuring compliance with LCDs, NCDs, prior authorizations, and timely filing rules.",
    },
    {
      icon: RefreshCw,
      title: "Continuous A/R Attention",
      description:
        "Unrelenting follow-up on outstanding claims from day 1 to 90+. We leave no unpaid claim unexamined, maximizing net collection for every encounter.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary bg-brand-light/15 px-3 py-1 rounded-full border border-brand-light/30">
            Core Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            Built Around Your Revenue Cycle
          </h2>
          <p className="text-base text-charcoal-primary">
            Our hybrid operations framework pairs deep human expertise with specialized automation to ensure optimal cash flow, zero claim drop-off, and total transparency.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-white border border-neutral-light hover:border-brand-medium rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 group-hover:bg-brand-primary text-brand-primary group-hover:text-neutral-white flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-light/60 flex items-center text-xs font-semibold text-brand-medium group-hover:text-brand-primary">
                  <span>Learn how it works</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
