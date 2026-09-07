import HeroSection from "@/components/HeroSection";
import BuiltAroundRCMSection from "@/components/BuiltAroundRCMSection";
import ServicesScopeSection from "@/components/ServicesScopeSection";
import AITechnologySection from "@/components/AITechnologySection";
import TechInPracticeFormSection from "@/components/TechInPracticeFormSection";
import NumbersStatsSection from "@/components/NumbersStatsSection";
import PayerKnowledgeSection from "@/components/PayerKnowledgeSection";
import PayerMixCTASection from "@/components/PayerMixCTASection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import SpecialtyContactFormSection from "@/components/SpecialtyContactFormSection";
import EHRIntegrationsSection from "@/components/EHRIntegrationsSection";
import ComplianceAccordionsSection from "@/components/ComplianceAccordionsSection";
import RCMVisibilityGridSection from "@/components/RCMVisibilityGridSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OnboardingProcessSection from "@/components/OnboardingProcessSection";
import FinalCTASection from "@/components/FinalCTASection";

export const metadata = {
  title: "Billing Horizon | AI Enabled Medical Billing & Revenue Cycle Operations",
  description:
    "Billing Horizon pairs experienced medical billing professionals with AI technology to optimize revenue cycle management, elevate clean claim rates, and accelerate cash flow.",
  keywords: [
    "Medical Billing",
    "Revenue Cycle Management",
    "RCM Services",
    "Medical Coding",
    "Credentialing",
    "EHR Integration",
    "HIPAA Compliant Billing",
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Built Around Your Revenue Cycle */}
      <BuiltAroundRCMSection />

      {/* 3. Full Scope Revenue Cycle Services */}
      <ServicesScopeSection />

      {/* 4. AI Technology Inside Revenue Cycle */}
      <AITechnologySection />

      {/* 5. See Technology in Practice (Demo Form) */}
      <TechInPracticeFormSection />

      {/* 6. Billing Horizon by the Numbers */}
      <NumbersStatsSection />

      {/* 7. Payer Knowledge & Marquee */}
      <PayerKnowledgeSection />

      {/* 8. Your Payer Mix Matters CTA */}
      <PayerMixCTASection />

      {/* 9. Specialties Section */}
      <SpecialtiesSection />

      {/* 10. Specialty Contact Form */}
      <SpecialtyContactFormSection />

      {/* 11. EHR/EMR Integrations & Logo Slider */}
      <EHRIntegrationsSection />

      {/* 12. Regulatory & Compliance Standards */}
      <ComplianceAccordionsSection />

      {/* 13. Revenue Cycle Visibility Grid */}
      <RCMVisibilityGridSection />

      {/* 14. Client Testimonials */}
      <TestimonialsSection />

      {/* 15. 4-Step Onboarding Process */}
      <OnboardingProcessSection />

      {/* 16. Final CTA */}
      <FinalCTASection />
    </div>
  );
}
