import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'], 
})
export class RecipeComponent implements OnInit {
  constructor() {}
  selectedRecipe!: Recipe;
  ngOnInit(): void {
    
  }
}
