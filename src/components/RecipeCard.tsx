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
    <Card className="w-full transition-all duration-300 hover:shadow-xl border border-border/30 bg-card/90 backdrop-blur-sm rounded-xl overflow-hidden">
      <CardHeader className="pb-4 space-y-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
            {recipe.name}
          </CardTitle>
          <Badge 
            variant="secondary" 
            className={cn("text-xs font-medium", dishColors[recipe.id] || "bg-gray-100 text-gray-800")}
          >
            Gujarati
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed text-base">
          {recipe.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          className="w-full mb-4 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          {isExpanded ? "Hide Recipe" : "View Recipe"}
          {isExpanded ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </Button>
        
        {isExpanded && (
          <div className="space-y-6 animate-accordion-down">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Ingredients:</h4>
              <ul className="space-y-1">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-foreground">{ingredient}</span>
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
                    <span className="text-foreground leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecipeCard;