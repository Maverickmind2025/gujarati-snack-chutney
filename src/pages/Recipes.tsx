import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";

const recipes = [
  {
    id: "upma",
    name: "Upma",
    description: "A savory breakfast dish made with semolina, vegetables, and aromatic spices. Quick, nutritious, and comforting - perfect for any time of day.",
    ingredients: [
      "1 cup semolina (rava/suji)",
      "2-3 green chilies, chopped",
      "1 inch ginger, chopped",
      "1 onion, chopped",
      "2 tbsp oil or ghee",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "10-12 curry leaves",
      "2½ cups water",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Dry roast semolina in a pan until light golden and aromatic. Set aside.",
      "Heat oil in the same pan. Add mustard seeds, cumin seeds, and let them splutter.",
      "Add curry leaves, green chilies, and ginger. Sauté for 30 seconds.",
      "Add chopped onions and cook until translucent.",
      "Boil water in another pan with salt.",
      "Add the roasted semolina to the tempering while stirring continuously.",
      "Slowly add the hot water while stirring to avoid lumps.",
      "Cook for 3-4 minutes until water is absorbed and upma is fluffy.",
      "Garnish with fresh coriander and serve hot."
    ]
  },
  {
    id: "instant-dhokla",
    name: "Instant Dhokla",
    description: "Fluffy, steamed savory cakes made with gram flour and spices. Light, spongy, and irresistibly delicious - a perfect healthy snack.",
    ingredients: [
      "1 cup gram flour (besan)",
      "1 tbsp semolina",
      "1 tbsp oil",
      "1 tsp ginger-green chili paste",
      "½ tsp turmeric powder",
      "1 tsp sugar",
      "Salt to taste",
      "¾ cup water",
      "1 tsp Eno fruit salt",
      "For tempering: 1 tbsp oil, mustard seeds, sesame seeds, green chilies, curry leaves"
    ],
    instructions: [
      "Mix gram flour, semolina, oil, ginger-chili paste, turmeric, sugar, and salt.",
      "Gradually add water to make a smooth batter. Let it rest for 10 minutes.",
      "Grease a steaming plate or dhokla pan.",
      "Add Eno to the batter and mix gently until frothy.",
      "Immediately pour into the greased plate and steam for 12-15 minutes.",
      "Check with a toothpick - it should come out clean when done.",
      "Cool for 5 minutes, then cut into squares.",
      "For tempering: Heat oil, add mustard seeds, sesame seeds, chilies, and curry leaves.",
      "Pour the tempering over dhokla and serve with green chutney."
    ]
  },
  {
    id: "bata-pauna",
    name: "Bata-Pauna",
    description: "Traditional steamed rice flour dumplings with a spicy filling. These delicate parcels are wrapped in turmeric leaves for an authentic aromatic experience.",
    ingredients: [
      "2 cups rice flour",
      "2½ cups water",
      "Salt to taste",
      "1 tbsp oil",
      "For filling: 1 cup grated coconut, 2 tbsp jaggery, ½ tsp cardamom powder",
      "Turmeric leaves or banana leaves",
      "Cotton thread for tying"
    ],
    instructions: [
      "Boil water with salt and oil.",
      "Gradually add rice flour while stirring continuously to avoid lumps.",
      "Cook until the mixture leaves the sides of the pan.",
      "Cover and let it cool completely.",
      "Mix grated coconut, jaggery, and cardamom powder for filling.",
      "Knead the rice flour mixture until smooth.",
      "Take small portions, flatten, add filling, and seal edges.",
      "Wrap each dumpling in turmeric leaves and tie with thread.",
      "Steam for 20-25 minutes until cooked through.",
      "Serve hot with ghee or coconut chutney."
    ]
  },
  {
    id: "sev-khamani",
    name: "Sev Khamani",
    description: "Crumbled dhokla topped with crunchy sev, chutneys, and fresh garnishes. A popular Gujarati street food that's tangy, spicy, and absolutely addictive.",
    ingredients: [
      "4-5 pieces of dhokla, crumbled",
      "½ cup fine sev",
      "2 tbsp green chutney",
      "2 tbsp tamarind chutney",
      "1 onion, finely chopped",
      "2 tbsp fresh coriander, chopped",
      "1 tbsp pomegranate seeds (optional)",
      "Chaat masala to taste",
      "1 green chili, finely chopped"
    ],
    instructions: [
      "Crumble the dhokla pieces into small chunks in a serving bowl.",
      "Sprinkle chopped onions and green chilies over the dhokla.",
      "Add dots of green chutney and tamarind chutney.",
      "Generously sprinkle sev on top.",
      "Add fresh coriander and pomegranate seeds.",
      "Sprinkle chaat masala for extra flavor.",
      "Gently mix everything just before serving.",
      "Serve immediately to maintain the crunch of sev.",
      "Enjoy this chatpata street food delight!"
    ]
  },
  {
    id: "khichu",
    name: "Khichu",
    description: "Soft, stretchy rice flour dough served hot with oil and spices. A comforting Gujarati dish that's simple yet incredibly satisfying when eaten fresh and warm.",
    ingredients: [
      "1 cup rice flour",
      "2½ cups water",
      "½ tsp cumin seeds",
      "2-3 green chilies, chopped",
      "1 inch ginger, chopped",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh coriander for garnish",
      "Extra oil for serving"
    ],
    instructions: [
      "Boil water with cumin seeds, green chilies, ginger, and salt.",
      "Reduce heat and gradually add rice flour while stirring continuously.",
      "Add oil and mix well to prevent sticking.",
      "Cook for 8-10 minutes, stirring constantly until mixture thickens.",
      "The khichu should have a stretchy, elastic consistency.",
      "Remove from heat when it starts leaving the sides of the pan.",
      "Serve immediately on plates while hot.",
      "Drizzle with oil and garnish with fresh coriander.",
      "Eat with hands while warm for the best experience - it's all about the texture!"
    ]
  }
];

const Recipes = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <div className="bg-card/50 backdrop-blur-sm border-b border-border/50 sticky top-0 z-10">
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
        
        <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
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