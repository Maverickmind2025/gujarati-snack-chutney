import { Link } from "react-router-dom";
import { HeroButton } from "@/components/ui/hero-button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="flex flex-col items-center text-center py-8 px-4 border-b-2" 
              style={{
                backgroundColor: 'hsl(var(--header-bg))',
                borderBottomColor: 'hsl(var(--header-border))'
              }}>
        <h1 className="font-serif text-4xl m-0" 
            style={{ color: 'hsl(var(--header-title))' }}>
          🍽️ Mom's Nasto
        </h1>
        <p className="font-sans text-base mt-2 mb-6" 
           style={{ color: 'hsl(var(--header-subtitle))' }}>
          Simple, tasty, and made with love — straight from a Mummy's kitchen.
        </p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 flex justify-center gap-6 sm:gap-8 py-4 px-2 border-b z-10"
           style={{
             backgroundColor: 'hsl(var(--nav-bg))',
             borderBottomColor: 'hsl(var(--nav-border))'
           }}>
        <Link to="/" className="no-underline font-bold text-base"
              style={{ color: 'hsl(var(--nav-link))' }}>
          🏠 Home
        </Link>
        <Link to="/recipes" className="no-underline font-bold text-base"
              style={{ color: 'hsl(var(--nav-link))' }}>
          🍽️ All Recipes
        </Link>
      </nav>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 flex items-center justify-center min-h-[60vh] pt-16">
        <div className="text-center">
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