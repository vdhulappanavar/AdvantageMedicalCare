import {Component} from '@angular/core';
import {Recipe} from "../shared/recipe";
import {OnInit} from "@angular/core";
import {RecipeService} from "./recipe.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-recipe-list',
    template: `
        <button class="btn" (click)="onAddRecipe()">Add Recipe</button>
        <ul>
            <li *ngFor="let item of recipes" (click)="onSelect(item)">
                <div class="img">
                    <img [src]="item.imageUrl" alt="Recipe">
                </div>
                <div class="text">{{item.name}}</div>
            </li>
        </ul>
    `
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private _recipeService: RecipeService, private _router: Router) {}

    onSelect(item: Recipe) {
        this._router.navigate(['/recipes', Number(this._recipeService.getRecipeIndex(item))]);
    }

    onAddRecipe() {
        this._router.navigate(['/recipes', 'create']);
    }

    ngOnInit():any {
        this.recipes = this._recipeService.getAllRecipes();
    }
}