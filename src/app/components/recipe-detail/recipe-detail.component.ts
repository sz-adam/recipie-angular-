import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id: number = 0;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe =this.recipeService.getRecipe(this.id);
    });
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
