import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipes/recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
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

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  constructor(private router: Router,
              private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        });
  }

}
