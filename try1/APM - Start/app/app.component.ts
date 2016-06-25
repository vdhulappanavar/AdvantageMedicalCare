import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS , ROUTER_DIRECTIVES} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';
import {MedicineListComponent} from './Medicine/medicine-list.component';
import {MedicineDetailComponent} from './Medicine/medicine-detail.component';
import{MedicineService} from './Medicine/medicine.service';
import {PatientListComponent} from './Patient/patient-list.component';
import {PatientDetailComponent} from './Patient/patient-detail.component';
import{PatientService} from './Patient/patient.service';
import {BillComponent} from './Bill/bill.component';
import {PatientMedicineAddComponent} from './Bill/patient-Medicine-add.component';
import 'rxjs/Rx'; //Load all features

import {RouteConfig} from 'angular2/router';

@RouteConfig([
	
	{ path : '/welcome' , name : 'Welcome' , component :  WelcomeComponent , useAsDefault : true} , 
	
	{path: '/medicines' , name : 'Medicines' , component : MedicineListComponent } ,
	
	{path : '/medicine/:id' , name : 'MedicineDetail' , component : MedicineDetailComponent},
	
	{path : '/patient' , name : 'Patients' , component : PatientListComponent},
	
	{path : '/patient/:id' , name : 'PatientDetail' , component : PatientDetailComponent},
	
	{path : '/Bill' , name : 'Bill' , component : BillComponent},
	
	{path : '/Billing' , name : 'Billing' , component : PatientMedicineAddComponent}
	
    ])

@Component({
	selector : 'pm-app',
	template : `
					<div>
						<nav class="navbar navbar-default">
							<div class="container-fluid">
								<a class="navbar-brand">{{pageTitle}}</a>
								<ul class="nav navbar-nav" >
									<li [routerLink] = "['Welcome']" style="pointer:cursor"><a>Home</a></li>	
									<li [routerLink] = "['Medicines']" style="pointer:cursor"><a>Medicine List</a></li>
									<li [routerLink] = "['Patients']" style="pointer:cursor"><a>Patient List</a></li>									
									<li [routerLink] = "['Bill']" style="pointer:cursor"><a>Bill</a></li>
								</ul>
							</div>
						</nav>
					</div>
					<div class="container">
						<router-outlet></router-outlet>
					</div>
				`,
    directives : [ ROUTER_DIRECTIVES] , 
	providers : [MedicineService , PatientService , HTTP_PROVIDERS , ROUTER_PROVIDERS]
})

export class AppComponent{
	pageTitle = "Advantage Elder Care";
}