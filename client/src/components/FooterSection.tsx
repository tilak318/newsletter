import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-10 bg-card border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-hero-pattern flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold">NewsletterAI</span>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              AI-powered newsletter generation for creators, marketers, and businesses.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-foreground/70 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/create" className="text-foreground/70 hover:text-primary transition-colors">Create Newsletter</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-foreground/40" />
                </div>
                <input 
                  type="email" 
                  className="py-2 pl-10 pr-3 w-full rounded-l-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email" 
                />
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-base text-foreground/70 text-center">
            2025 NewsletterAI. All rights reserved.
            <br />
            Developed by{" "}
            <a 
              href="https://xdevsolutions.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary text-xl font-medium hover:text-red-500 hover:scale-105 transition-transform transition-colors duration-300"
            >
              xDev Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
