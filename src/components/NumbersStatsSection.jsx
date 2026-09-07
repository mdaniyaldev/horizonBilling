import { TrendingUp, FileText, DollarSign, Stethoscope } from "lucide-react";

export default function NumbersStatsSection() {
  const stats = [
    {
      stat: "97.5%",
      label: "First Pass Claim Rate",
      subtext: "Clean claims accepted on initial submission",
      icon: TrendingUp,
    },
    {
      stat: "1.4M+",
      label: "Claims Processed Annually",
      subtext: "High-volume billing operational throughput",
      icon: FileText,
    },
    {
      stat: "96%+",
      label: "Net Collection Rate",
      subtext: "Maximizing allowable payer reimbursements",
      icon: DollarSign,
    },
    {
      stat: "60+",
      label: "Medical Specialties",
      subtext: "Tailored rules & billing workflows",
      icon: Stethoscope,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#304F78] text-neutral-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider border border-white/20">
            MEASURABLE PERFORMANCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-white mt-1 mb-4">
            Billing Horizon by the Numbers
          </h2>
          <p className="text-base text-neutral-light/90">
            Our technology-driven revenue cycle framework delivers consistent, data-backed financial outcomes for medical groups across the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-brand-secondary/60 border border-brand-light/30 rounded-2xl p-6 text-center hover:bg-brand-secondary/80 transition-all duration-300 shadow-xl flex flex-col items-center justify-between group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light/20 text-brand-light group-hover:scale-110 group-hover:text-white transition-all flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-white mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-light">
                    {item.stat}
                  </div>
                  <h3 className="text-base font-bold text-neutral-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-neutral-light/80">
                    {item.subtext}
                  </p>
                </div>

                <div className="w-12 h-1 bg-brand-light/40 rounded-full mt-6 group-hover:w-20 transition-all" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
