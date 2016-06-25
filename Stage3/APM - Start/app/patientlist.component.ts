import {Component} from 'angular2/core';
import {PatientListService} from './patientlist.service';

@Component({
	selector : "pt-list" ,
	template : `	
				<div style="border-style: solid; width:25%" class="scrollable-menu">
					<div *ngFor="#patient of patients">
						<div class="media" style="padding: 10px 10px 10px 10px">
							<div class="media-left">
								<a href="#">
								<img class="media-object" [src]="patient.imgUrl" width="100" height="100" style="border-radius:25px">
								</a>
							</div>
							<div class="media-body">
								<h4 class="media-heading">{{patient.Name}}</h4>
								{{patient.age}}						
							</div>
						</div>
					</div>
				</div>

				`,
	providers : [PatientListService]
})

export class PatientListComponent{
	title="HELLO";	
	patients;	
	constructor(patientservice : PatientListService){
		this.patients =  patientservice.getpatientList(); 
	}
}