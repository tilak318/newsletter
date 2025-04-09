
import React from 'react';
import { 
  Calendar, 
  Mail, 
  MessageSquare, 
  Heart, 
  Star, 
  ArrowUp 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 border rounded-xl bg-card card-hover-effect">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-center text-foreground/70">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Mail size={24} />,
      title: "Custom Templates",
      description: "Choose from dozens of professionally designed templates or create your own unique style."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "AI Content Generation",
      description: "Let our AI create engaging, relevant content tailored to your audience's interests."
    },
    {
      icon: <Calendar size={24} />,
      title: "Scheduled Delivery",
      description: "Set up recurring newsletters and let our system handle the timing and delivery."
    },
    {
      icon: <Heart size={24} />,
      title: "Audience Insights",
      description: "Get detailed analytics on engagement, click-through rates, and subscriber preferences."
    },
    {
      icon: <Star size={24} />,
      title: "Smart Personalization",
      description: "Dynamically personalize content for each subscriber based on their behavior."
    },
    {
      icon: <ArrowUp size={24} />,
      title: "SEO Optimization",
      description: "Automatically optimize your newsletter content for better search visibility."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-10 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Create newsletters that engage, inform, and convert with our comprehensive toolset.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
