import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test description',
      'https://p0.pikist.com/photos/666/25/food-meat-recipe-power-pork-dishes.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test description',
      'https://p0.pikist.com/photos/666/25/food-meat-recipe-power-pork-dishes.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
