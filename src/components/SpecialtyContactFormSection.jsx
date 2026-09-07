"use client";

import { useState } from "react";
import { Send, CheckCircle2, Stethoscope } from "lucide-react";

export default function SpecialtyContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "Behavioral Health",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const specialtiesList = [
    "Behavioral Health",
    "Oncology & Infusion",
    "Urgent Care / ER",
    "Cardiology",
    "Orthopedics",
    "Dermatology",
    "Gastroenterology",
    "Pediatrics",
    "OB/GYN",
    "Primary Care / Internal Medicine",
    "Other Specialty",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 bg-[#0A192F] border-t border-[#00A896]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[#0A192F] border border-[#00A896]/30 rounded-3xl p-6 sm:p-10 shadow-[0_0_30px_rgba(0,168,150,0.2)] text-white relative overflow-hidden">
          {/* Glow */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00A896]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
            <span className="bg-[#00A896]/10 text-[#00C49F] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/30 uppercase tracking-wide inline-block mb-3">
              SPECIALTY CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
              Discuss Your Specialty Requirements
            </h2>
            <p className="text-sm text-slate-300">
              Connect directly with a revenue manager who understands your exact clinical coding, modifier rules, and payer fee schedules.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4 relative z-10">
              <div className="w-16 h-16 bg-[#00A896]/20 text-[#00C49F] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#00C49F]">Consultation Request Submitted!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our specialty billing lead for <strong className="text-white">{formData.specialty}</strong> will review your details and reach out to <strong className="text-white">{formData.email}</strong> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", specialty: "Behavioral Health" });
                }}
                className="mt-4 text-xs font-semibold text-[#00A896] underline hover:text-[#00C49F]"
              >
                Submit another specialty request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label htmlFor="spec-name" className="block text-sm font-medium text-slate-300 mb-1">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="spec-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Robert Miller"
                    className="w-full min-h-[48px] px-4 rounded-xl border border-white/20 bg-white/10 text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="spec-email" className="block text-sm font-medium text-slate-300 mb-1">
                    Work Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="spec-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="r.miller@specialtyclinic.com"
                    className="w-full min-h-[48px] px-4 rounded-xl border border-white/20 bg-white/10 text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="spec-phone" className="block text-sm font-medium text-slate-300 mb-1">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="spec-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="w-full min-h-[48px] px-4 rounded-xl border border-white/20 bg-white/10 text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="spec-select" className="block text-sm font-medium text-slate-300 mb-1">
                    Medical Specialty <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="spec-select"
                    required
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full min-h-[48px] px-4 rounded-xl border border-white/20 bg-white/10 text-base text-white focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent transition-all"
                  >
                    {specialtiesList.map((item) => (
                      <option key={item} value={item} className="bg-[#0A192F] text-white">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] px-6 py-3.5 rounded-xl text-base font-bold text-[#0A192F] bg-[#FFB703] hover:bg-yellow-400 transition-all flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Stethoscope className="w-5 h-5 mr-2" />
                      <span>Discuss My Specialty</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-center text-slate-400">
                We safeguard your practice details under strict NDA and HIPAA non-disclosure agreements.
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
