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
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-slate-200 text-[#203858] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            SEAMLESS IMPLEMENTATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mt-1 mb-4">
            4-Step Onboarding Process
          </h2>
          <p className="text-base text-charcoal-primary">
            Transitioning your medical billing doesn't have to be stressful. Our structured 4-phase cutover framework guarantees zero revenue downtime.
          </p>
        </div>

        {/* Vertical Timeline Stepper */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8 md:pl-0">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-10 sm:left-14 md:left-1/2 w-1 bg-slate-200 -translate-x-1/2 rounded-full hidden md:block" />
          <div className="absolute top-6 bottom-6 left-10 sm:left-14 w-1 bg-slate-200 -translate-x-1/2 rounded-full md:hidden" />

          <div className="space-y-10 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-6">
                    <div className="bg-white border border-[#D9D9D9] hover:border-[#203858] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-xl bg-brand-primary text-neutral-white flex items-center justify-center shadow-sm">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-brand-primary">
                            {step.title}
                          </h3>
                        </div>
                        <span className="text-xs font-bold text-brand-secondary bg-slate-100 px-2.5 py-1 rounded-full">
                          Phase {step.num}
                        </span>
                      </div>

                      <span className="block text-xs font-semibold text-brand-secondary mb-3">
                        {step.subtitle}
                      </span>

                      <p className="text-xs sm:text-sm text-neutral-medium leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <div className="pt-3 border-t border-slate-100 space-y-1.5">
                        {step.details.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-center text-xs font-medium text-charcoal-primary">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Connected Badge */}
                  <div className="absolute left-10 sm:left-14 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#203858] text-white flex items-center justify-center font-extrabold text-base border-4 border-white shadow-lg ring-2 ring-slate-200">
                      {step.num}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
