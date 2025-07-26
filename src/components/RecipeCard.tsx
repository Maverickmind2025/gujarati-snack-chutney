import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full bg-card shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-foreground flex items-center justify-between">
          {recipe.name}
          <span className="text-3xl ml-2">🥘</span>
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base leading-relaxed">
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