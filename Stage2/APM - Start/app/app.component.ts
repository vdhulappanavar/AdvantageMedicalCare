import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS , ROUTER_DIRECTIVES} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';
import {ProductListComponent} from './Product/product-list.component';
import {ProductDetailComponent} from './Product/product-detail.component';
import{ProductService} from './Product/product.service';
import 'rxjs/Rx'; //Load all features

import {RouteConfig} from 'angular2/router';

@RouteConfig([
	
	{ path : '/welcome' , name : 'Welcome' , component :  WelcomeComponent , useAsDefault : true} , 
	
	{path: '/products' , name : 'Products' , component : ProductListComponent } , 
	
	{path : '/product/:id' , name : 'ProductDetail' , component : ProductDetailComponent}
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
									<li>
									
									      <select>
											<option value="volvo">Volvo</option>
											<option value="saab">Saab</option>
											<option value="opel">Opel</option>
											<option value="audi">Audi</option>
										  </select>
									</li>
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
	pageTitle = "Patient Managment";
}