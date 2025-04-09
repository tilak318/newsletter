
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "Engaging newsletters, every time.";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < textToType.length) {
        setTypedText(textToType.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section className="pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            AI-Powered <span className="text-gradient">Newsletter Generator</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium h-8">
            {typedText}
          </h2>
          <p className="text-lg text-foreground/80 max-w-xl">
            Create professional, personalized newsletters in seconds. Our AI understands your audience and delivers content that resonates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white py-6 px-8 text-lg">
              Try it Free
            </Button>
            <Button size="lg" variant="outline" className="py-6 px-8 text-lg">
              Watch Demo
            </Button>
          </div>
          <div className="pt-4 text-sm text-foreground/70">
            No credit card required. Free plan available.
          </div>
        </div>
        
        <div className="flex-1 glassmorphism rounded-2xl p-1 shadow-2xl animate-fade-in">
          <div className="bg-card rounded-xl overflow-hidden">
            <div className="bg-newsletter-dark p-3 flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="mx-auto text-white/80 text-sm">Newsletter Generator</div>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Topics</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Technology</span>
                  <span className="px-3 py-1 bg-newsletter-purple/10 text-newsletter-purple rounded-full text-sm">AI News</span>
                  <span className="px-3 py-1 bg-newsletter-pink/10 text-newsletter-pink rounded-full text-sm">Business</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Style</label>
                <div className="w-full h-10 bg-muted rounded-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-3/4 bg-primary/20 rounded-md flex items-center pl-4">
                    <span className="text-sm">Professional</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preview</label>
                <div className="border rounded-md p-4 space-y-3">
                  <h3 className="font-bold">This Week in Tech & AI</h3>
                  <p className="text-sm text-foreground/80">The latest innovations, funding rounds, and breakthroughs in technology and artificial intelligence...</p>
                  <div className="animate-pulse-light w-full h-20 bg-gradient-to-r from-muted to-secondary rounded-md"></div>
                </div>
              </div>
              <Button className="w-full mt-4 bg-primary">Generate Newsletter</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
