import { Bot, UserCheck, Zap, CheckCircle2 } from "lucide-react";

export default function AITechnologySection() {
  return (
    <section className="py-16 md:py-24 bg-[#1E293B] text-white relative overflow-hidden border-t border-slate-700">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A896]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-[#00A896]/10 text-[#00C49F] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/30 uppercase tracking-wide inline-block mb-3">
            AI & AUTOMATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1 mb-4">
            AI Technology Inside Revenue Cycle
          </h2>
          <p className="text-base text-slate-300">
            We don't replace humans with software; we supercharge expert medical billers with proprietary AI validation models to catch claims errors before they turn into costly denials.
          </p>
        </div>

        {/* Featured Core Philosophy Card — teal glow */}
        <div className="bg-[#0A192F] border border-[#00A896]/40 rounded-3xl p-8 sm:p-10 shadow-[0_0_30px_rgba(0,168,150,0.3)] mb-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Zap className="w-48 h-48 text-[#00A896]" />
          </div>

          <blockquote className="relative z-10 max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-snug">
              "Automation handles repetition. Our billing specialists handle the decisions."
            </p>
            <footer className="mt-4 text-sm font-semibold text-[#00C49F]">
              — Billing Horizon Operational Promise
            </footer>
          </blockquote>
        </div>

        {/* 2-Column Comparison: AI vs Specialists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* AI Column */}
          <div className="bg-[#0A192F] border border-[#00A896]/30 shadow-[0_0_20px_rgba(0,168,150,0.15)] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#00A896]/20 border border-[#00A896]/30 flex items-center justify-center text-[#00C49F]">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">What AI Automation Handles</h3>
                <p className="text-xs text-slate-400">Speed, Scale, & Pattern Recognition</p>
              </div>
            </div>

            <ul className="space-y-3 pt-2">
              {[
                "Instant real-time eligibility and benefit verification.",
                "Automated CCI edit & NCCI modifier validation checks.",
                "Predictive rejection modeling based on historic clearinghouse trends.",
                "Continuous 24/7 ERA auto-posting and payment matching.",
              ].map((item) => (
                <li key={item} className="flex items-start text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-[#00C49F] mr-2.5 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Billing Specialists Column */}
          <div className="bg-[#0A192F] border border-[#FFB703]/30 shadow-[0_0_20px_rgba(255,183,3,0.1)] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FFB703]/20 border border-[#FFB703]/30 flex items-center justify-center text-[#FFB703]">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">What Billing Specialists Handle</h3>
                <p className="text-xs text-slate-400">Complex Strategy & Payer Negotiations</p>
              </div>
            </div>

            <ul className="space-y-3 pt-2">
              {[
                "Complex medical necessity appeal letter writing and peer reviews.",
                "Direct phone negotiations with medical directors and payer representatives.",
                "Custom audit defense for high-complexity surgical & oncology charts.",
                "Strategic client consultation and financial performance reviews.",
              ].map((item) => (
                <li key={item} className="flex items-start text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB703] mr-2.5 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
