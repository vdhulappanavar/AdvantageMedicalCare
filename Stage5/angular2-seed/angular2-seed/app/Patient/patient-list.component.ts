import {Component , OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {IPatient} from './Patient'
//import {ProductFilterPipe} from './product-filter.pipe';
import {PatientService} from './patient.service';

@Component({
	
	templateUrl : 'app/Patient/patient-list.component.html',
    directives : [ROUTER_DIRECTIVES],
    styleUrls : ['app/Patient/patient-list.component.css']
    //pipes : [ProductFilterPipe],    
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
        //this._patientService.getPatientList().subscribe( patients =>this.patients = patients ,error => this.errorMessage = <any>error  );
        this.patients = this._patientService.getPatientList();
    }   
    
}