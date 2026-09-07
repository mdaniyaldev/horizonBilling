import { AlertCircle, FileX, Clock, Wallet, CheckCircle2 } from "lucide-react";

export default function RCMVisibilityGridSection() {
  const cards = [
    {
      title: "Claims & Rejections",
      subtitle: "Clearinghouse Front-End Scrubbing",
      icon: FileX,
      topBorder: "border-t-[#00C49F]",
      indicatorBg: "bg-[#00C49F]/20 text-[#00C49F] border-[#00C49F]/30",
      description:
        "Instant rejection alerts captured prior to clearinghouse transmission. Track electronic claims batches by clearinghouse response code with immediate error remediation.",
      metric: "97.5% Scrub Rate",
    },
    {
      title: "Denials & Appeals",
      subtitle: "Medical Necessity & Technical Appeals",
      icon: AlertCircle,
      topBorder: "border-t-red-500",
      indicatorBg: "bg-red-500/20 text-red-400 border-red-500/30",
      description:
        "Categorized denial root cause analysis. Automated workflow assignment for clinical chart review, peer-to-peer scheduling, and timely filing formal appeal packages.",
      metric: "< 3.2% Denial Rate",
    },
    {
      title: "A/R & Aging Analysis",
      subtitle: "30-60-90+ Day Bucket Oversight",
      icon: Clock,
      topBorder: "border-t-[#FFB703]",
      indicatorBg: "bg-[#FFB703]/20 text-[#FFB703] border-[#FFB703]/30",
      description:
        "Relentless follow-up on aged accounts receivable. Unresolved claims automatically trigger specialist manual reviews before hitting timely filing limits.",
      metric: "24.2 Days Avg A/R",
    },
    {
      title: "Payments & Collections",
      subtitle: "Patient & Payer Cash Reconciliation",
      icon: Wallet,
      topBorder: "border-t-[#00A896]",
      indicatorBg: "bg-[#00A896]/20 text-[#00C49F] border-[#00A896]/30",
      description:
        "Daily ERA 835 auto-posting, patient statement generation, portal online payments, and direct bank deposit matching for transparent financial control.",
      metric: "96%+ Net Collection",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1E293B] text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-[#00A896]/10 text-[#00C49F] text-xs font-extrabold px-3 py-1 rounded-full border border-[#00A896]/30 uppercase tracking-wide inline-block mb-3">
            REVENUE VISIBILITY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1 mb-4">
            Complete Revenue Cycle Visibility
          </h2>
          <p className="text-base text-slate-300">
            No black boxes or hidden operational metrics. Practice leaders gain real-time visibility into every single claim state across 4 core operational pillars.
          </p>
        </div>

        {/* 4-Card Analytics Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`bg-[#0A192F] border-t-4 ${card.topBorder} border-x border-b border-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00C49F]/10 text-[#00C49F] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Cyan status indicator badge */}
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${card.indicatorBg} shadow-sm`}>
                      {card.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <span className="block text-xs font-semibold text-slate-400 mb-3">
                    {card.subtitle}
                  </span>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700 flex items-center text-xs font-semibold text-[#00C49F]">
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                  <span>Integrated Real-Time Reporting Module</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
