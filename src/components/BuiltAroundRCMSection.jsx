import { Users, Cpu, FileCheck, RefreshCw } from "lucide-react";

export default function BuiltAroundRCMSection() {
  const features = [
    {
      icon: Users,
      color: "bg-[#00A896]",
      title: "Experienced Billing Professionals",
      description:
        "Certified billing specialists and coders embedded into your workflow, taking ownership of complex appeals, audit resolution, and specialty-specific guidelines.",
    },
    {
      icon: Cpu,
      color: "bg-[#0A192F]",
      title: "AI Technology Engine",
      description:
        "Automated claim scrubbing, intelligent batch validation, and real-time rejection pattern recognition to intercept errors prior to clearinghouse transmission.",
    },
    {
      icon: FileCheck,
      color: "bg-[#00C49F]",
      title: "Payer Rules Engine",
      description:
        "Dynamic updates across Medicare, Medicaid, and commercial payers ensuring compliance with LCDs, NCDs, prior authorizations, and timely filing rules.",
    },
    {
      icon: RefreshCw,
      color: "bg-[#FFB703]",
      title: "Continuous A/R Attention",
      description:
        "Unrelenting follow-up on outstanding claims from day 1 to 90+. We leave no unpaid claim unexamined, maximizing net collection for every encounter.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/20 uppercase tracking-wide inline-block mb-3">
            CORE FOUNDATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-1 mb-4">
            Built Around Your Revenue Cycle
          </h2>
          <p className="text-base text-slate-600">
            Our hybrid operations framework pairs deep human expertise with specialized automation to ensure optimal cash flow, zero claim drop-off, and total transparency.
          </p>
        </div>

        {/* Horizontal 2-column feature rows */}
        <div className="space-y-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white border border-slate-200 hover:border-[#00A896] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Large colored icon circle */}
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-[#0A192F] mb-1 group-hover:text-[#00A896] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="hidden sm:flex items-center text-xs font-semibold text-[#00A896] shrink-0 group-hover:translate-x-1 transition-transform">
                  <span>Learn how it works</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
