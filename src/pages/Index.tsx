import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const featured = [
  {
    id: "instant-dhokla",
    name: "Instant Dhokla",
    desc: "Soft, spongy, steamed chickpea cake with tempering.",
    image: "/lovable-uploads/4d7c2dad-dece-46f2-a161-5c6ff108dc0e.png",
    q: "Instant Dhokla",
  },
  {
    id: "sev-khamani",
    name: "Sev Khamani",
    desc: "Spicy-sour crumbled dhokla topped with sev.",
    image: "/lovable-uploads/2d942bfb-30ae-45ae-8652-cc9bce7519da.png",
    q: "Sev Khamani",
  },
  {
    id: "tawa-handwo",
    name: "Tawa Handwo",
    desc: "Crispy, pan-fried lentil-vegetable cake.",
    image: "/lovable-uploads/d6a24561-0cb3-466b-9c85-23deaf4e8c01.png",
    q: "Tawa Handwo",
  },
];

const categories = [
  "Snacks",
  "Steamed",
  "Pan-Fried",
  "Street Food",
  "Sweets",
  "Chutneys",
];

const Index = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Mom’s Nasto | Gujarati Snacks Recipes";

    // Canonical tag for SEO
    const link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", window.location.origin + "/");
    if (!link.parentNode) document.head.appendChild(link);
  }, []);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/recipes?q=${encodeURIComponent(q)}` : "/recipes");
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 pt-10 pb-8">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft p-6 md:p-10">
            {/* Subtle motif (no blur) */}
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/10" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-secondary/10" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Mom’s Nasto</h1>
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                “Simple, tasty Gujarati snacks — straight from a Mummy’s kitchen.”
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-center">
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/recipes">Browse Recipes</Link>
                </Button>
                <Button asChild variant="secondary" className="w-full sm:w-auto">
                  <Link to="/recipes">All Recipes</Link>
                </Button>
              </div>

              {/* Search */}
              <form onSubmit={onSearch} className="mt-6 flex w-full max-w-xl mx-auto gap-2">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search recipes…"
                  aria-label="Search recipes"
                />
                <Button type="submit" className="shrink-0">Search</Button>
              </form>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4">
          <nav aria-label="Categories" className="-mx-4 px-4 overflow-x-auto">
            <div className="flex items-center gap-2 pb-2 whitespace-nowrap">
              {categories.map((tag) => (
                <Link
                  key={tag}
                  to={`/recipes?tag=${encodeURIComponent(tag)}`}
                  className="inline-flex items-center rounded-full border border-border/50 bg-muted px-3 py-1 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </nav>
        </section>

        {/* Featured Recipes */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Featured Recipes</h2>
            <p className="text-sm text-muted-foreground">Popular picks to get you started</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((item) => (
              <article key={item.id} className="rounded-xl border border-border/50 bg-card p-4 shadow-soft">
                <div className="aspect-square w-full rounded-lg border border-border/30 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} recipe`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{item.desc}</p>
                  <div className="pt-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/recipes?q=${encodeURIComponent(item.q)}`}>View</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
