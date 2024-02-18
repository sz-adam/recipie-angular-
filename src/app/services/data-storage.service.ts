import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe';
import { RecipeService } from './recipe.service';
import { map } from 'rxjs';

import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}
  apiUrl = environment.apiUrl;

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(
        `${environment.apiUrl}`,
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        `${environment.apiUrl}`,
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        })
      )
      .subscribe((recipes) => {
        this.recipesService.setRecipes(recipes);
      });
  }
}
