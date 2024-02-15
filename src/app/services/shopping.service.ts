import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() {}

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
