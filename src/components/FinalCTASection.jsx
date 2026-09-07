import { Phone, ArrowRight, ShieldCheck, Mail, Calendar, CheckCircle2 } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-primary to-charcoal-deep text-neutral-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-medium/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/40 text-xs font-semibold text-brand-light border border-brand-light/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Transform Your Revenue Cycle Management</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-white tracking-tight leading-tight">
            Let's Build a More Controlled Revenue Cycle
          </h2>

          <p className="text-base sm:text-lg text-neutral-light/90 max-w-2xl mx-auto leading-relaxed">
            Eliminate claim rejections, shorten Days in A/R, and empower your practice with AI technology backed by dedicated medical billing professionals.
          </p>

          {/* Quick Value Pillars */}
          <div className="flex flex-wrap justify-center gap-6 py-4">
            <div className="flex items-center gap-2 text-sm text-neutral-white font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>No Binding Long-Term Lock-in</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-white font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Free 90-Day Historic Audit</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-white font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Full HIPAA Data Encryption</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://www.billinghorizon.com/contact/"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl text-base font-bold text-brand-primary bg-neutral-white hover:bg-neutral-light shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center text-center"
            >
              <Phone className="w-5 h-5 mr-2.5" />
              <span>Talk With a Billing Specialist</span>
            </a>

            <a
              href="https://www.billinghorizon.com/demo/"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl text-base font-bold text-neutral-white bg-brand-secondary hover:bg-brand-medium border border-brand-light/40 transition-all flex items-center justify-center text-center"
            >
              <Calendar className="w-5 h-5 mr-2.5" />
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Contact Direct Line Note */}
          <div className="pt-8 text-xs text-brand-light/80 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Direct Support: info@billinghorizon.com</span>
            </span>
            <span>|</span>
            <a href="https://www.billinghorizon.com/contact/" className="hover:underline font-semibold text-neutral-white">
              Request Customized Fee Schedule Review →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
