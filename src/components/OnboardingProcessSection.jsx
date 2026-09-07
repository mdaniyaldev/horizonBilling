import { Search, Wrench, RefreshCw, TrendingUp, CheckCircle2 } from "lucide-react";

export default function OnboardingProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Understand & Audit",
      icon: Search,
      subtitle: "Comprehensive Revenue Assessment",
      description:
        "We review 90 days of historic claims data, payer mix contracts, denial reason codes, and current clearinghouse rejection rates to establish your practice baseline.",
      details: ["Historical A/R audit", "Fee schedule review", "Clearinghouse connection check"],
    },
    {
      num: "02",
      title: "Prepare & Configure",
      icon: Wrench,
      subtitle: "EHR & Rule Set Integration",
      description:
        "Our integration team maps your EHR fields, builds specialty-specific coding rule triggers, verifies clearinghouse EDI connections, and establishes BAA protocols.",
      details: ["EHR API configuration", "Specialty rule set setup", "HIPAA BAA agreement finalization"],
    },
    {
      num: "03",
      title: "Transition & Launch",
      icon: RefreshCw,
      subtitle: "Parallel Billing Cutover",
      description:
        "We initiate live claim scrubbing and submission with zero disruption to your daily clinical schedule or patient checkout workflows.",
      details: ["Live charge capture sync", "Real-time scrubbing launch", "Dedicated billing pod assignment"],
    },
    {
      num: "04",
      title: "Stabilize & Improve",
      icon: TrendingUp,
      subtitle: "Continuous Revenue Optimization",
      description:
        "Weekly financial performance reviews, aged A/R reduction tracking, and ongoing AI rule updates to ensure clean claim submission rates stay above 97.5%.",
      details: ["Weekly executive reporting", "A/R backlog elimination", "Payer contract renegotiation data"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/20 uppercase tracking-wide inline-block mb-3">
            SEAMLESS IMPLEMENTATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-1 mb-4">
            4-Step Onboarding Process
          </h2>
          <p className="text-base text-slate-600">
            Transitioning your medical billing doesn't have to be stressful. Our structured 4-phase cutover framework guarantees zero revenue downtime.
          </p>
        </div>

        {/* Vertical Timeline Stepper */}
        <div className="max-w-3xl mx-auto relative">

          {/* Teal vertical connecting line */}
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-[#00A896]/30 rounded-full" />

          <div className="space-y-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-start gap-6 relative">

                  {/* Teal numbered badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#00A896] text-white flex items-center justify-center font-extrabold text-sm border-4 border-slate-50 shadow-lg ring-2 ring-[#00A896]/30">
                      {step.num}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-2">
                    <div className="bg-white border border-slate-200 hover:border-[#00A896] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-xl bg-[#00A896]/10 text-[#00A896] group-hover:bg-[#00A896] group-hover:text-white flex items-center justify-center transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#0A192F]">
                            {step.title}
                          </h3>
                        </div>
                        <span className="text-xs font-bold text-[#00A896] bg-[#00A896]/10 px-2.5 py-1 rounded-full">
                          Phase {step.num}
                        </span>
                      </div>

                      <span className="block text-xs font-semibold text-[#00A896] mb-3">
                        {step.subtitle}
                      </span>

                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <div className="pt-3 border-t border-slate-100 space-y-1.5">
                        {step.details.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-center text-xs font-medium text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#00A896] mr-2 shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
