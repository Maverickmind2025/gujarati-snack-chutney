import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
  time: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const dishColors: Record<string, string> = {
  "upma": "bg-orange-100 text-orange-800 border-orange-200",
  "instant-dhokla": "bg-green-100 text-green-800 border-green-200", 
  "bata-pauna": "bg-blue-100 text-blue-800 border-blue-200",
  "sev-khamani": "bg-purple-100 text-purple-800 border-purple-200",
  "khichu": "bg-yellow-100 text-yellow-800 border-yellow-200"
};

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full h-fit transition-all duration-300 hover:shadow-warm hover:-translate-y-1 border border-border/30 bg-card/95 backdrop-blur-sm rounded-xl overflow-hidden group">
      <div className="flex gap-4 p-4">
        {/* Image placeholder */}
        <div className="flex-shrink-0">
          <div className="w-[150px] h-[150px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-border/20">
            {recipe.image ? (
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-center">
                <span className="text-4xl mb-2 block">🍽️</span>
                <span className="text-xs text-muted-foreground">Recipe Image</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                {recipe.name}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base line-clamp-3">
              {recipe.description}
            </p>
            
            {/* Time and Difficulty Badges */}
            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                ⏱️ {recipe.time}
              </Badge>
              <Badge 
                variant="outline" 
                className={cn(
                  "text-xs border-border/30",
                  recipe.difficulty === "Easy" && "bg-green-50 text-green-700 border-green-200",
                  recipe.difficulty === "Medium" && "bg-orange-50 text-orange-700 border-orange-200",
                  recipe.difficulty === "Hard" && "bg-red-50 text-red-700 border-red-200"
                )}
              >
                ⚙️ {recipe.difficulty}
              </Badge>
            </div>
            
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              size="sm"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              {isExpanded ? "Hide Recipe" : "View Recipe"}
              {isExpanded ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 space-y-6 animate-accordion-down border-t border-border/20 pt-4">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">Ingredients:</h4>
            <ul className="space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground text-sm">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">Instructions:</h4>
            <ol className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-foreground leading-relaxed text-sm">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </Card>
  );
};

export default RecipeCard;