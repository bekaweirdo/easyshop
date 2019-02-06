import {Recipe} from '../models/recipes/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg', [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(' Another Test Recipe', 'This is simply a test',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg', [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1)
      ]),
  ];

  // getRecipes() {
  //   return this.recipes.slice();
  // }
  constructor(private slService: ShoppingListService) {

  }

  getRecipe(id: number) {
    // slice = copy of array
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
