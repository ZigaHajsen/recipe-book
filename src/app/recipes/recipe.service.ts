import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=960,872'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply another test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=960,872'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
