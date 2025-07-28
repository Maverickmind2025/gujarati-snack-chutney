import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";

const recipes = [
  {
    id: "upma",
    name: "Upma",
    description: "A warm, savory semolina snack that's soft, aromatic, and filling.",
    ingredients: [
      "1 cup semolina (rava)",
      "1 tbsp ghee or oil",
      "1 tsp mustard seeds",
      "1 tsp grated ginger",
      "1 chopped green chili",
      "1 sprig curry leaves",
      "2.5 cups water",
      "Salt to taste"
    ],
    instructions: [
      "Dry roast the semolina in a pan until lightly golden and aromatic. Set aside.",
      "Heat oil/ghee in a pan. Add mustard seeds, ginger, chili, and curry leaves.",
      "Add water and salt. Once it boils, slowly stir in the semolina while whisking.",
      "Cook covered for 2–3 mins on low flame until thick and soft.",
      "Garnish with coriander and lemon juice.",
      "Tip: Add chopped vegetables or roasted peanuts for extra flavor."
    ]
  },
  {
    id: "instant-dhokla",
    name: "Instant Dhokla",
    description: "A soft, spongy, steamed chickpea flour cake topped with tempering.",
    ingredients: [
      "1 cup besan (gram flour)",
      "1/2 cup sour curd",
      "1 tsp ginger-chili paste",
      "1/2 tsp turmeric",
      "Salt to taste",
      "1 tsp Eno fruit salt",
      "1/2 tsp sugar",
      "1 tsp lemon juice",
      "For tempering: 1 tsp mustard seeds, 1 chopped green chili, curry leaves, 1 tsp oil"
    ],
    instructions: [
      "Mix besan, curd, salt, turmeric, ginger-chili paste. Add water to make a thick batter.",
      "Just before steaming, add Eno and lemon juice, mix gently.",
      "Pour into greased dish and steam for 15–20 mins.",
      "Prepare tempering and pour over the steamed dhokla.",
      "Cut into squares and serve with chutney.",
      "Tip: Don't overmix after adding Eno to preserve fluffiness."
    ]
  },
  {
    id: "bata-pauna",
    name: "Bata-Pauna",
    description: "A fried snack of spicy mashed potato filled in triangular bread slices.",
    ingredients: [
      "4 boiled potatoes, mashed",
      "1 tsp ginger-garlic paste",
      "2 chopped green chilies",
      "Salt, turmeric, red chili powder",
      "8 bread slices",
      "Water paste (flour + water) to seal edges",
      "Oil for frying"
    ],
    instructions: [
      "Mix mashed potatoes with spices and green chilies.",
      "Cut bread diagonally into triangles.",
      "Stuff a spoonful of potato mix between two triangles, seal edges with water paste.",
      "Deep fry till golden brown.",
      "Tip: Serve with green chutney or ketchup."
    ]
  },
  {
    id: "sev-khamani",
    name: "Sev Khamani",
    description: "A spicy-sour snack made from crumbled dhokla, garnished with sev.",
    ingredients: [
      "1 cup crumbled dhokla",
      "1 tsp ginger-chili paste",
      "1/2 tsp sugar",
      "1 tsp lemon juice",
      "Salt to taste",
      "1 tsp mustard seeds, curry leaves",
      "Chopped coriander, sev"
    ],
    instructions: [
      "Heat oil, add mustard seeds, curry leaves.",
      "Add ginger-chili paste, then dhokla crumbs.",
      "Mix in sugar, lemon juice, salt. Cook for 2–3 mins.",
      "Garnish with coriander and sev.",
      "Tip: Use leftover dhokla for best texture."
    ]
  },
  {
    id: "khichu",
    name: "Khichu",
    description: "A soft, mildly spiced rice flour snack, steamed and topped with oil.",
    ingredients: [
      "1 cup rice flour",
      "2.5 cups water",
      "1/2 tsp cumin seeds",
      "1 tsp green chili paste",
      "Salt",
      "1 tsp oil for serving"
    ],
    instructions: [
      "Boil water with salt, cumin, chili paste.",
      "Slowly add rice flour while stirring to avoid lumps.",
      "Cook till it forms a soft dough.",
      "Serve warm, drizzled with oil or pickle masala.",
      "Tip: Eat hot! Hardens on cooling."
    ]
  }
];

const Recipes = () => {
  return (
    <div className="min-h-screen bg-gradient-warm pt-16">
      {/* Header */}
      <div className="bg-card/50 backdrop-blur-sm border-b border-border/50 sticky top-16 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-foreground">
              Recipe Collection
            </h1>
            <div></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Authentic Gujarati Snacks 🍽️
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the authentic flavors of Gujarat with these time-tested recipes passed down through generations
          </p>
        </div>
        
        <div className="grid gap-8 md:gap-10 max-w-5xl mx-auto">
          {recipes.map((recipe, index) => (
            <div 
              key={recipe.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8">
          <p className="text-muted-foreground italic">
            Made with ❤️ from Mummy's kitchen to yours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;