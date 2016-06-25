import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';

import { PatientListComponent } from './patients/patient-list.component';
import { PatientDetailComponent } from './patients/patient-detail.component';
import { PatientService } from './patients/patient.service';
@Component({
    selector: 'pm-app',
    template: `
    <div>
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Products']">Billing</a></li>
                </ul>
            </div>
        </nav>
     </div>
     
         
       <div class="col-md-6">
            <pm-products></pm-products>
        </div>
    
           <div class="col-md-6">
               <pm-patients></pm-patients>
               <div class='container'>                
                   <router-outlet></router-outlet>
                </div>     
           </div>    
     </div>
    ` ,
    directives: [ROUTER_DIRECTIVES, ProductListComponent, PatientListComponent],
    providers: [ProductService,
                PatientService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
  { path: '/products', name: 'Products', component: ProductListComponent },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent },    
   { path: '/patient/:id', name: 'PatientDetail', component: PatientDetailComponent }    
])
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}