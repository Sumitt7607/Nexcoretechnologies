import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechStackSection from "@/components/TechStackSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import AutomationSection from "@/components/AutomationSection";
import AIFutureSection from "@/components/AIFutureSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <PortfolioSection />
      <TechStackSection />
      <IndustriesSection />
      <ProcessSection />
      <AutomationSection />
      <AIFutureSection />
      <PricingSection />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
