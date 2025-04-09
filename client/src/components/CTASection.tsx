
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  const handleNavigation = () => {
    window.location.href = '/create';
  };

  return (
    <section className="py-20 px-6 md:px-10 bg-hero-pattern text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Newsletters?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
          Join thousands of marketers, content creators, and businesses who have revolutionized their email strategy.
        </p>
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg py-6 px-12"
            onClick={handleNavigation}
          >
            Get Started
          </Button>
        </div>
        <p className="mt-6 text-white/80">
          Completely free. No credit card required. Access all features.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
