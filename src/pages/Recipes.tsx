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
  },
  {
    id: "dudhi-na-muthiya",
    name: "Dudhi na Muthiya",
    description: "A soft, steamed snack made from grated bottle gourd, packed with flavor and nutrition.",
    ingredients: [
      "1½ cups grated bottle gourd (doodhi)",
      "1 cup whole wheat flour",
      "1/2 cup gram flour (besan)",
      "1 tablespoon semolina (rava)",
      "1/2 teaspoon turmeric powder",
      "1 teaspoon ginger-green chili paste",
      "1/2 teaspoon ajwain (carom seeds)",
      "1 teaspoon sugar",
      "Salt to taste",
      "1 tablespoon lemon juice",
      "1/2 teaspoon baking soda",
      "1 tablespoon oil",
      "For tempering: 1 tsp mustard seeds, sesame seeds, curry leaves, 1 tsp oil"
    ],
    instructions: [
      "Mix all ingredients to make a soft dough. Add little water if needed.",
      "Shape into cylindrical rolls and steam for 15–20 minutes.",
      "Let it cool and cut into round slices.",
      "In a pan, heat oil, add tempering.",
      "Add sliced muthiya and sauté till lightly golden.",
      "Tip: Tastes great with green chutney or curd."
    ]
  },
  {
    id: "bhaat-na-muthiya",
    name: "Bhaat na Muthiya",
    description: "A tasty snack made using leftover rice, combined with spices and flours, then steamed or sautéed.",
    ingredients: [
      "1 cup cooked rice",
      "1/2 cup whole wheat flour",
      "1/2 cup besan (gram flour)",
      "1 tablespoon semolina (rava)",
      "1/2 teaspoon turmeric",
      "1 teaspoon ginger-green chili paste",
      "Salt to taste",
      "1 teaspoon sugar",
      "1/2 teaspoon ajwain",
      "1 tablespoon lemon juice",
      "1 tablespoon oil",
      "For tempering: mustard seeds, sesame seeds, curry leaves"
    ],
    instructions: [
      "Mash rice and mix with all ingredients to form a dough.",
      "Roll into cylindrical logs. Steam for 15–20 minutes.",
      "Slice and sauté with tempering in a hot pan.",
      "Tip: Ideal for using up leftover rice with minimal effort."
    ]
  },
  {
    id: "khatta-dhokla",
    name: "Khatta Dhokla",
    description: "Traditional fermented dhokla that's tangy, soft, and deliciously spongy — perfect for breakfast or tea time.",
    ingredients: [
      "1 cup rice",
      "1/2 cup urad dal",
      "1/2 cup sour curd",
      "1/4 tsp baking soda",
      "1 tsp lemon juice",
      "Salt to taste",
      "For tempering: mustard seeds, sesame seeds, green chilies, curry leaves"
    ],
    instructions: [
      "Soak rice and dal separately for 6–8 hrs, grind to a thick batter.",
      "Ferment overnight. Add curd, soda, lemon juice, and salt.",
      "Pour into greased dish and steam 15–20 mins.",
      "Prepare tempering and pour over.",
      "Tip: Serve with coriander chutney or dry garlic chutney."
    ]
  },
  {
    id: "carrot-methi-mooli-thepla",
    name: "Carrot Methi Mooli Thepla",
    description: "A wholesome thepla variation with grated carrot, radish, and fenugreek — great for breakfast or travel.",
    ingredients: [
      "2 cups whole wheat flour",
      "1/2 cup grated carrot",
      "1/2 cup grated mooli (radish)",
      "1/2 cup chopped fresh methi",
      "1/2 tsp turmeric",
      "1/2 tsp red chili powder",
      "1/2 tsp ajwain",
      "1 tsp ginger-green chili paste",
      "Salt, water, and oil as needed"
    ],
    instructions: [
      "Mix everything into a dough.",
      "Roll into theplas and cook on tawa with oil till golden.",
      "Serve hot with pickle and curd.",
      "Tip: Great to pack for long train journeys."
    ]
  },
  {
    id: "beetroot-sesame-thepla",
    name: "Beetroot & Sesame Thepla",
    description: "A colorful and nutritious flatbread made with grated beetroot and toasted sesame seeds — earthy, soft, and full of flavor.",
    ingredients: [
      "2 cups whole wheat flour",
      "1 cup grated beetroot",
      "1 tablespoon white sesame seeds",
      "1 teaspoon ginger-green chili paste",
      "1/2 teaspoon turmeric powder",
      "1/2 teaspoon red chili powder",
      "1/2 teaspoon cumin powder",
      "1/2 teaspoon ajwain",
      "Salt to taste",
      "1 tablespoon curd",
      "Water as needed",
      "Oil for cooking"
    ],
    instructions: [
      "Roast sesame seeds and mix with all ingredients into a soft dough.",
      "Roll and cook on hot tawa with oil till done.",
      "Tip: Serve with plain dahi or sweet pickle."
    ]
  },
  {
    id: "tawa-handwo",
    name: "Tawa Handwo",
    description: "A healthy and crispy pan-fried lentil cake made with fermented batter, loaded with vegetables and tempered with mustard seeds.",
    ingredients: [
      "1 cup handvo flour (or mix of rice + lentil flour)",
      "1/2 cup grated bottle gourd",
      "1/4 cup grated carrot",
      "1/4 cup curd",
      "1 tsp ginger-green chili paste",
      "1/2 tsp turmeric",
      "Salt to taste",
      "1/2 tsp fruit salt (Eno)",
      "Oil for shallow frying",
      "Mustard seeds, sesame seeds, curry leaves for tempering"
    ],
    instructions: [
      "Mix flour, curd, veggies, spices, and water to make a thick batter.",
      "Let it rest for 30 mins to ferment.",
      "Add Eno just before frying and mix gently.",
      "Heat a pan with oil, add mustard seeds, sesame seeds, curry leaves.",
      "Pour batter into small rounds over the tempering and cover-cook both sides till crispy.",
      "Tip: You can make it with leftover dosa/idli batter too!"
    ]
  },
  {
    id: "vaghareli-rotli",
    name: "Vaghareli Rotli",
    description: "A humble yet flavorful Gujarati dish using leftover rotlis, stir-fried with spices — comfort food at its best.",
    ingredients: [
      "4 leftover rotlis (chapatis), cut into strips or pieces",
      "1 tbsp oil",
      "1/2 tsp mustard seeds",
      "1/4 tsp cumin seeds",
      "1 chopped onion",
      "1 chopped green chili",
      "1/4 tsp turmeric",
      "Salt to taste",
      "A pinch of sugar",
      "Lemon juice & coriander to garnish"
    ],
    instructions: [
      "Heat oil in a pan, add mustard and cumin seeds.",
      "Sauté onion and green chili until soft.",
      "Add turmeric, salt, sugar, and rotli pieces.",
      "Stir well till everything is coated and warm.",
      "Garnish with lemon juice and coriander.",
      "Tip: Tastes great with curd or raw onion salad."
    ]
  },
  {
    id: "khatta-meetha-pudla",
    name: "Khatta Meetha Pudla",
    description: "A unique savory-sweet Gujarati pancake made from wheat flour and jaggery, spiced mildly — perfect for breakfast or tea.",
    ingredients: [
      "1 cup whole wheat flour",
      "1 tbsp jaggery (grated or melted)",
      "1/4 tsp turmeric",
      "1/2 tsp chili-ginger paste",
      "Salt to taste",
      "Water to make batter",
      "Oil or ghee for shallow frying"
    ],
    instructions: [
      "Mix all ingredients with water to make a smooth, pourable batter.",
      "Heat a pan, pour a ladleful, and spread like a pancake.",
      "Drizzle oil/ghee and cook both sides till golden.",
      "Serve hot with chutney or curd.",
      "Tip: Add a pinch of crushed fennel seeds for a fragrant twist."
    ]
  },
  {
    id: "khandvi-bites",
    name: "Khandvi Bites",
    description: "A soft, rolled snack made from gram flour and yogurt, seasoned with mustard and sesame — bite-sized and irresistible.",
    ingredients: [
      "1 cup besan (gram flour)",
      "1 cup sour curd",
      "2 cups water",
      "Salt to taste",
      "1/4 tsp turmeric",
      "1 tsp ginger-green chili paste",
      "For tempering: mustard seeds, sesame seeds, curry leaves, coriander"
    ],
    instructions: [
      "Mix besan, curd, water, turmeric, salt, and chili-ginger paste.",
      "Cook on low heat stirring constantly until thick.",
      "Quickly spread the hot batter thinly on a greased surface.",
      "Once cool, cut and roll tightly into bite-sized pieces.",
      "Prepare tempering and pour over rolls.",
      "Tip: Spread fast before batter sets. Timing is key!"
    ]
  },
  {
    id: "bajra-garlic-pancakes",
    name: "Bajra Garlic Pancakes",
    description: "A hearty and rustic Gujarati-style flat pancake made with bajra flour and infused with garlic — great for winter mornings.",
    ingredients: [
      "1 cup bajra (pearl millet) flour",
      "2–3 garlic cloves, crushed",
      "1/2 tsp ajwain (carom seeds)",
      "1/4 tsp turmeric",
      "1 chopped green chili",
      "Salt to taste",
      "Warm water (to knead)",
      "Ghee or oil for cooking"
    ],
    instructions: [
      "Mix flour, garlic, ajwain, chili, turmeric, and salt.",
      "Add warm water to knead into soft dough.",
      "Pat into thick pancakes by hand.",
      "Cook both sides on a hot tawa with ghee/oil until golden.",
      "Serve hot with curd or chutney.",
      "Tip: Add chopped methi or coriander for variety."
    ]
  },
  {
    id: "methi-muthiya",
    name: "Methi Muthiya",
    description: "A steamed or pan-fried Gujarati snack made from whole wheat flour and fresh fenugreek leaves — healthy, lightly spiced, and full of flavor.",
    ingredients: [
      "1 cup whole wheat flour",
      "1/2 cup besan (gram flour)",
      "1.5 cups chopped fresh methi (fenugreek leaves)",
      "1/4 cup curd",
      "1 tsp ginger-green chili paste",
      "1/2 tsp turmeric",
      "1/2 tsp red chili powder",
      "1/2 tsp sugar",
      "1 tsp lemon juice",
      "Salt to taste",
      "1/4 tsp baking soda",
      "1 tbsp oil (for dough)",
      "For tempering: mustard seeds, sesame seeds, curry leaves, oil"
    ],
    instructions: [
      "Combine all ingredients to form a soft dough. Add very little water if needed.",
      "Shape into cylindrical logs.",
      "Steam for 15–20 minutes or until firm. Let cool slightly and slice into rounds.",
      "For a crispy version, sauté the slices in a tempering of mustard seeds, sesame, and curry leaves.",
      "Serve hot with green chutney or ketchup.",
      "Tip: You can also air-fry or bake instead of steaming and pan-frying for a healthier version."
    ]
  },
  {
    id: "rice-pancakes",
    name: "Rice Pancakes",
    description: "Crisp on the outside, soft on the inside — these quick rice pancakes are a delicious way to use up leftover rice with minimal effort.",
    ingredients: [
      "1 cup cooked rice",
      "1/4 cup rice flour",
      "1/2 small onion, finely chopped",
      "1 green chili, finely chopped",
      "2 tbsp chopped coriander leaves",
      "1/2 tsp cumin seeds",
      "Salt to taste",
      "Water as needed (to make batter)",
      "Oil for shallow frying"
    ],
    instructions: [
      "Mash cooked rice lightly with your hands or a spoon.",
      "Mix in rice flour, onion, chili, coriander, cumin seeds, and salt.",
      "Add just enough water to form a thick, spreadable batter.",
      "Heat a nonstick tawa or pan, grease with oil, and spread a ladleful of batter into a pancake.",
      "Cook on medium heat until both sides are golden brown.",
      "Serve hot with chutney or pickle.",
      "Tip: Add grated vegetables like carrot or bottle gourd for more nutrition and texture."
    ]
  },
  {
    id: "toast-handvo",
    name: "Toast Handvo",
    description: "A quicker, toast-style version of the traditional Gujarati Handvo — crispy outside, soft and savory inside, perfect for breakfast or a tea-time snack.",
    ingredients: [
      "1 cup readymade Handvo flour (or mixed lentil-rice flour)",
      "1/2 cup curd (yogurt)",
      "1/4 cup grated bottle gourd (lauki)",
      "1/4 cup finely chopped vegetables (carrot, capsicum, onion – optional)",
      "1 tsp ginger-green chili paste",
      "Salt to taste",
      "1/4 tsp turmeric powder",
      "1/2 tsp baking soda or Eno",
      "Oil or ghee for toasting"
    ],
    instructions: [
      "In a bowl, mix Handvo flour with curd to form a thick batter. Let it rest for 15–20 minutes.",
      "Add grated vegetables, ginger-chili paste, turmeric, salt, and mix well.",
      "Just before toasting, add baking soda/Eno and mix gently.",
      "Heat a tawa or pan, grease with oil/ghee. Pour a ladleful of batter and spread into a thick toast-sized round.",
      "Cover and cook on low-medium heat till golden and crisp on both sides.",
      "Serve hot with green chutney or ketchup.",
      "Tip: Use a sandwich toaster for a quicker, uniformly cooked Toast Handvo."
    ]
  },
  {
    id: "poha-pancakes",
    name: "Poha Pancakes",
    description: "A soft, fluffy fusion pancake made with flattened rice (poha) and basic pantry staples — quick, filling, and perfect for breakfast or a light snack.",
    ingredients: [
      "1 cup thick poha (flattened rice)",
      "1/2 cup curd (yogurt)",
      "1/4 cup semolina (rava/sooji)",
      "1/2 tsp baking soda or Eno",
      "Salt to taste",
      "1/4 cup grated vegetables (optional – carrot, zucchini, etc.)",
      "1–2 chopped green chilies",
      "Fresh coriander (optional)",
      "Oil or ghee for cooking"
    ],
    instructions: [
      "Wash poha and soak in water for 5 minutes. Drain excess water.",
      "Blend poha with curd into a smooth paste.",
      "In a bowl, mix the paste with semolina, salt, chopped chilies, vegetables, and coriander. Let it rest for 10–15 minutes.",
      "Add baking soda or Eno just before cooking. Mix gently.",
      "Heat a non-stick pan, grease lightly. Pour a ladleful of batter and spread gently like a thick pancake.",
      "Cover and cook on medium flame until both sides are golden brown.",
      "Serve hot with green chutney or ketchup.",
      "Tip: For extra flavor, sprinkle sesame seeds on top while cooking."
    ]
  },
  {
    id: "healthy-mini-pancakes",
    name: "Healthy Mini Pancakes",
    description: "These bite-sized savory pancakes are soft, protein-rich, and perfect for kids or light eaters. Made with a mix of dal and veggies, they're as nutritious as they are delicious.",
    ingredients: [
      "1/2 cup yellow moong dal (soaked 2–3 hours)",
      "1/4 cup curd (optional)",
      "1/4 tsp turmeric powder",
      "1/2 tsp grated ginger",
      "1 chopped green chili",
      "1/4 cup finely chopped spinach or methi leaves",
      "Salt to taste",
      "1 tsp oil (for each batch)",
      "Pinch of baking soda or 1/2 tsp Eno (optional)"
    ],
    instructions: [
      "Grind soaked moong dal with ginger, chili, and curd to a smooth batter.",
      "Mix in turmeric, salt, and chopped greens. Let the batter rest for 10 minutes.",
      "Just before cooking, add soda or Eno if using.",
      "Heat a non-stick pan and pour small portions to form mini pancakes.",
      "Cook on both sides with a little oil till golden and cooked through.",
      "Serve hot with green chutney or curd.",
      "Tip: These stay soft even when cool — great for tiffins!"
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
            Authentic Mom's Nasto 🍽️
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the authentic flavors of Gujarat with these time-tested recipes passed down through generations
          </p>
        </div>
        
        {/* Recipe Cards Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {recipes.map((recipe, index) => (
            <div 
              key={recipe.id} 
              className="break-inside-avoid animate-fade-in"
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