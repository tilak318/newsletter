import React from 'react';
import NavBar from "@/components/NavBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Testimonials = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <TestimonialsSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Testimonials;