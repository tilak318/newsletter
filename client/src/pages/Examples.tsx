import React from 'react';
import NavBar from "@/components/NavBar";
import ExamplesSection from "@/components/ExamplesSection";
import FooterSection from "@/components/FooterSection";

const Examples = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <ExamplesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Examples;