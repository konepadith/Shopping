import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A Test Recipe', 'This is simply a test','https://i8.amplience.net/i/traeger/Pittman-Tomahawk-Steak_Traeger-Wood-Fired-Grills_RE_HE_M?w=500&sm=aspect&aspect=5:3&scaleFit=poi&$poi2$&fmt=webp'),
    new Recipe('A Test Recipe', 'This is simply a test','https://i8.amplience.net/i/traeger/Pittman-Tomahawk-Steak_Traeger-Wood-Fired-Grills_RE_HE_M?w=500&sm=aspect&aspect=5:3&scaleFit=poi&$poi2$&fmt=webp'),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
