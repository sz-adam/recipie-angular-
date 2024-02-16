import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent,
      },
      { path: ':id', component: RecipeDetailComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
