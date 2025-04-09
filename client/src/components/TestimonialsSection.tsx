
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, avatar }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 flex-grow">
          <svg className="h-8 w-8 text-primary opacity-70 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-foreground/90 italic">{quote}</p>
        </div>
        <div className="flex items-center mt-4">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-foreground/70">{role}, {company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
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

  return (
    <section id="testimonials" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have revolutionized their newsletter strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
