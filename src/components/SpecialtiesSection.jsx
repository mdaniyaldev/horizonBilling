"use client";

import { useState } from "react";
import { Stethoscope, HeartPulse, ShieldAlert, Activity, CheckCircle2, ArrowRight } from "lucide-react";

export default function SpecialtiesSection() {
  const [activeTab, setActiveTab] = useState("behavioral-health");

  const specialtiesData = {
    "behavioral-health": {
      title: "Behavioral Health & Psychiatry",
      icon: HeartPulse,
      description:
        "Specialized billing rules for mental health practices, substance use disorder (SUD) facilities, PHP/IOP levels of care, and timed CPT psychotherapy codes.",
      points: [
        "Concurrent review & pre-authorization tracking for IOP/PHP",
        "DSM-5 to ICD-10 crosswalk accuracy and medical necessity support",
        "Telehealth parity billing rules across state lines",
        "Incident-to billing compliance for LCSWs, LPCs, and Nurse Practitioners",
      ],
      link: "https://www.billinghorizon.com/specialties/behavioral-health/",
    },
    oncology: {
      title: "Oncology & Infusion Therapy",
      icon: Activity,
      description:
        "High-dollar chemotherapy drug coding, J-code verification, biosimilar substitution rules, and complex infusion administration hierarchy management.",
      points: [
        "Precise ASP (Average Sales Price) drug wastage & JW/JZ modifier tracking",
        "Prior authorization defense for expensive biologic treatments",
        "Clinical trial billing and secondary payer coordination",
        "Infusion initial vs sequential vs concurrent time-based coding",
      ],
      link: "https://www.billinghorizon.com/specialties/oncology/",
    },
    "urgent-care": {
      title: "Urgent Care & Emergency Services",
      icon: ShieldAlert,
      description:
        "High-volume, fast-turnaround billing with complex E/M coding, minor procedure bundles, occupational medicine billing, and worker's compensation processing.",
      points: [
        "S9088 vs E/M coding optimization for urgent care centers",
        "Rapid demographic & real-time copay collection protocols",
        "Occupational health & employer-paid portal invoicing",
        "Fracture care, laceration repair, and point-of-care lab bundling rules",
      ],
      link: "https://www.billinghorizon.com/specialties/urgent-care/",
    },
  };

  const otherSpecialties = [
    "Cardiology",
    "Orthopedics",
    "Dermatology",
    "Gastroenterology",
    "Neurology",
    "Pediatric Medicine",
    "OB/GYN",
    "Internal Medicine",
    "Pulmonology",
    "Urology",
    "Ophthalmology",
    "Pain Management",
    "Physical Therapy",
    "Podiatry",
    "Radiology",
    "Anesthesiology",
    "General Surgery",
    "Rheumatology",
  ];

  const currentSpecialty = specialtiesData[activeTab];
  const Icon = currentSpecialty.icon;

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-slate-200 text-[#203858] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            TAILORED WORKFLOWS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mt-1 mb-4">
            Specialized Medical Billing Workflows
          </h2>
          <p className="text-base text-charcoal-primary">
            Every medical specialty carries unique billing codes, payer nuances, and modifier rules. We build specialty-specific rules engine profiles for your exact practice.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("behavioral-health")}
            className={`min-h-[48px] px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === "behavioral-health"
                ? "bg-[#203858] text-neutral-white shadow-lg"
                : "bg-white border border-[#D9D9D9] text-charcoal-primary hover:bg-slate-100"
            }`}
          >
            <HeartPulse className="w-4 h-4" />
            <span>Behavioral Health</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("oncology")}
            className={`min-h-[48px] px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === "oncology"
                ? "bg-[#203858] text-neutral-white shadow-lg"
                : "bg-white border border-[#D9D9D9] text-charcoal-primary hover:bg-slate-100"
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Oncology & Infusion</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("urgent-care")}
            className={`min-h-[48px] px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === "urgent-care"
                ? "bg-[#203858] text-neutral-white shadow-lg"
                : "bg-white border border-[#D9D9D9] text-charcoal-primary hover:bg-slate-100"
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Urgent Care</span>
          </button>
        </div>

        {/* Active Tab Showcase Box */}
        <div className="bg-white border border-[#D9D9D9] rounded-3xl p-6 sm:p-10 mb-16 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-neutral-white flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-primary">
                  {currentSpecialty.title}
                </h3>
              </div>

              <p className="text-base text-charcoal-primary leading-relaxed">
                {currentSpecialty.description}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentSpecialty.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start text-sm text-charcoal-primary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
              <a
                href={currentSpecialty.link}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 rounded-xl text-sm font-bold text-neutral-white bg-brand-primary hover:bg-brand-secondary transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-center"
              >
                <span>View {currentSpecialty.title} Details</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

          </div>
        </div>

        {/* 60+ Specialties Grid Overview */}
        <div className="bg-brand-primary/5 border border-brand-light/40 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-brand-primary" />
              <h3 className="text-lg font-bold text-brand-primary">
                Supporting Over 60+ Medical Specialties Across the U.S.
              </h3>
            </div>
            <a
              href="https://www.billinghorizon.com/specialties/"
              className="text-xs font-bold text-brand-secondary hover:text-brand-primary underline"
            >
              Browse All 60+ Specialty Guides →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {otherSpecialties.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="bg-neutral-white p-3 rounded-xl border border-neutral-light text-center text-xs font-semibold text-charcoal-primary hover:border-brand-medium hover:text-brand-primary transition-all shadow-sm"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
