import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChatToBuildSection from "@/components/ChatToBuildSection";
import DrawChangesSection from "@/components/DrawChangesSection";
import AllInOnePlatformSection from "@/components/AllInOnePlatformSection";
import DontGetStuckSection from "@/components/DontGetStuckSection";
import HumanSupportSection from "@/components/HumanSupportSection";
import HostingSection from "@/components/HostingSection";
import OwnershipSection from "@/components/OwnershipSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ChatToBuildSection />
        <DrawChangesSection />
        <AllInOnePlatformSection />
        <DontGetStuckSection />
        <HumanSupportSection />
        <HostingSection />
        <OwnershipSection />
        <ComparisonSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;