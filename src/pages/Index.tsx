import { Link } from "react-router-dom";
import { HeroButton } from "@/components/ui/hero-button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <div className="container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Gujarati Snack Delights{" "}
            <span className="inline-block text-6xl md:text-8xl">🍽️</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Simple, tasty, and made with love — straight from a Mummy's kitchen.
          </p>
          
          {/* CTA Button */}
          <Link to="/recipes">
            <HeroButton className="shadow-warm hover:shadow-xl">
              Browse Recipes
            </HeroButton>
          </Link>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="w-20 h-20 rounded-full bg-primary/20"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="w-16 h-16 rounded-full bg-secondary/20"></div>
      </div>
      <div className="absolute top-1/3 right-20 opacity-15">
        <div className="w-12 h-12 rounded-full bg-accent/30"></div>
      </div>
    </div>
  );
};

export default Index;