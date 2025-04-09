import React from 'react';
import NavBar from "@/components/NavBar";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <FeaturesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Features;