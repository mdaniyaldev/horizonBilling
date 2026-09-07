"use client";

import { useState } from "react";
import { ShieldCheck, ChevronDown, Lock, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-gray-50 border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary bg-brand-light/20 px-3 py-1 rounded-full border border-brand-light/30">
            Uncompromising Integrity
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            Regulatory & Compliance Standards
          </h2>
          <p className="text-base text-charcoal-primary">
            Healthcare compliance is not an afterthought. We embed rigid security frameworks and federal regulatory checks directly into our daily claim execution workflow.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-white border border-neutral-light rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[56px] px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-brand-primary">
                        {item.title}
                      </h3>
                      <span className="inline-block text-[11px] font-semibold text-brand-secondary">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-brand-primary">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-neutral-light/50 text-sm text-charcoal-primary leading-relaxed bg-gray-50/50">
                    <p className="mb-4">{item.content}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200 w-fit">
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
            className="text-xs font-bold text-brand-primary hover:text-brand-secondary underline inline-flex items-center gap-1"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Read Complete Compliance Architecture Documentation →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
