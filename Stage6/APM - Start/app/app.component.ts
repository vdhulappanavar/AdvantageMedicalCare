import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS , ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/Rx'; //Load all features
import {RouteConfig} from 'angular2/router';

import {LoginComponent} from './login.component';
import{PatientService} from './Patient/patient.service';
import{MedicineService} from './Medicine/medicine.service';
import {PatientListComponent} from './Patient/patient-list.component';
import {PatientDetailComponent} from './Patient/patient-detail.component';

@RouteConfig([
	
	{ path : '/welcome' , name : 'Welcome' , component :  LoginComponent , useAsDefault : true} , 
	
	{path: '/patients' , name : 'PatientList' , component : PatientListComponent } , 
	
	{path : '/product/:id' , name : 'ProductDetail' , component : PatientDetailComponent} ,
	
	//{ path : '/patient' , name:"Pati" , component : BillComponent}
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
	providers : [PatientService , MedicineService , HTTP_PROVIDERS , ROUTER_PROVIDERS]
})
export class AppComponent { }
