
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
