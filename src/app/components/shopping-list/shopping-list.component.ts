import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) =>{
      this.ingredients = ingredients
    });
  }
  onEditItem(index: number){
    this.shoppingService.startedEditing.next(index)
  }
}
