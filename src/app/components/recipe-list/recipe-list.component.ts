import { Component, OnInit,  } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  
  constructor(private RecipeService:RecipeService) {}
  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
  }

}
