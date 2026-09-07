import { ShieldCheck, Quote, CheckCircle2, AlertCircle } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-[#FFFFFF] overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/20 uppercase tracking-wide inline-block mb-3">
            PAYER EXPERTISE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-1 mb-4">
            Mastering Payer Rules & Reimbursement Dynamics
          </h2>
          <p className="text-base text-slate-600">
            Payers change rules, filing deadlines, and authorization requirements daily. We continuously update our payer rules engines to prevent delays.
          </p>
        </div>

        {/* Side-by-side comparison boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-16 rounded-2xl overflow-hidden shadow-lg border border-slate-200">

          {/* Box 1 — Eligibility (Ice Blue + Teal accent) */}
          <div className="bg-[#F0F8FF] border-l-4 border-[#00C49F] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00C49F]/20 text-[#00C49F] flex items-center justify-center font-extrabold text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-[#0A192F]">Eligibility Verification</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Eligibility confirms if a patient's policy is active on the date of service. Basic eligibility checks only cover active status and standard co-pays, leaving practices exposed to unpaid claims if underlying policy rules aren't met.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00C49F]" />
              <span>Real-time API eligibility verification prior to patient appointment</span>
            </div>
          </div>

          {/* Box 2 — Coverage (Navy Dark + Amber accent) */}
          <div className="bg-[#0A192F] border-l-4 border-[#FFB703] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFB703]/20 text-[#FFB703] flex items-center justify-center font-extrabold text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Coverage & Policy Rules</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              True coverage analysis drills deeper into procedure-specific pre-authorizations, medical necessity documentation, non-covered code exclusions, and payer-specific LCD guidelines to guarantee full reimbursement.
            </p>
            <div className="pt-2 text-xs text-[#FFB703] font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Prevents pre-auth denial traps before procedure performance</span>
            </div>
          </div>

        </div>

        {/* Payer Marquee Slider */}
        <div className="mb-16">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Trusted Integration & Active Billing Across Major Commercial & Government Payers
          </p>

          <div className="relative w-full overflow-hidden bg-[#F0F8FF] rounded-2xl py-5 border border-slate-200">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F0F8FF] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F0F8FF] to-transparent z-10" />
            <div className="flex space-x-6 animate-marquee whitespace-nowrap">
              {[...payers, ...payers].map((payer, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-white text-[#0A192F] font-bold text-sm shadow-sm border border-[#00A896]/20 hover:border-[#00A896] transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 mr-2 text-[#00A896]" />
                  {payer}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Quote Card */}
        <div className="bg-[#0A192F] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#00A896]/20 relative overflow-hidden">
          <Quote className="w-12 h-12 text-[#00A896]/20 absolute top-6 right-6" />
          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl font-semibold italic text-white leading-relaxed mb-4">
              "We don't just track what a payer paid... we evaluate what they should have paid according to your contracted fee schedule and challenge underpayments systematically."
            </p>
            <div className="text-sm font-bold text-[#00C49F]">
              — Billing Horizon Revenue Integrity Team
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
