import { Phone, ArrowRight, Mail, Calendar, CheckCircle2 } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#0A192F] text-white relative overflow-hidden border-t border-[#00A896]/20">
      {/* Background glow blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00C49F]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          <span className="bg-[#00A896]/10 text-[#00C49F] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/30 uppercase tracking-wide inline-block">
            GET STARTED TODAY
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build a More Controlled Revenue Cycle
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate claim rejections, shorten Days in A/R, and empower your practice with AI technology backed by dedicated medical billing professionals.
          </p>

          {/* Value Pillars */}
          <div className="flex flex-wrap justify-center gap-6 py-4">
            {[
              "No Binding Long-Term Lock-in",
              "Free 90-Day Historic Audit",
              "Full HIPAA Data Encryption",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#00C49F]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://www.billinghorizon.com/contact/"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl text-base font-bold text-[#0A192F] bg-[#FFB703] hover:bg-yellow-400 shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center text-center"
            >
              <Phone className="w-5 h-5 mr-2.5" />
              <span>Talk With a Billing Specialist</span>
            </a>

            <a
              href="https://www.billinghorizon.com/demo/"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl text-base font-bold text-white bg-[#00A896] hover:bg-[#00C49F] border border-[#00A896]/40 transition-all flex items-center justify-center text-center shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2.5" />
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Contact Note */}
          <div className="pt-8 text-xs text-slate-400 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-[#00C49F]" />
              <span>Direct Support: info@billinghorizon.com</span>
            </span>
            <span>|</span>
            <a href="https://www.billinghorizon.com/contact/" className="hover:underline font-semibold text-white">
              Request Customized Fee Schedule Review →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
