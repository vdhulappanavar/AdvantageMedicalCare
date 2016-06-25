import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS , ROUTER_DIRECTIVES} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';
import {ProductListComponent} from './Product/product-list.component';
import {ProductDetailComponent} from './Product/product-detail.component';
import{ProductService} from './Product/product.service';
import {PatientListComponent} from './patientlist.component';
import 'rxjs/Rx'; //Load all features

import {RouteConfig} from 'angular2/router';

@RouteConfig([
	
	{ path : '/welcome' , name : 'Welcome' , component :  WelcomeComponent , useAsDefault : true} , 
	
	{path: '/products' , name : 'Products' , component : ProductListComponent } , 
	
	{path : '/product/:id' , name : 'ProductDetail' , component : ProductDetailComponent} ,
	
	{ path : '/patientList' , name:"PatientList" , component : PatientListComponent}
    ])

@Component({
	selector : 'pm-app',
	template : `
					<div>
						<nav class="navbar navbar-default">
							<div class="container-fluid">
								<a class="navbar-brand">{{pageTitle}}</a>
								<ul class="nav navbar-nav">
									<li [routerLink] = "['Welcome']"><a>Home</a></li>	
									<li [routerLink] = "['Products']"><a>Product List</a></li>
									<li [routerLink] = "['PatientList']" > <a>Patient List</a> </li>
								</ul>
							</div>
						</nav>
					</div>
					<div class="container">
						<router-outlet></router-outlet>
					</div>
				`,
    directives : [ ROUTER_DIRECTIVES] , 
	providers : [ProductService , HTTP_PROVIDERS , ROUTER_PROVIDERS]
})

export class AppComponent{
	pageTitle = "Acme Product Managment";
}