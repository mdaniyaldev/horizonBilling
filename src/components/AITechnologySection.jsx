import { Bot, UserCheck, ShieldCheck, Zap, Layers, CheckCircle2 } from "lucide-react";

export default function AITechnologySection() {
  return (
    <section className="py-16 md:py-24 bg-brand-primary text-neutral-white relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-secondary via-brand-primary to-charcoal-deep opacity-90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-light bg-brand-medium/40 px-3.5 py-1.5 rounded-full border border-brand-light/40">
            Automated Intelligence + Human Judgment
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-white mt-4 mb-4">
            AI Technology Inside Revenue Cycle
          </h2>
          <p className="text-base text-neutral-light/90">
            We don't replace humans with software; we supercharge expert medical billers with proprietary AI validation models to catch claims errors before they turn into costly denials.
          </p>
        </div>

        {/* Featured Core Philosophy Card */}
        <div className="bg-gradient-to-r from-brand-secondary/90 to-brand-medium/90 border border-brand-light/40 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl mb-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Zap className="w-48 h-48 text-white" />
          </div>
          
          <blockquote className="relative z-10 max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-white leading-snug">
              "Automation handles repetition. Our billing specialists handle the decisions."
            </p>
            <footer className="mt-4 text-sm font-semibold text-emerald-300">
              — Billing Horizon Operational Promise
            </footer>
          </blockquote>
        </div>

        {/* 2-Column Comparison Grid: AI vs Specialists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* AI Column */}
          <div className="bg-brand-secondary/40 border border-brand-light/30 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-white">What AI Automation Handles</h3>
                <p className="text-xs text-brand-light">Speed, Scale, & Pattern Recognition</p>
              </div>
            </div>
            
            <ul className="space-y-3 pt-2">
              <li className="flex items-start text-sm text-neutral-light">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2.5 shrink-0" />
                <span>Instant real-time eligibility and benefit verification.</span>
              </li>
              <li className="flex items-start text-sm text-neutral-light">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2.5 shrink-0" />
                <span>Automated CCI edit & NCCI modifier validation checks.</span>
              </li>
              <li className="flex items-start text-sm text-neutral-light">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2.5 shrink-0" />
                <span>Predictive rejection modeling based on historic clearinghouse trends.</span>
              </li>
              <li className="flex items-start text-sm text-neutral-light">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2.5 shrink-0" />
                <span>Continuous 24/7 ERA auto-posting and payment matching.</span>
              </li>
            </ul>
          </div>

          {/* Billing Specialists Column */}
          <div className="bg-brand-secondary/40 border border-brand-light/30 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-white">What Billing Specialists Handle</h3>
                <p className="text-xs text-brand-light">Complex Strategy & Payer Negotiations</p>
              </div>
            </div>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start text-sm text-neutral-light">
                <CheckCircle2 className="w-5 h-5 text-blue-300 mr-2.5 shrink-0" />
                <span>Complex medical necessity appeal letter writing and peer reviews.</span>
              </li>
              <li className="flex items-start text-sm text-neutral-light">
                <CheckCircle2 className="w-5 h-5 text-blue-300 mr-2.5 shrink-0" />
                <span>Direct phone negotiations with medical directors and payer representatives.</span>
              </li>
              <li className="flex items-start text-sm text-neutral-light">
                <CheckCircle2 className="w-5 h-5 text-blue-300 mr-2.5 shrink-0" />
                <span>Custom audit defense for high-complexity surgical & oncology charts.</span>
              </li>
              <li className="flex items-start text-sm text-neutral-light">
                <CheckCircle2 className="w-5 h-5 text-blue-300 mr-2.5 shrink-0" />
                <span>Strategic client consultation and financial performance reviews.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
