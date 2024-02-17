import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number = 0;
  editMode: boolean = false;
  recipeForm: FormGroup |any

  constructor(private router: ActivatedRoute, private recipeService : RecipeService) {}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm()
    });
  }

  onSubmit(){
    console.log(this.recipeForm)
  }

  onAddIngredient(){
   ( <FormArray>this.recipeForm.get('ingredients')).push(
    new FormGroup({
      'name': new FormControl(),
      'amount': new FormControl(),
    })
   )
  }
  
  private initForm(): void {
    
    let recipeName ='';
    let recipeImagePath ='';
    let recipeDescription ='';
   let recipeIngredients = new FormArray<FormGroup<{ name: FormControl<string | null>; amount: FormControl<number | null>; }>>([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath =recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount),
            
          }))
        }
      }

    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    })
  }


}
