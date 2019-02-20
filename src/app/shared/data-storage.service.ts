import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../services/recipe.service';
import {Recipe} from '../models/recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {

  }

  storeRecipes() {
    return this.http.put('https://easyshop-4af87.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://easyshop-4af87.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          // TODO: Error in type
          const recipes: any = response;
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
