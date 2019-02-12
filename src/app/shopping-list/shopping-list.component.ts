import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../services/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private sLService: ShoppingListService) {
  }

  onEditItem(index: number) {
    this.sLService.startedEditing.next(index);
  }

  ngOnInit() {
    this.ingredients = this.sLService.getIngredients();
    this.subscription = this.sLService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
