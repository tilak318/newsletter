
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExamplesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tech");
  
  const examples = {
    tech: {
      title: "Tech Weekly Roundup",
      content: `
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-newsletter-blue">This Week in Technology</h3>
          <p>Dear Subscriber,</p>
          <p>The tech world has been buzzing with innovation this week. Here's what you need to know:</p>
          
          <div class="border-l-4 border-newsletter-blue pl-4 py-2 my-4">
            <h4 class="font-medium">AI Developments</h4>
            <p class="text-sm text-foreground/80">Google unveils new machine learning models that can understand complex human instructions and generate more creative, accurate responses.</p>
          </div>
          
          <div class="border-l-4 border-newsletter-purple pl-4 py-2 my-4">
            <h4 class="font-medium">App Updates</h4>
            <p class="text-sm text-foreground/80">The latest iOS update introduces battery optimization features that could extend your device's lifespan by up to 20%.</p>
          </div>
          
          <div class="border-l-4 border-newsletter-pink pl-4 py-2 my-4">
            <h4 class="font-medium">Industry News</h4>
            <p class="text-sm text-foreground/80">Tech startups raised $12.8 billion in Q1 2023, showing resilience despite economic headwinds.</p>
          </div>
          
          <p>Stay innovative,</p>
          <p class="font-medium">The TechInsider Team</p>
        </div>
      `
    },
    business: {
      title: "Business Insights",
      content: `
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-newsletter-indigo">Business Weekly</h3>
          <p>Dear Valued Subscriber,</p>
          <p>This week's business landscape has seen significant shifts. Here are the key takeaways:</p>
          
          <div class="border-l-4 border-newsletter-indigo pl-4 py-2 my-4">
            <h4 class="font-medium">Market Trends</h4>
            <p class="text-sm text-foreground/80">The S&P 500 gained 2.3% this week, with technology and healthcare sectors leading the rally.</p>
          </div>
          
          <div class="border-l-4 border-newsletter-blue pl-4 py-2 my-4">
            <h4 class="font-medium">Industry Spotlight</h4>
            <p class="text-sm text-foreground/80">Sustainable businesses are seeing increased investment, with ESG funds growing by 15% this quarter.</p>
          </div>
          
          <div class="border-l-4 border-newsletter-purple pl-4 py-2 my-4">
            <h4 class="font-medium">Leadership Insights</h4>
            <p class="text-sm text-foreground/80">Remote work continues to reshape leadership strategies, with 67% of executives adopting hybrid models permanently.</p>
          </div>
          
          <p>To your success,</p>
          <p class="font-medium">The Business Insights Team</p>
        </div>
      `
    },
    lifestyle: {
      title: "Lifestyle & Wellness",
      content: `
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-newsletter-pink">Wellness Wednesday</h3>
          <p>Hello Friend,</p>
          <p>We're excited to share this week's wellness tips and lifestyle trends:</p>
          
          <div class="border-l-4 border-newsletter-pink pl-4 py-2 my-4">
            <h4 class="font-medium">Nutrition Corner</h4>
            <p class="text-sm text-foreground/80">New research suggests that incorporating fermented foods daily can significantly improve gut health and immune function.</p>
          </div>
          
          <div class="border-l-4 border-newsletter-purple pl-4 py-2 my-4">
            <h4 class="font-medium">Fitness Update</h4>
            <p class="text-sm text-foreground/80">The "5-minute movement snack" is gaining popularity, with studies showing multiple short bursts of activity throughout the day can be as effective as longer workouts.</p>
          </div>
          
          <div class="border-l-4 border-newsletter-blue pl-4 py-2 my-4">
            <h4 class="font-medium">Mindfulness Practice</h4>
            <p class="text-sm text-foreground/80">Try this simple 3-3-3 grounding technique when feeling anxious: Name 3 things you see, 3 things you hear, and move 3 parts of your body.</p>
          </div>
          
          <p>Be well,</p>
          <p class="font-medium">The Wellness Team</p>
        </div>
      `
    }
  };
  
  return (
    <section id="examples" className="py-20 px-6 md:px-10 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Example Newsletters</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            See what our AI can create for different industries and topics.
          </p>
        </div>
        
        <Tabs defaultValue="tech" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="tech">Technology</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(examples).map(([key, example]) => (
            <TabsContent key={key} value={key} className="focus:outline-none">
              <div className="bg-card shadow-lg rounded-xl overflow-hidden max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                  <h3 className="font-bold">{example.title}</h3>
                  <div className="text-xs opacity-80">Generated by AI • Personalized for your audience</div>
                </div>
                <div className="p-8" dangerouslySetInnerHTML={{ __html: example.content }}></div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-6">Want to see how your industry newsletter would look?</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Try Now For Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
