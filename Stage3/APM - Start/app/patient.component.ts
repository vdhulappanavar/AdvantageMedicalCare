import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS , ROUTER_DIRECTIVES} from 'angular2/router';
import {PatientListComponent} from './patientlist.component';


import {RouteConfig} from 'angular2/router';

@RouteConfig([
	
	{ path : '/patient/patientlist' , name : 'PatientList' , component :  PatientListComponent , useAsDefault : true} , 
	
	{path: '/products' , name : 'Products' , component : ProductListComponent } , 
	
	{path : '/product/:id' , name : 'ProductDetail' , component : ProductDetailComponent} ,
	
	{ path : '/patientList' , name:"PatientList" , component : PatientListComponent}
    ])

@Component({
	selector : 'pt-app',
	template : `					
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