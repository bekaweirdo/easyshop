import {Recipe} from '../models/recipes/recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
   public recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg'),
    new Recipe(' Another Test Recipe', 'This is simply a test',
      'https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
