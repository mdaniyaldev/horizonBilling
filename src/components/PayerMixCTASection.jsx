import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PayerMixCTASection() {
  return (
    <section className="py-16 md:py-20 bg-[#F0F8FF] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Asymmetric card with border-left teal accent */}
        <div className="bg-white border-l-8 border-[#00A896] rounded-r-3xl rounded-tl-3xl shadow-lg overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-8 space-y-4">
                <span className="bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/20 uppercase tracking-wide inline-block">
                  CONTRACT OPTIMIZATION
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] leading-tight">
                  Your Payer Mix Matters — Stop Allowing Underpayments to Slip Through
                </h2>

                <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
                  Whether your practice leans heavily on Medicare, Commercial Managed Care, or Medicaid, every payer mix presents unique billing complexities. Speak with our specialists to review your contract fee schedules and eliminate revenue leakage.
                </p>

                <div className="flex flex-wrap gap-5 pt-2">
                  {["Fee Schedule Audit", "Contractual Variance Tracking", "Prompt Appeal Filing"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#0A192F] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch">
                <a
                  href="https://www.billinghorizon.com/contact/"
                  className="min-h-[48px] px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[#00A896] hover:bg-[#00C49F] shadow-md hover:shadow-lg transition-all flex items-center justify-center text-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Talk With a Billing Specialist
                </a>
                <a
                  href="https://www.billinghorizon.com/payer-mix/"
                  className="min-h-[48px] px-6 py-3.5 rounded-xl text-base font-semibold text-[#0A192F] bg-[#F0F8FF] hover:bg-[#00A896]/10 border border-[#00A896]/30 transition-all flex items-center justify-center text-center"
                >
                  <span>Analyze Your Payer Mix</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
