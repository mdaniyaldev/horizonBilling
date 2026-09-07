"use client";

import { useState } from "react";
import { Menu, X, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "https://www.billinghorizon.com/services/" },
    { name: "Specialties", href: "https://www.billinghorizon.com/specialties/" },
    { name: "Technology", href: "https://www.billinghorizon.com/technology/" },
    { name: "EHR Integrations", href: "https://www.billinghorizon.com/ehr-integrations/" },
    { name: "Compliance", href: "https://www.billinghorizon.com/compliance/" },
    { name: "About Us", href: "https://www.billinghorizon.com/about/" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-primary/95 backdrop-blur-md border-b border-brand-light/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="https://www.billinghorizon.com/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-light rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-medium to-brand-light flex items-center justify-center text-neutral-white shadow-lg group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-neutral-white group-hover:text-brand-light transition-colors">
                Billing Horizon
              </span>
              <span className="text-[10px] text-brand-light uppercase tracking-widest font-semibold">
                Medical Billing & RCM
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-white/90 hover:text-white transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-light hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.billinghorizon.com/contact/"
              className="inline-flex items-center justify-center min-h-[48px] px-5 py-2.5 rounded-xl text-sm font-semibold text-neutral-white border border-brand-light/40 hover:bg-brand-secondary hover:border-brand-light transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Talk With a Specialist
            </a>
            <a
              href="https://www.billinghorizon.com/demo/"
              className="inline-flex items-center justify-center min-h-[48px] px-5 py-2.5 rounded-xl text-sm font-semibold text-brand-primary bg-neutral-white hover:bg-neutral-light shadow-md hover:shadow-lg transition-all"
            >
              Schedule a Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden min-w-[48px] min-h-[48px] p-3 rounded-xl text-neutral-white hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-light flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] bg-charcoal-deep border-b border-brand-light/30 shadow-2xl p-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[48px] flex items-center px-4 rounded-lg text-base font-medium text-neutral-white hover:bg-brand-secondary hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-brand-light/20 flex flex-col gap-3">
              <a
                href="https://www.billinghorizon.com/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] flex items-center justify-center px-4 rounded-xl text-base font-semibold text-neutral-white bg-brand-secondary hover:bg-brand-medium transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk With a Specialist
              </a>
              <a
                href="https://www.billinghorizon.com/demo/"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] flex items-center justify-center px-4 rounded-xl text-base font-semibold text-brand-primary bg-neutral-white hover:bg-neutral-light transition-colors"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
