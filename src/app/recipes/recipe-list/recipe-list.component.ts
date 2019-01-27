import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
new Recipe('A Test Recipe', 'This is simply a test', 'https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
