import { ShieldCheck, ArrowRight, Phone, CheckCircle2, Lock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "Medical Billing", href: "https://www.billinghorizon.com/services/medical-billing/" },
    { name: "Medical Coding", href: "https://www.billinghorizon.com/services/medical-coding/" },
    { name: "Credentialing", href: "https://www.billinghorizon.com/services/credentialing/" },
    { name: "Revenue Cycle Management", href: "https://www.billinghorizon.com/services/rcm/" },
    { name: "A/R Recovery", href: "https://www.billinghorizon.com/services/ar-recovery/" },
  ];

  const specialtyLinks = [
    { name: "Behavioral Health", href: "https://www.billinghorizon.com/specialties/behavioral-health/" },
    { name: "Oncology", href: "https://www.billinghorizon.com/specialties/oncology/" },
    { name: "Urgent Care", href: "https://www.billinghorizon.com/specialties/urgent-care/" },
    { name: "Cardiology", href: "https://www.billinghorizon.com/specialties/cardiology/" },
    { name: "All 60+ Specialties", href: "https://www.billinghorizon.com/specialties/" },
  ];

  const quickLinks = [
    { name: "EHR Integrations", href: "https://www.billinghorizon.com/ehr-integrations/" },
    { name: "Regulatory Compliance", href: "https://www.billinghorizon.com/compliance/" },
    { name: "Payer Coverage", href: "https://www.billinghorizon.com/payer-mix/" },
    { name: "Privacy Policy", href: "https://www.billinghorizon.com/privacy-policy/" },
    { name: "Terms of Service", href: "https://www.billinghorizon.com/terms/" },
  ];

  return (
    <footer className="bg-charcoal-deep text-neutral-white border-t border-brand-medium/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="https://www.billinghorizon.com/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-medium to-brand-light flex items-center justify-center text-white shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-neutral-white">
                  Billing Horizon
                </span>
                <span className="text-[10px] text-brand-light uppercase tracking-widest font-semibold">
                  Medical Billing & RCM
                </span>
              </div>
            </a>
            <p className="text-base text-neutral-light/80 max-w-sm">
              AI-enabled medical billing operations designed to optimize revenue cycle management, improve clean claim rates, and accelerate cash flow for healthcare practices nationwide.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-brand-light bg-brand-primary/50 px-3 py-1.5 rounded-full border border-brand-light/30">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-brand-light bg-brand-primary/50 px-3 py-1.5 rounded-full border border-brand-light/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>97.5% First Pass</span>
              </div>
            </div>
          </div>

          {/* Scope Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-light mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-light/75 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-light mb-4">
              Specialties
            </h3>
            <ul className="space-y-3">
              {specialtyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-light/75 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-light mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-light/75 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-light/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-medium">
          <p>© {currentYear} Billing Horizon. All rights reserved.</p>
          <p className="text-xs text-neutral-light/60">
            https://www.billinghorizon.com/ — Professional Medical Billing & Revenue Cycle Operations
          </p>
        </div>
      </div>
    </footer>
  );
}
