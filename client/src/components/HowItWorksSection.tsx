
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-center text-foreground/70 max-w-xs">{description}</p>
      
      {!isLast && (
        <div className="my-6">
          <ArrowDown className="text-primary animate-bounce" />
        </div>
      )}
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Creating professional newsletters has never been easier. Just follow these simple steps:
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <Step 
            number={1} 
            title="Choose Your Topics" 
            description="Select the topics, themes, and interests relevant to your audience."
          />
          
          <Step 
            number={2} 
            title="Customize Your Style" 
            description="Pick a template and customize the design to match your brand identity."
          />
          
          <Step 
            number={3} 
            title="Generate Content" 
            description="Our AI analyzes your inputs and creates engaging, relevant content."
          />
          
          <Step 
            number={4} 
            title="Review and Edit" 
            description="Make any final adjustments to the generated newsletter."
          />
          
          <Step 
            number={5} 
            title="Send or Schedule" 
            description="Deliver immediately or schedule for the perfect time to reach your audience."
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
