"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Shield, Clock, Send } from "lucide-react";

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
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl text-neutral-white relative overflow-hidden border border-brand-light/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-light bg-brand-medium/50 px-3.5 py-1.5 rounded-full border border-brand-light/30">
                Interactive Demonstration
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-white leading-tight">
                See Technology in Practice
              </h2>
              <p className="text-base text-neutral-light/90 leading-relaxed">
                Schedule a personalized 15-minute walkthrough of our medical billing platform. Discover how automated payer rule validation and intelligent claim tracking can transform your practice's monthly collections.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-neutral-light">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span>Real-time claim scrubbing demonstration tailored to your EHR</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-light">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span>Quick 15-minute operational audit with zero obligation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-light">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span>100% HIPAA compliant data sharing protocols</span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-neutral-white text-charcoal-primary rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-light">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-primary">Demo Request Received!</h3>
                    <p className="text-sm text-neutral-medium max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. A Billing Horizon revenue cycle specialist will contact you shortly at <strong>{formData.email}</strong> to coordinate your live session.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "" });
                      }}
                      className="mt-4 text-xs font-semibold text-brand-secondary underline hover:text-brand-primary"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-brand-primary mb-2">
                      Schedule Your Practice Review
                    </h3>
                    
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-medium text-charcoal-primary mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Sarah Jenkins"
                        className="w-full min-h-[48px] px-4 rounded-xl border border-neutral-light bg-neutral-white text-base text-charcoal-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="work-email" className="block text-sm font-medium text-charcoal-primary mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="work-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@medicalgroup.com"
                        className="w-full min-h-[48px] px-4 rounded-xl border border-neutral-light bg-neutral-white text-base text-charcoal-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone-number" className="block text-sm font-medium text-charcoal-primary mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone-number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full min-h-[48px] px-4 rounded-xl border border-neutral-light bg-neutral-white text-base text-charcoal-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full min-h-[48px] mt-2 px-6 py-3 rounded-xl text-base font-bold text-neutral-white bg-brand-primary hover:bg-brand-secondary transition-all flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-75"
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

                    <p className="text-xs text-center text-neutral-medium pt-1">
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
