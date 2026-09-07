import { Database, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-[#FFFFFF] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/20 uppercase tracking-wide inline-block mb-3">
            SYSTEM INTEGRATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] mt-1 mb-4">
            EHR & EMR Software Compatibility
          </h2>
          <p className="text-base text-slate-600">
            No need to switch software. Billing Horizon connects directly into your existing EHR platform via secure APIs, HL7 feeds, or cloud clearinghouse bridges.
          </p>
        </div>

        {/* Featured EHR Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ehrPlatforms.slice(0, 4).map((ehr, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-[#00A896] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A896]/10 text-[#00A896] flex items-center justify-center group-hover:bg-[#00A896] group-hover:text-white transition-colors">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0A192F]">{ehr.name}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{ehr.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#00A896]">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                <span>Native API Integration</span>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous EMR Logo Slider */}
        <div className="bg-[#F0F8FF] border border-[#00A896]/20 rounded-2xl p-6 mb-12">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Directly Compatible Platforms & EHR Software Suites
          </p>

          <div className="relative w-full overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#F0F8FF] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#F0F8FF] to-transparent z-10" />
            <div className="flex space-x-6 animate-marquee whitespace-nowrap">
              {[...ehrPlatforms, ...ehrPlatforms].map((platform, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-white text-[#0A192F] font-bold text-sm shadow-sm border border-[#00A896]/20 hover:border-[#00A896] transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2 text-[#00A896]" />
                  {platform.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Callout — navy with amber CTA */}
        <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Using a custom or legacy EMR system?</h3>
            <p className="text-sm text-slate-300">
              Our integration engineers configure secure HL7/FHIR interfaces and VPN tunnels for proprietary clinical software.
            </p>
          </div>
          <a
            href="https://www.billinghorizon.com/ehr-integrations/"
            className="min-h-[48px] px-6 py-3 rounded-xl text-sm font-bold text-[#0A192F] bg-[#FFB703] hover:bg-yellow-400 transition-all shrink-0 flex items-center justify-center shadow-md"
          >
            <span>Explore Compatibility</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
}
