
import React from 'react';
import { 
  Calendar, 
  Mail, 
  MessageSquare, 
  Heart, 
  Star, 
  ArrowUp 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

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

  const testimonials = [
    {
      quote: "This AI newsletter tool has transformed our marketing strategy. We're saving hours each week and our engagement metrics have increased by 40%.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "As a solo entrepreneur, I struggled to maintain consistent communication with my audience. This tool has been a game-changer for my business.",
      author: "Michael Chen",
      role: "Founder",
      company: "GrowthHacks",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      quote: "The personalization capabilities are incredible. Our subscribers think we've hired a team of writers, but it's just us and this amazing AI.",
      author: "Rebecca Torres",
      role: "Community Manager",
      company: "The Creative Collective",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Choose Your Topics",
      description: "Select the topics, themes, and interests relevant to your audience."
    },
    {
      number: 2,
      title: "Customize Content",
      description: "Our AI generates engaging content that you can customize to match your voice."
    },
    {
      number: 3,
      title: "Review and Edit",
      description: "Fine-tune the generated content to ensure it perfectly matches your needs."
    },
    {
      number: 4,
      title: "Schedule and Send",
      description: "Set your delivery schedule and let our system handle the rest."
    }
  ];

  return (
    <div className="space-y-20">
      {/* Features Section */}
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Creating professional newsletters has never been easier. Just follow these simple steps:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <Card key={step.number} className="relative">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                  <p className="text-center text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 md:px-10 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have revolutionized their newsletter strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 flex-grow">
                    <svg className="h-8 w-8 text-primary opacity-70 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-foreground/90 italic">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
