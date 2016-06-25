import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS , ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {PatientListComponent} from './patientlist.component';
import {PatientDetailsComponent} from './patientDetatils.component';


import {RouteConfig} from 'angular2/router';

@RouteConfig([
	
	{ path : '/patientList' , name : 'PatientList' , component :  PatientListComponent , useAsDefault : true} , 
	
	{path: '/patientSelect' , name : 'PatientSelect' , component : PatientDetailsComponent } 
    ])

@Component({
	selector : 'pt-app',
	template : `					
					<div class="container">
					HELLO
						<router-outlet></router-outlet>
					</div>
				`,
    directives : [ ROUTER_DIRECTIVES] , 
	providers : [ HTTP_PROVIDERS , ROUTER_PROVIDERS]
})

export class PateintComponent{
	pageTitle = "Acme Product Managment";
}