import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

// Update the interface to match server expectations
interface NewsletterData {
  title: string;
  topic: string;
  style: string;
  content: string;
  additionalContent?: string;
  userId?: string;  // If you need user authentication
  timestamp?: Date;
}

// Update interface to match server response
interface NewsletterResponse {
  research_findings: string;
  verified_research: string;
  newsletter: string;
}

const CreateNewsletter: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newsletterData, setNewsletterData] = useState<NewsletterData>({
    title: '',
    topic: '',
    style: 'professional',
    content: '',
    additionalContent: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setError(null);
    setNewsletterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!newsletterData.title.trim() || !newsletterData.topic.trim()) {
        throw new Error('Please fill in all required fields');
      }

      // Update to match server endpoint
      // const response = await fetch('http://localhost:8000/api/generate-newsletter', {
        const response = await fetch('https://ainewsletter-server.onrender.com/api/generate-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: newsletterData.topic, // Server only expects topic
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to generate newsletter');
      }

      const data: NewsletterResponse = await response.json();
      
      // Update to use server response
      setNewsletterData(prev => ({
        ...prev,
        content: data.newsletter,
        additionalContent: `Research Findings:\n${data.research_findings}\n\nVerified Research:\n${data.verified_research}`
      }));

      toast({
        title: "Success!",
        description: "Newsletter generated successfully.",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Create Your Newsletter</h1>
            <p className="text-lg text-foreground/80">
              Generate engaging newsletters with AI in just a few clicks
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Newsletter Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="text-red-500 text-sm mb-4">{error}</div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Newsletter Title</label>
                    <Input
                      name="title"
                      value={newsletterData.title}
                      onChange={handleInputChange}
                      placeholder="Enter newsletter title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Topic</label>
                    <Input
                      name="topic"
                      value={newsletterData.topic}
                      onChange={handleInputChange}
                      placeholder="e.g., Technology, Business, AI"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Style</label>
                    <select
                      name="style"
                      value={newsletterData.style}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="professional">Professional</option>
                      <option value="casual">Casual</option>
                      <option value="formal">Formal</option>
                      <option value="friendly">Friendly</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Additional Content (Optional)</label>
                    <Textarea
                      name="additionalContent"
                      value={newsletterData.additionalContent}
                      onChange={handleInputChange}
                      placeholder="Add any specific content you'd like to include..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Generating..." : "Generate Newsletter"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-6 min-h-[400px] bg-card overflow-auto">
                  {newsletterData.content ? (
                    <div dangerouslySetInnerHTML={{ __html: newsletterData.content }} />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      Your generated newsletter will appear here
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default CreateNewsletter;