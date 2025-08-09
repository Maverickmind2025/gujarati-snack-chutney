import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";

const recipes = [
    {
      id: "upma",
      name: "Upma",
      description: "A warm, savory semolina snack that's soft, aromatic, and filling.",
      time: "15 mins",
      difficulty: "Easy" as const,
      image: "/lovable-uploads/90b8c919-65c9-4cfb-acaa-32ca32cebf53.png",
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
    time: "25 mins",
    difficulty: "Easy" as const,
    image: "/lovable-uploads/4d7c2dad-dece-46f2-a161-5c6ff108dc0e.png",
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
    time: "25 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/a60f5569-2401-40a1-87c9-3f4bb48bef3e.png",
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
    time: "20 mins",
    difficulty: "Medium" as const,
      image: "/lovable-uploads/2d942bfb-30ae-45ae-8652-cc9bce7519da.png",
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
    time: "15 mins",
    difficulty: "Easy" as const,
      image: "/lovable-uploads/18d12427-9d64-4d3b-8d31-8c1396cbd5c7.png",
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
    time: "30 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/3199e150-3003-48e3-aa82-a582b74a11a8.png",
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
    time: "20 mins",
    difficulty: "Easy" as const,
    image: "/lovable-uploads/77608add-a4ba-4569-89de-813d5b75abb2.png",
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
    time: "30 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/e9fc0553-4555-4015-bcc3-88bf0ecae7c6.png",
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
    time: "30 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/109b4d86-ae87-42b1-bfcd-9820293572ba.png",
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
    time: "30 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/524a4d99-ee93-4e3a-b722-8c2ed0b49896.png",
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
    time: "35 mins",
    difficulty: "Medium" as const,
      image: "/lovable-uploads/d6a24561-0cb3-466b-9c85-23deaf4e8c01.png",
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
    time: "15 mins",
    difficulty: "Easy" as const,
    image: "/lovable-uploads/02850e1f-748e-4b69-8e14-167724bfe88e.png",
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
    time: "20 mins",
    difficulty: "Easy" as const,
    image: "/lovable-uploads/3a4e14c0-5409-4096-a828-dfdb075dc80e.png",
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
    time: "30 mins",
    difficulty: "Hard" as const,
    image: "/lovable-uploads/d37ae5a1-2349-48b8-b47c-5b8f3eb90024.png",
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
    time: "20 mins",
    difficulty: "Easy" as const,
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
    time: "25 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/c2380026-cb00-45ab-88f1-2737afb75c42.png",
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
    time: "20 mins",
    difficulty: "Easy" as const,
    image: "/lovable-uploads/f7536959-092a-456e-b615-c682d4db7523.png",
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
    time: "25 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/0a389271-9491-4676-9e44-8013130aa192.png",
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
    time: "20 mins",
    difficulty: "Easy" as const,
    image: "/lovable-uploads/83a15682-649e-423d-a2b5-6c8cfe88543e.png",
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
    time: "20 mins",
    difficulty: "Easy" as const,
    image: "/lovable-uploads/7bb7ca2a-744a-4271-b0f7-8a5444f3b145.png",
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
  },
  {
    id: "dabeli",
    name: "Dabeli",
    description: "A spicy, sweet, tangy Gujarati street food made of mashed potato stuffing inside a bun, topped with sev, chutneys, and pomegranate.",
    time: "20 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/a2781521-8c70-4d39-8ff1-32a6cef49cb3.png",
    ingredients: [
      "4 pav buns",
      "2 boiled potatoes",
      "2 tbsp Dabeli masala",
      "2 tbsp tamarind-date chutney",
      "1 tbsp garlic chutney",
      "1 tbsp oil",
      "Salt to taste",
      "Garnish: roasted peanuts, pomegranate, nylon sev, coriander"
    ],
    instructions: [
      "Mash potatoes. Heat oil and sauté potatoes with Dabeli masala and salt.",
      "Slice buns, apply garlic chutney and tamarind chutney on inner sides.",
      "Stuff with potato mix and press. Toast on tawa with butter or ghee.",
      "Garnish with sev, peanuts, coriander, pomegranate.",
      "Tip: Wrap in foil for a perfect on-the-go snack."
    ]
  },
    {
      id: "moraiyo-ni-khichdi",
      name: "Moraiyo Ni Khichdi",
      description: "A light and wholesome vrat-friendly khichdi made from barnyard millet (moraiyo), mildly spiced and perfect for fasting days.",
      time: "25 mins",
    difficulty: "Easy" as const,
    image: "/lovable-uploads/6ca2f026-b3ed-4bf4-ab48-14f9e267d4c4.png",
    ingredients: [
      "1/2 cup barnyard millet (moraiyo)",
      "1 tbsp ghee",
      "1 tsp cumin seeds",
      "1 chopped green chili",
      "1 boiled potato, diced",
      "1/4 tsp black pepper powder",
      "Rock salt to taste",
      "1.5 cups water",
      "Coriander to garnish"
    ],
    instructions: [
      "Wash and drain millet.",
      "Heat ghee, add cumin and chili. Sauté.",
      "Add potatoes and millet, mix well.",
      "Add water, salt, pepper. Cover and cook until soft.",
      "Garnish and serve hot.",
      "Tip: Add crushed peanuts for a protein boost."
    ]
  },
      {
        id: "banana-almonds-smoothie",
        name: "Banana & Almonds Smoothie",
        description: "A nourishing breakfast drink made with ripe bananas, soaked almonds, and milk — energy-packed and naturally sweet.",
        time: "5 mins",
        difficulty: "Easy" as const,
        image: "/lovable-uploads/a0778050-4d0a-4b5f-aaf3-dc7cd7e0e071.png",
    ingredients: [
      "2 ripe bananas",
      "8–10 almonds (soaked, peeled)",
      "1 cup chilled milk",
      "1/4 tsp cardamom powder",
      "1 tsp honey (optional)",
      "Ice cubes (optional)"
    ],
    instructions: [
      "Blend bananas and almonds until smooth.",
      "Add milk, cardamom, honey, and ice. Blend again.",
      "Serve chilled.",
      "Tip: Replace milk with almond or oat milk for a vegan version."
    ]
  },
      {
        id: "green-chutney",
        name: "Green Chutney (Coriander-Mint)",
        description: "A spicy, tangy chutney made with coriander and mint leaves — a must-have dip for Indian snacks and chaats.",
        time: "10 mins",
        difficulty: "Easy" as const,
        image: "/lovable-uploads/0ba78248-f01f-40b6-ba3a-fe83058f3778.png",
    ingredients: [
      "1 cup coriander leaves",
      "1/2 cup mint leaves",
      "2 green chilies",
      "1-inch ginger",
      "1 tbsp lemon juice",
      "Salt to taste",
      "Water as needed"
    ],
    instructions: [
      "Blend all ingredients into a smooth paste.",
      "Add water gradually to reach desired consistency.",
      "Store in an airtight container in the fridge.",
      "Tip: Add a pinch of sugar for balance if it's too spicy."
    ]
  },
    {
      id: "gujarati-kobi-marcha-sambharo",
      name: "Gujarati Kobi Marcha No Sambharo",
      description: "A quick stir-fry made with cabbage and green peppers — lightly spiced and tempered, served warm as a side or snack.",
      time: "15 mins",
       difficulty: "Easy" as const,
       image: "/lovable-uploads/af9e454b-59c9-4706-bcdd-4e35ebd72b58.png",
    ingredients: [
      "1 cup shredded cabbage",
      "1/2 cup sliced green peppers",
      "1 tsp mustard seeds",
      "1 tsp sesame seeds",
      "1 tbsp oil",
      "1/4 tsp turmeric",
      "Salt to taste",
      "Pinch of asafoetida",
      "Lemon juice to taste"
    ],
    instructions: [
      "Heat oil, add mustard, sesame, asafoetida.",
      "Add cabbage and peppers. Stir-fry.",
      "Add turmeric and salt. Cook 2–3 minutes.",
      "Finish with lemon juice and serve warm.",
      "Tip: Best enjoyed fresh, not overcooked."
    ]
  },
      {
        id: "athela-marcha",
        name: "Athela Marcha",
        description: "A spicy, tangy stir-fried green chili pickle — commonly eaten with thepla or khakhra.",
        time: "10 mins",
        difficulty: "Easy" as const,
        image: "/lovable-uploads/bc1b56bd-515d-440a-9203-f3658318d038.png",
    ingredients: [
      "10–12 green chilies (mild)",
      "2 tbsp crushed mustard seeds",
      "1 tbsp fenugreek seeds",
      "1/4 tsp asafoetida",
      "1/2 tsp turmeric",
      "2 tbsp lemon juice",
      "Salt to taste",
      "2 tbsp oil"
    ],
    instructions: [
      "Slit green chilies.",
      "Heat oil, add fenugreek, asafoetida, turmeric, mustard.",
      "Add chilies and salt. Sauté for 3 minutes.",
      "Turn off heat and mix in lemon juice.",
      "Cool and store in a jar.",
      "Tip: Use Bhavnagari chilies for a milder version."
    ]
  },
    {
      id: "vada-pav-sliders",
      name: "Vada Pav Sliders",
      description: "A delicious twist on the classic Mumbai vada pav — these cheesy, buttery sliders are packed with bold flavors, layered with chutneys, and toasted to perfection.",
      time: "30 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/166586ff-3443-473e-8378-8a35e9d6f32c.png",
    ingredients: [
      "Green Paste:",
      "20 garlic cloves",
      "3 green chilies",
      "Handful of coriander leaves",
      "Potato Filling:",
      "3 tbsp oil",
      "1 tbsp mustard seeds",
      "10 curry leaves",
      "A pinch of hing",
      "1 tbsp turmeric powder",
      "3 boiled, mashed potatoes",
      "1 tbsp rock salt",
      "Dry Garlic Chutney:",
      "10 garlic cloves",
      "7–8 dry red chilies",
      "2 tbsp roasted peanuts",
      "2 tbsp sesame seeds",
      "2 tbsp desiccated coconut",
      "1 tsp Kashmiri red chili powder",
      "Salt to taste",
      "Pinch of hing",
      "Assembly:",
      "6 pav buns",
      "Amul butter",
      "Garlic butter",
      "Green chutney",
      "Cheese slices",
      "Grated cheese",
      "Whole green chilies (for serving)"
    ],
    instructions: [
      "Blend garlic, chilies, and coriander into a green paste.",
      "Heat oil, add mustard seeds, curry leaves, hing, turmeric. Add green paste and sauté.",
      "Mix in mashed potatoes and rock salt. Cook till combined.",
      "For chutney: grind all dry chutney ingredients into a coarse powder.",
      "Slice pav horizontally. Layer with butter, green chutney, potato filling, cheese slice, dry chutney, grated cheese.",
      "Close with top bun, brush garlic butter. Toast until golden and cheese melts.",
      "Serve hot with whole green chilies.",
      "Tip: Wrap in foil to make it a great travel snack."
    ]
  },
    {
      id: "gehun-atta-no-shiro",
      name: "Gehun Atta No Shiro",
      description: "A rich, warm halwa made from whole wheat flour, ghee, and jaggery — a classic Gujarati comfort dessert often served during festivities.",
      time: "20 mins",
      difficulty: "Easy" as const,
      image: "/lovable-uploads/3d6774f3-f28d-4f79-b662-c2a62b598b76.png",
    ingredients: [
      "1 cup whole wheat flour",
      "1/2 cup ghee",
      "3/4 cup jaggery (grated or powdered)",
      "2 cups water",
      "Pinch of cardamom powder"
    ],
    instructions: [
      "Heat ghee in a pan, add wheat flour. Roast on low flame until golden and aromatic.",
      "Meanwhile, dissolve jaggery in water and warm slightly.",
      "Slowly add jaggery water to the roasted flour while stirring constantly.",
      "Cook till mixture thickens and ghee starts to release from sides.",
      "Add cardamom powder and mix well.",
      "Tip: Serve hot as prasad or dessert after lunch."
    ]
  },
      {
        id: "god-papdi",
        name: "God Papdi (Golpapdi)",
        description: "A quick Gujarati sweet made from wheat flour, jaggery, and ghee — crumbly, melt-in-mouth texture perfect for festivals or winter treats.",
        time: "15 mins",
        difficulty: "Easy" as const,
        image: "/lovable-uploads/0e55a688-fe48-46a0-be33-cc6e853dcf3b.png",
    ingredients: [
      "1 cup whole wheat flour",
      "1/2 cup ghee",
      "3/4 cup jaggery (grated or powdered)",
      "1/4 tsp cardamom powder"
    ],
    instructions: [
      "Heat ghee in a pan, add flour, and roast on low flame until golden brown and aromatic.",
      "Turn off the heat and let it cool slightly (just enough so jaggery doesn't melt too quickly).",
      "Add jaggery and cardamom, mix quickly till it blends into the flour.",
      "Pour mixture into a greased plate and flatten evenly.",
      "Cut into squares while still warm. Let it cool and set.",
      "Tip: Store in airtight container for 7–10 days. Great winter energy booster."
    ]
  },
      {
        id: "til-gud-ni-chikki",
        name: "Til Gud Ni Chikki",
        description: "A crunchy brittle made of sesame seeds and jaggery, traditionally prepared during Makar Sankranti — healthy, sweet, and full of calcium.",
        time: "15 mins",
    difficulty: "Medium" as const,
    image: "/lovable-uploads/27564975-020b-46be-bc14-75ef543cc315.png",
    ingredients: [
      "1/2 cup white sesame seeds",
      "1/2 cup jaggery (grated or powdered)",
      "1 tsp ghee"
    ],
    instructions: [
      "Dry roast sesame seeds till golden and aromatic. Set aside.",
      "In another pan, heat jaggery with 1 tsp ghee on low flame till it melts and becomes frothy.",
      "Add roasted sesame seeds and mix quickly.",
      "Pour onto greased surface and flatten using rolling pin.",
      "Cut into squares or diamonds while warm.",
      "Tip: Store in an airtight container. Enjoy as a healthy sweet snack."
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