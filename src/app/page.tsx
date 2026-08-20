import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatIsRIOSSection } from "@/components/WhatIsRIOSSection";
import { VisionMissionSection } from "@/components/VisionMissionSection";
import { ProblemSection } from "@/components/ProblemSection";
import { RIOSSystemSection } from "@/components/RIOSSystemSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { IntelligenceLayerSection } from "@/components/IntelligenceLayerSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { CapabilitySection } from "@/components/CapabilitySection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { PaymentSuccessToast } from "@/components/PaymentSuccessToast";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsRIOSSection />
        <VisionMissionSection />
        <ProblemSection />
        <RIOSSystemSection />
        <HowItWorksSection />
        <IntelligenceLayerSection />
        <CaseStudySection />
        <CapabilitySection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyCTA />
      <Suspense fallback={null}>
        <PaymentSuccessToast />
      </Suspense>
    </>
  );
}
