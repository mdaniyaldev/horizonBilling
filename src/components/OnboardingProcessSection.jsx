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
    <section className="py-16 md:py-24 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary bg-brand-light/20 px-3 py-1 rounded-full border border-brand-light/30">
            Seamless Implementation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            4-Step Onboarding Process
          </h2>
          <p className="text-base text-charcoal-primary">
            Transitioning your medical billing doesn't have to be stressful. Our structured 4-phase cutover framework guarantees zero revenue downtime.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-gray-50 border border-neutral-light hover:border-brand-medium rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-brand-light group-hover:text-brand-primary transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-primary text-neutral-white flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-brand-primary mb-1">
                    {step.title}
                  </h3>
                  <span className="block text-xs font-semibold text-brand-secondary mb-3">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-neutral-medium leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-light/60 space-y-1.5">
                  {step.details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center text-[11px] font-medium text-charcoal-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
