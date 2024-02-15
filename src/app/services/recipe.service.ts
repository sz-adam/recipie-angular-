import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Ingredient } from '../model/ingredient';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingservice: ShoppingService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'A test recepie',
      'this test dsdsa',
      'https://images.pexels.com/photos/6287519/pexels-photo-6287519.jpeg?auto=compress&cs=tinysrgb&w=600',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
    ),
    new Recipe(
      'Ab test recepie',
      'this test ',
      'https://images.pexels.com/photos/6287519/pexels-photo-6287519.jpeg?auto=compress&cs=tinysrgb&w=600',
      [new Ingredient('Milch', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredient: Ingredient[]){
    this.shoppingservice.addIngredients(ingredient);
  }
}
