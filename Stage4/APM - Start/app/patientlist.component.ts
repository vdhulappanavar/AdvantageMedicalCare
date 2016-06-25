import {Component} from 'angular2/core';
import {PatientListService} from './patientlist.service';

@Component({
	selector : "pt-list" ,
	template : `	
				<div style="border-style: solid; width:25%" *ngIf="showList">
					<div *ngFor="#patient of patients">
						<div class="media" style="padding: 10px 10px 10px 10px">
							<div class="media-left">
								<a href="#">
								<img class="media-object" [src]="patient.imgUrl" width="100" height="100" style="border-radius:25px">
								</a>
							</div>
							<div class="media-body">
								<h4 class="media-heading" style="cursor:pointer" (click)="showDetails({{patient.Name}})" [patients]={{patient.Name}}><a>{{patient.Name}}</a></h4>
								{{patient.age}}						
							</div>
						</div>
					</div>
				</div>

				<div *ngIf="!showList">
				      HELLO
					  <a (click) = "showPatientList()" style="cursor:pointer">BACK</a>
				</div>	
				<div>HELLO</div>

				`,
	providers : [PatientListService]
})

export class PatientListComponent{
	title="HELLO";	
	showList = true;
	patients;	
	constructor(patientservice : PatientListService){
		this.patients =  patientservice.getpatientList(); 
	}
	
	showDetails(patientId){
		this.showList=!this.showList;
	}
	
	showPatientList(){
		this.showList=!this.showList;
	}
}