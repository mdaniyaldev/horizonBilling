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
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#0A192F] to-[#00A896] relative overflow-hidden border-t border-[#00A896]/30">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-white/10 text-white text-xs font-extrabold px-3 py-1 rounded-full border border-white/20 uppercase tracking-wide inline-block mb-3">
            MEASURABLE PERFORMANCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1 mb-4">
            Billing Horizon by the Numbers
          </h2>
          <p className="text-base text-white/80">
            Our technology-driven revenue cycle framework delivers consistent, data-backed financial outcomes for medical groups across the United States.
          </p>
        </div>

        {/* Stats strip — massive numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center px-8 py-8 group ${idx < stats.length - 1 ? "lg:border-r border-white/20" : ""} ${idx < 2 ? "sm:border-b lg:border-b-0 border-white/20" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                {/* Massive stat number */}
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-2 leading-none">
                  {item.stat}
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-white/70">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
