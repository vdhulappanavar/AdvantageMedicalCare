import {Component} from '@angular/core';
import {RecipesComponent} from "./recipe-book/recipes.component";
import {Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {TestComponent} from "./test.component";
import {PatientListComponent} from "./Patient/patient-list.component";
@Component({
    selector: 'my-app',
    template: `
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
					<a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['recipes']">Recipes</a></li>
                        <li><a [routerLink]="['shopping-list']">Shopping List</a></li>
                        <li><a [routerLink] = "['try']">Try</a></li>
                        <li><a [routerLink] = "['patientList']">Patient List</a></li>
                    </ul>
                 </div>                 
            </nav>
        </div>
        <div class="main">HELLO
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/recipes', component: RecipesComponent}, // useAsDefault: true => coming soon
    {path: '/shopping-list', component: ShoppingListComponent},
    {path: '/try', component: TestComponent},
    {path: '/patientList', component: PatientListComponent}
])
export class AppComponent {
    pageTitle = "Advantage Elder Care"
}