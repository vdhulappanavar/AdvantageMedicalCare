import {Component , OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {IPatient} from './Patient'
import {PatientFilterPipe} from './patient-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {PatientService} from './patient.service';
@Component({
	
	templateUrl : 'templates/patient-list.component.html',
    selector : "pt-list",
    directives : [StarComponent , ROUTER_DIRECTIVES],

    pipes : [PatientFilterPipe],    
})
export class PatientListComponent implements OnInit{
	pageTitle = "Patient List";
    imageWidth = 50;
    imageMArgin = 2;
    showImage = false;
    listFilter = "";	
	patients : IPatient[] ;
    errorMessage : string ;
    constructor(private _patientService : PatientService){        
    }
    
    toggleImage() : void
    {
        this.showImage = !this.showImage;
    }
    
    ngOnInit() : void{
        this._patientService.getAllPatients();
    }
    
    OnRatingClicked(message : string) : void {
        this.pageTitle = "Patient List: " + message;
    }
}