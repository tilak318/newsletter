
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="py-4 px-6 md:px-10 w-full backdrop-blur-md bg-background/80 fixed top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-hero-pattern flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold">NewsletterAI</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
          <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">Features</Link>
          <Link to="/create" className="text-foreground/80 hover:text-foreground transition-colors">Create</Link>
        </div>
        
        <div className="flex items-center">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate('/create')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
