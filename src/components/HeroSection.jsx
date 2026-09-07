import { Phone, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0A192F] text-white py-16 md:py-24 overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#00A896_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      {/* Glow blobs */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#00A896]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-[#00C49F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">

            {/* Pill Badge */}
            <span className="bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/20 uppercase tracking-wide">
              NEXT-GEN RCM ARCHITECTURE
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              AI Enabled Medical Billing Operations —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-[#00C49F] to-[#FFB703]">
                The Revenue Cycle, Managed From the Inside Out
              </span>
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Billing Horizon pairs experienced medical billing professionals with cutting-edge AI technology to streamline claim submissions, minimize rejections, enforce payer rules, and systematically accelerate cash flow for health systems and specialty practices.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full py-2">
              {[
                "97.5% First-Pass Clean Claims",
                "Deep Payer Rule Automation",
                "Dedicated Billing Specialists",
                "Full EHR & EMR Compatibility",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#00C49F] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-4">
              <a
                href="https://www.billinghorizon.com/contact/"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl text-base font-bold text-[#0A192F] bg-[#00A896] hover:bg-[#00C49F] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all text-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk With a Billing Specialist
              </a>
              <a
                href="https://www.billinghorizon.com/demo/"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl text-base font-bold text-[#0A192F] bg-[#FFB703] hover:bg-yellow-400 transition-all text-center shadow-lg"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Right: RCM Dashboard Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#1E293B] border border-[#00A896]/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,168,150,0.25)] space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00A896]/20 border border-[#00A896]/40 flex items-center justify-center text-[#00C49F]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Real-Time RCM Health</h3>
                    <p className="text-xs text-slate-400">Live Operational Insights</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-bold uppercase rounded-full bg-[#00A896]/20 text-[#00C49F] border border-[#00A896]/30">
                  Active
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <div className="bg-[#0A192F] rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                    <span>First Pass Clean Claim Rate</span>
                    <span className="font-bold text-[#00C49F]">97.5%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00A896] to-[#00C49F] h-2 rounded-full w-[97.5%] transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0A192F] rounded-xl p-3.5 border border-white/10">
                    <span className="block text-xs text-slate-400">Days in A/R</span>
                    <span className="block text-xl font-extrabold text-white mt-1">24.2 Days</span>
                    <span className="block text-[11px] text-[#00C49F] font-medium">↓ 35% vs Industry Avg</span>
                  </div>
                  <div className="bg-[#0A192F] rounded-xl p-3.5 border border-white/10">
                    <span className="block text-xs text-slate-400">Net Collection Rate</span>
                    <span className="block text-xl font-extrabold text-white mt-1">96.8%</span>
                    <span className="block text-[11px] text-[#00C49F] font-medium">↑ Optimized Monthly</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center border-t border-white/10">
                <p className="text-xs text-slate-400">
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
