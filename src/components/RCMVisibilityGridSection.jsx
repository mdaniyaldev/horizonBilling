import { AlertCircle, FileX, Clock, Wallet, CheckCircle2 } from "lucide-react";

export default function RCMVisibilityGridSection() {
  const cards = [
    {
      title: "Claims & Rejections",
      subtitle: "Clearinghouse Front-End Scrubbing",
      icon: FileX,
      color: "border-blue-500",
      description:
        "Instant rejection alerts captured prior to clearinghouse transmission. Track electronic claims batches by clearinghouse response code with immediate error remediation.",
      metric: "97.5% Scrub Rate",
    },
    {
      title: "Denials & Appeals",
      subtitle: "Medical Necessity & Technical Appeals",
      icon: AlertCircle,
      color: "border-red-500",
      description:
        "Categorized denial root cause analysis. Automated workflow assignment for clinical chart review, peer-to-peer scheduling, and timely filing formal appeal packages.",
      metric: "< 3.2% Denial Rate",
    },
    {
      title: "A/R & Aging Analysis",
      subtitle: "30-60-90+ Day Bucket Oversight",
      icon: Clock,
      color: "border-amber-500",
      description:
        "Relentless follow-up on aged accounts receivable. Unresolved claims automatically trigger specialist manual reviews before hitting timely filing limits.",
      metric: "24.2 Days Avg A/R",
    },
    {
      title: "Payments & Collections",
      subtitle: "Patient & Payer Cash Reconciliation",
      icon: Wallet,
      color: "border-emerald-500",
      description:
        "Daily ERA 835 auto-posting, patient statement generation, portal online payments, and direct bank deposit matching for transparent financial control.",
      metric: "96%+ Net Collection",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#203858] text-neutral-white border-t border-b border-[#304F78]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider border border-white/20">
            REVENUE VISIBILITY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-white mt-1 mb-4">
            Complete Revenue Cycle Visibility
          </h2>
          <p className="text-base text-neutral-light/90">
            No black boxes or hidden operational metrics. Practice leaders gain real-time visibility into every single claim state across 4 core operational pillars.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`bg-[#203858] border-t-4 ${card.color} border-x border-b border-[#304F78] rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white bg-white/10 border border-white/20 px-3 py-1 rounded-full shadow-sm">
                      {card.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-white mb-1">
                    {card.title}
                  </h3>
                  <span className="block text-xs font-semibold text-brand-light mb-3">
                    {card.subtitle}
                  </span>

                  <p className="text-sm text-neutral-light/90 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#304F78] flex items-center text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-400" />
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
