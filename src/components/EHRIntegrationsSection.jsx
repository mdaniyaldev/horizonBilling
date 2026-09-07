import { Database, RefreshCw, Lock, CheckCircle2, ArrowRight } from "lucide-react";

export default function EHRIntegrationsSection() {
  const ehrPlatforms = [
    {
      name: "eClinicalWorks",
      desc: "Bi-directional demographic sync, real-time charge capture, and automated claim status mapping.",
    },
    {
      name: "Epic Systems",
      desc: "Enterprise Resolute Billing integration, MyChart patient billing coordination, and Cadence scheduling sync.",
    },
    {
      name: "NextGen Healthcare",
      desc: "Custom EDI clearinghouse routing, EHR clinical documentation audit feeds, and A/R ledger reconciliation.",
    },
    {
      name: "athenahealth",
      desc: "athenaCollector API integration, automated eligibility polling, and seamless credit card posting.",
    },
    {
      name: "Kareo / Tebra",
      desc: "Independent practice workflow sync, clinical note code extraction, and patient portal statements.",
    },
    {
      name: "AdvancedMD",
      desc: "PM schedule sync, electronic remits (ERA 835) auto-posting, and custom denial code mapping.",
    },
    {
      name: "DrChrono",
      desc: "Mobile EHR billing sync, custom clinical templates coding integration, and live patient eligibility.",
    },
    {
      name: "ModMed (EMA)",
      desc: "Specialty-tailored EHR integration for Dermatology, Ophthalmology, Orthopedics, and Plastic Surgery.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-slate-100 text-[#203858] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            SYSTEM INTEGRATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mt-1 mb-4">
            EHR & EMR Software Compatibility
          </h2>
          <p className="text-base text-charcoal-primary">
            No need to switch software. Billing Horizon connects directly into your existing EHR platform via secure APIs, HL7 feeds, or cloud clearinghouse bridges.
          </p>
        </div>

        {/* Featured EHR Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ehrPlatforms.slice(0, 4).map((ehr, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-neutral-light hover:border-brand-medium rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-lg">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary">{ehr.name}</h3>
                </div>
                <p className="text-xs text-neutral-medium leading-relaxed">{ehr.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-light/60 flex items-center text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                <span>Native API Integration</span>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous EMR Logo Slider / Badges */}
        <div className="bg-brand-primary/5 border border-brand-light/30 rounded-2xl p-6 mb-12">
          <p className="text-center text-xs font-semibold text-neutral-medium uppercase tracking-widest mb-4">
            Directly Compatible Platforms & EHR Software Suites
          </p>

          <div className="relative w-full overflow-hidden">
            <div className="flex space-x-6 animate-marquee whitespace-nowrap">
              {[...ehrPlatforms, ...ehrPlatforms].map((platform, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-neutral-white text-brand-primary font-bold text-sm shadow-sm border border-neutral-light"
                >
                  <RefreshCw className="w-4 h-4 mr-2 text-brand-secondary" />
                  {platform.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Callout */}
        <div className="bg-brand-primary text-neutral-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-neutral-white">Using a custom or legacy EMR system?</h3>
            <p className="text-sm text-neutral-light">
              Our integration engineers configure secure HL7/FHIR interfaces and VPN tunnels for proprietary clinical software.
            </p>
          </div>
          <a
            href="https://www.billinghorizon.com/ehr-integrations/"
            className="min-h-[48px] px-6 py-3 rounded-xl text-sm font-bold text-brand-primary bg-neutral-white hover:bg-neutral-light transition-all shrink-0 flex items-center justify-center"
          >
            <span>Explore Compatibility</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
}
