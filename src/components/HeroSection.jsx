import { ShieldCheck, Phone, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#203858] text-neutral-white py-16 md:py-24 overflow-hidden border-b border-brand-medium/30">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6B85A3_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-brand-medium/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-medium/40 border border-brand-light/40 text-xs font-semibold text-brand-light backdrop-blur-sm shadow-inner">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Next-Gen Medical Billing Architecture</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-white leading-tight">
              AI Enabled Medical Billing Operations — <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-white via-brand-light to-blue-200">The Revenue Cycle, Managed From the Inside Out</span>
            </h1>

            {/* Body Paragraph */}
            <p className="text-base sm:text-lg text-neutral-light/90 leading-relaxed font-normal">
              Billing Horizon pairs experienced medical billing professionals with cutting-edge AI technology to streamline claim submissions, minimize rejections, enforce payer rules, and systematically accelerate cash flow for health systems and specialty practices.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full py-2">
              <div className="flex items-center gap-2.5 text-sm text-neutral-white/95">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>97.5% First-Pass Clean Claims</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-white/95">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Deep Payer Rule Automation</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-white/95">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Dedicated Billing Specialists</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-white/95">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Full EHR & EMR Compatibility</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-4">
              <a
                href="https://www.billinghorizon.com/contact/"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl text-base font-bold text-brand-primary bg-neutral-white hover:bg-neutral-light shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all text-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk With a Billing Specialist
              </a>
              <a
                href="https://www.billinghorizon.com/demo/"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl text-base font-bold text-neutral-white bg-brand-secondary hover:bg-brand-medium border border-brand-light/40 transition-all text-center"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Hero Visual Card / Quick Metric Graphic */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-brand-secondary/60 border border-brand-light/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between border-b border-brand-light/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-white">Real-Time RCM Health</h3>
                    <p className="text-xs text-brand-light">Live Operational Insights</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-bold uppercase rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Active
                </span>
              </div>

              {/* Mini Dashboard Metrics */}
              <div className="space-y-4">
                <div className="bg-brand-primary/80 rounded-xl p-4 border border-brand-light/20">
                  <div className="flex justify-between items-center text-xs text-neutral-light mb-1">
                    <span>First Pass Clean Claim Rate</span>
                    <span className="font-bold text-emerald-400">97.5%</span>
                  </div>
                  <div className="w-full bg-charcoal-deep rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-medium to-emerald-400 h-2 rounded-full w-[97.5%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-brand-primary/80 rounded-xl p-3.5 border border-brand-light/20">
                    <span className="block text-xs text-neutral-light">Days in A/R</span>
                    <span className="block text-xl font-extrabold text-neutral-white mt-1">24.2 Days</span>
                    <span className="block text-[11px] text-emerald-400 font-medium">↓ 35% vs Industry Avg</span>
                  </div>

                  <div className="bg-brand-primary/80 rounded-xl p-3.5 border border-brand-light/20">
                    <span className="block text-xs text-neutral-light">Net Collection Rate</span>
                    <span className="block text-xl font-extrabold text-neutral-white mt-1">96.8%</span>
                    <span className="block text-[11px] text-emerald-400 font-medium">↑ Optimized Monthly</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center border-t border-brand-light/20">
                <p className="text-xs text-brand-light">
                  Integrating certified billing coders & AI automation into your existing EHR workflow.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
