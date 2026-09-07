import { Star, Quote, Building, UserCheck } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Billing Horizon overhauled our entire A/R backlog within 60 days. Their AI claim validation stopped code rejections before they even reached Medicare.",
      author: "Karen Mitchell",
      role: "Practice Administrator",
      practice: "Apex Multi-Specialty Clinic",
      specialty: "Internal Medicine & Specialty Care",
    },
    {
      quote:
        "Infusion drug coding and J-code wastage used to be our biggest financial leak. Billing Horizon brought absolute precision to our oncology billing operations.",
      author: "Dr. Michael Reynolds",
      role: "Managing Partner",
      practice: "Summit Medical Group",
      specialty: "Oncology & Hematology",
    },
    {
      quote:
        "Transitioning from our old billing service took under 2 weeks. The visibility into our daily ERA postings and claim denial appeals is unmatched.",
      author: "Lisa Anderson",
      role: "Chief Financial Officer",
      practice: "Horizon Behavioral Health",
      specialty: "Behavioral Health & Psychiatry",
    },
    {
      quote:
        "Our Days in A/R dropped from 48 days down to 23 days. The dedicated account managers answer our questions instantly via secure portal.",
      author: "Robert Thompson",
      role: "Executive Director",
      practice: "Valley Urgent Care Centers",
      specialty: "Urgent Care & Emergency Medicine",
    },
    {
      quote:
        "First-pass clean claim submission went from 84% to over 97.5%. That increase alone added six figures to our annual practice bottom line.",
      author: "Dr. Sarah Williams",
      role: "Lead Physician",
      practice: "Coastal Cardiology Partners",
      specialty: "Cardiology",
    },
    {
      quote:
        "They plugged directly into our existing eClinicalWorks EHR without interrupting our clinical staff. Highly professional team and technology.",
      author: "James Carter",
      role: "Operations Director",
      practice: "Tri-County Health Network",
      specialty: "Orthopedics & Surgery",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-slate-200 text-[#203858] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            CLIENT REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary mt-1 mb-4">
            Trusted by Practice Leaders Nationwide
          </h2>
          <p className="text-base text-charcoal-primary">
            Read how healthcare administrators and physician leaders transformed their revenue cycle performance with Billing Horizon.
          </p>
        </div>

        {/* 6 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-neutral-white border border-neutral-light rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-charcoal-primary leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-light/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary text-neutral-white flex items-center justify-center font-bold text-sm shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-primary">{t.author}</h3>
                  <p className="text-xs text-brand-secondary font-medium">{t.role} — {t.practice}</p>
                  <span className="text-[11px] text-neutral-medium">{t.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
