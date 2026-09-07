import { Receipt, FileCode2, Award, LineChart, ArrowUpRight } from "lucide-react";

export default function ServicesScopeSection() {
  const services = [
    {
      title: "Medical Billing",
      subtitle: "End-to-End Claim Management",
      icon: Receipt,
      href: "https://www.billinghorizon.com/services/medical-billing/",
      highlights: [
        "Patient demographic & insurance verification",
        "Charge entry & claim batch creation",
        "Clearinghouse rejection mitigation",
        "ERA/EOB posting & payment reconciliation",
      ],
    },
    {
      title: "Medical Coding",
      subtitle: "Certified AAPC/AHIMA Expertise",
      icon: FileCode2,
      href: "https://www.billinghorizon.com/services/medical-coding/",
      highlights: [
        "ICD-10-CM, CPT, and HCPCS Level II coding",
        "CCI edit checks & modifier optimization",
        "Clinical documentation improvement (CDI)",
        "Specialty-specific chart audit defense",
      ],
    },
    {
      title: "Credentialing & Enrollment",
      subtitle: "Payer Contracting & Network Setup",
      icon: Award,
      href: "https://www.billinghorizon.com/services/credentialing/",
      highlights: [
        "CAQH profile setup and maintenance",
        "Commercial & government payer applications",
        "Re-credentialing tracking & license renewal",
        "Provider group roster management",
      ],
    },
    {
      title: "Revenue Cycle Management (RCM)",
      subtitle: "Full Financial Optimization",
      icon: LineChart,
      href: "https://www.billinghorizon.com/services/rcm/",
      highlights: [
        "Comprehensive A/R aging analysis (>90 days)",
        "Denial management & formal appeal processing",
        "Patient billing & portal engagement",
        "Custom executive financial reporting",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F0F8FF] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/20 uppercase tracking-wide inline-block mb-3">
            OUR SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-1 mb-4">
            Full Scope Revenue Cycle Services
          </h2>
          <p className="text-base text-slate-600">
            From patient intake to final claim resolution, our modular revenue cycle management services integrate seamlessly into your current medical practice operations.
          </p>
        </div>

        {/* 2×2 Elevated white cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-[#00C49F] rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#00A896]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00A896] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold text-[#00A896] bg-[#00A896]/10 px-3 py-1 rounded-full border border-[#00A896]/20">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] mb-3">
                    {service.title}
                  </h3>

                  <ul className="space-y-2.5 mb-6">
                    {service.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] mt-2 mr-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={service.href}
                    className="inline-flex items-center justify-center min-h-[48px] px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#00A896] hover:bg-[#00C49F] transition-all w-full sm:w-auto shadow-md group-hover:shadow-lg"
                  >
                    <span>Explore More</span>
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
