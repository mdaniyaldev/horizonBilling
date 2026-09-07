"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Shield, Send } from "lucide-react";

export default function TechInPracticeFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 bg-[#00A896] border-t border-[#00A896]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl text-white relative overflow-hidden border border-[#00A896]/20">
          {/* Glow blob */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00A896]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="bg-[#00A896]/10 text-[#00C49F] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/30 uppercase tracking-wide inline-block">
                INTERACTIVE DEMO
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                See Technology in Practice
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Schedule a personalized 15-minute walkthrough of our medical billing platform. Discover how automated payer rule validation and intelligent claim tracking can transform your practice's monthly collections.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { icon: CheckCircle2, text: "Real-time claim scrubbing demonstration tailored to your EHR" },
                  { icon: Clock, text: "Quick 15-minute operational audit with zero obligation" },
                  { icon: Shield, text: "100% HIPAA compliant data sharing protocols" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-[#00A896]/20 flex items-center justify-center text-[#00C49F] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Card — crisp white */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-[#00A896]/10 text-[#00A896] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A192F]">Demo Request Received!</h3>
                    <p className="text-sm text-slate-500 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. A Billing Horizon revenue cycle specialist will contact you shortly at <strong>{formData.email}</strong> to coordinate your live session.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "" });
                      }}
                      className="mt-4 text-xs font-semibold text-[#00A896] underline hover:text-[#0A192F]"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-[#0A192F] mb-2">
                      Schedule Your Practice Review
                    </h3>

                    <div>
                      <label htmlFor="full-name" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Sarah Jenkins"
                        className="w-full min-h-[48px] px-4 rounded-xl border border-slate-200 bg-slate-50 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="work-email" className="block text-sm font-medium text-slate-700 mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="work-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@medicalgroup.com"
                        className="w-full min-h-[48px] px-4 rounded-xl border border-slate-200 bg-slate-50 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone-number" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone-number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full min-h-[48px] px-4 rounded-xl border border-slate-200 bg-slate-50 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full min-h-[48px] mt-2 px-6 py-3 rounded-xl text-base font-bold text-[#0A192F] bg-[#FFB703] hover:bg-yellow-400 transition-all flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          <span>Show Me How It Works</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-slate-400 pt-1">
                      By clicking above, you agree to our confidential demo terms. No spam ever.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
