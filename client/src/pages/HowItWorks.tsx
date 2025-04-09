import React from 'react';
import NavBar from "@/components/NavBar";
import HowItWorksSection from "@/components/HowItWorksSection";
import FooterSection from "@/components/FooterSection";

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <HowItWorksSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default HowItWorks;