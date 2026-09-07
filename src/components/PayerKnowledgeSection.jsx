import { ShieldCheck, Quote, AlertCircle, CheckCircle2 } from "lucide-react";

export default function PayerKnowledgeSection() {
  const payers = [
    "Medicare",
    "Medicaid",
    "Blue Cross Blue Shield",
    "UnitedHealthcare",
    "Aetna",
    "Cigna",
    "Humana",
    "Kaiser Permanente",
    "Molina Healthcare",
    "Centene Corporation",
    "Tricare",
    "WellCare",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] overflow-hidden border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-slate-100 text-[#203858] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            PAYER EXPERTISE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mt-1 mb-4">
            Mastering Payer Rules & Reimbursement Dynamics
          </h2>
          <p className="text-base text-charcoal-primary">
            Payers change rules, filing deadlines, and authorization requirements daily. We continuously update our payer rules engines to prevent delays.
          </p>
        </div>

        {/* Coverage vs Eligibility Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-gray-50 border border-neutral-light rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-brand-primary">Eligibility Verification</h3>
            </div>
            <p className="text-sm text-charcoal-primary leading-relaxed">
              Eligibility confirms if a patient's policy is active on the date of service. Basic eligibility checks only cover active status and standard co-pays, leaving practices exposed to unpaid claims if underlying policy rules aren't met.
            </p>
            <div className="pt-2 text-xs text-neutral-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Real-time API eligibility verification prior to patient appointment</span>
            </div>
          </div>

          <div className="bg-brand-primary/5 border border-brand-medium/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary text-neutral-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-brand-primary">Coverage & Policy Rules</h3>
            </div>
            <p className="text-sm text-charcoal-primary leading-relaxed">
              True coverage analysis drills deeper into procedure-specific pre-authorizations, medical necessity documentation, non-covered code exclusions, and payer-specific LCD guidelines to guarantee full reimbursement.
            </p>
            <div className="pt-2 text-xs text-brand-primary font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-brand-secondary" />
              <span>Prevents pre-auth denial traps before procedure performance</span>
            </div>
          </div>

        </div>

        {/* Payer Marquee Slider */}
        <div className="mb-16">
          <p className="text-center text-xs font-semibold text-neutral-medium uppercase tracking-widest mb-6">
            Trusted Integration & Active Billing Across Major Commercial & Government Payers
          </p>
          
          <div className="relative w-full overflow-hidden bg-gray-100 rounded-2xl py-6 border border-neutral-light">
            <div className="flex space-x-8 animate-marquee whitespace-nowrap">
              {[...payers, ...payers].map((payer, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center px-6 py-2 rounded-xl bg-neutral-white text-brand-primary font-bold text-sm shadow-sm border border-neutral-light/80"
                >
                  <ShieldCheck className="w-4 h-4 mr-2 text-brand-secondary" />
                  {payer}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Quote Card */}
        <div className="bg-brand-primary text-neutral-white rounded-3xl p-8 sm:p-10 shadow-xl border border-brand-light/30 relative">
          <Quote className="w-12 h-12 text-brand-light/30 absolute top-6 right-6" />
          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl font-semibold italic text-neutral-white leading-relaxed mb-4">
              "We don't just track what a payer paid... we evaluate what they should have paid according to your contracted fee schedule and challenge underpayments systematically."
            </p>
            <div className="text-sm font-bold text-emerald-400">
              — Billing Horizon Revenue Integrity Team
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
