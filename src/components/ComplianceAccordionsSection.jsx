"use client";

import { useState } from "react";
import { ShieldCheck, Lock, CheckCircle2, Plus, Minus } from "lucide-react";

export default function ComplianceAccordionsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "HIPAA & PHI Security Standards",
      badge: "Strict Data Protection",
      content:
        "Full Business Associate Agreement (BAA) execution, end-to-end 256-bit AES encryption for all data in transit and at rest, role-based access control (RBAC), SOC 2 Type II certified data centers, and continuous automated vulnerability scanning to ensure total compliance with HHS privacy rules.",
    },
    {
      title: "No Surprises Act Compliance & GFE Workflow",
      badge: "Federal Price Transparency",
      content:
        "Automated Good Faith Estimate (GFE) generation protocols for uninsured/self-pay patients, out-of-network provider dispute resolution processing, independent dispute resolution (IDR) portal submissions, and strict adherence to federal balance billing prohibitions.",
    },
    {
      title: "CMS & Commercial Payer Regulatory Tracking",
      badge: "Updated LCD / NCD Protocols",
      content:
        "Real-time monitoring of Centers for Medicare & Medicaid Services (CMS) policy transmittals, annual CPT/HCPCS code set revisions, Evaluation and Management (E/M) guideline updates, local coverage determinations (LCDs), and state-specific Medicaid billing mandates.",
    },
    {
      title: "Internal Review & Anti-Fraud Auditing",
      badge: "Proactive Risk Mitigation",
      content:
        "Monthly internal quality assurance audits, coding risk sampling, OIG exclusion list screening for all billing personnel, anti-kickback compliance policies, and automated detection of potential over-coding or under-documentation anomalies.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F0F8FF] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/20 uppercase tracking-wide inline-block mb-3">
            INTEGRITY & COMPLIANCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-1 mb-4">
            Regulatory & Compliance Standards
          </h2>
          <p className="text-base text-slate-600">
            Healthcare compliance is not an afterthought. We embed rigid security frameworks and federal regulatory checks directly into our daily claim execution workflow.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-200 ${isOpen ? "border-[#00A896]" : "border-slate-200"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[64px] px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:bg-slate-50 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#00A896] text-white" : "bg-[#00A896]/10 text-[#00A896]"}`}>
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0A192F]">
                        {item.title}
                      </h3>
                      <span className={`inline-block text-[11px] font-semibold ${isOpen ? "text-[#00A896]" : "text-slate-400"}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Plus/Minus icon */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#00A896] text-white" : "bg-slate-100 text-slate-500"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#00A896]/20 text-sm text-slate-600 leading-relaxed bg-white">
                    <p className="mb-4">{item.content}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#00A896] bg-[#00A896]/10 px-3 py-2 rounded-lg border border-[#00A896]/20 w-fit">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verified Active Protocol in Billing Horizon System</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-10">
          <a
            href="https://www.billinghorizon.com/compliance/"
            className="text-xs font-bold text-[#00A896] hover:text-[#0A192F] underline inline-flex items-center gap-1"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Read Complete Compliance Architecture Documentation →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
