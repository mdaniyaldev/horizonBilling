import { Phone, ArrowRight, PieChart, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function PayerMixCTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary text-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary/80 border border-brand-light/30 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider border border-white/20">
                PAYER CONTRACT OPTIMIZATION
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-white leading-tight">
                Your Payer Mix Matters — Stop Allowing Underpayments to Slip Through
              </h2>

              <p className="text-base text-neutral-light/90 max-w-2xl leading-relaxed">
                Whether your practice leans heavily on Medicare, Commercial Managed Care, or Medicaid, every payer mix presents unique billing complexities. Speak with our specialists to review your contract fee schedules and eliminate revenue leakage.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-neutral-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Fee Schedule Audit</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Contractual Variance Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Prompt Appeal Filing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch">
              <a
                href="https://www.billinghorizon.com/contact/"
                className="min-h-[48px] px-6 py-3.5 rounded-xl text-base font-bold text-brand-primary bg-neutral-white hover:bg-neutral-light shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center text-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk With a Billing Specialist
              </a>
              <a
                href="https://www.billinghorizon.com/payer-mix/"
                className="min-h-[48px] px-6 py-3.5 rounded-xl text-base font-semibold text-neutral-white bg-brand-secondary/80 hover:bg-brand-medium border border-brand-light/40 transition-all flex items-center justify-center text-center"
              >
                <span>Analyze Your Payer Mix</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
