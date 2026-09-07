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
    "Cardiology", "Orthopedics", "Dermatology", "Gastroenterology",
    "Neurology", "Pediatric Medicine", "OB/GYN", "Internal Medicine",
    "Pulmonology", "Urology", "Ophthalmology", "Pain Management",
    "Physical Therapy", "Podiatry", "Radiology", "Anesthesiology",
    "General Surgery", "Rheumatology",
  ];

  const currentSpecialty = specialtiesData[activeTab];
  const Icon = currentSpecialty.icon;

  const tabs = [
    { key: "behavioral-health", label: "Behavioral Health", icon: HeartPulse },
    { key: "oncology", label: "Oncology & Infusion", icon: Activity },
    { key: "urgent-care", label: "Urgent Care", icon: ShieldAlert },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/20 uppercase tracking-wide inline-block mb-3">
            TAILORED WORKFLOWS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-1 mb-4">
            Specialized Medical Billing Workflows
          </h2>
          <p className="text-base text-slate-600">
            Every medical specialty carries unique billing codes, payer nuances, and modifier rules. We build specialty-specific rules engine profiles for your exact practice.
          </p>
        </div>

        {/* Interactive Horizontal Scroll Tabs */}
        <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:overflow-x-visible justify-start sm:justify-center gap-3 mb-8 pb-2 sm:pb-0 scrollbar-hide">
          {tabs.map(({ key, label, icon: TabIcon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`min-h-[48px] px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === key
                  ? "bg-[#00A896] text-white shadow-lg shadow-[#00A896]/25"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#00A896] hover:text-[#00A896]"
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Showcase Box */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-10 shadow-md hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#00A896] text-white flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F]">
                  {currentSpecialty.title}
                </h3>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                {currentSpecialty.description}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentSpecialty.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#00A896] mr-2 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
              <a
                href={currentSpecialty.link}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#00A896] hover:bg-[#00C49F] transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-center"
              >
                <span>View {currentSpecialty.title} Details</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

          </div>
        </div>

        {/* 60+ Specialties Grid */}
        <div className="bg-[#0A192F]/5 border border-[#00A896]/20 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#00A896]" />
              <h3 className="text-lg font-bold text-[#0A192F]">
                Supporting Over 60+ Medical Specialties Across the U.S.
              </h3>
            </div>
            <a
              href="https://www.billinghorizon.com/specialties/"
              className="text-xs font-bold text-[#00A896] hover:text-[#0A192F] underline"
            >
              Browse All 60+ Specialty Guides →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {otherSpecialties.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="bg-white p-3 rounded-xl border border-slate-200 text-center text-xs font-semibold text-slate-600 hover:border-[#00A896] hover:text-[#00A896] transition-all shadow-sm cursor-default"
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
