import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../services/recipe.service';
import {Recipe} from '../models/recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authservice: AuthService) {

  }

  storeRecipes() {
    const token = this.authservice.getToken();
    return this.http.put('https://easyshop-4af87.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authservice.getToken();
    // return this.http.get<Recipe[]>('https://easyshop-4af87.firebaseio.com/recipes.json?auth=' + token)
    return this.http.get('https://easyshop-4af87.firebaseio.com/recipes.json?auth=' + token, {observe: 'body', responseType: 'json'})
      .subscribe(
        (response) => {
          // TODO: Error in type
          const recipes: any = response;
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
