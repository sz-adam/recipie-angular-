import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]= [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',15)
  ];
  ngOnInit(): void {}

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
