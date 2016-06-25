import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IPatient } from './patient'
import { PatientFilterPipe } from './patient-filter.pipe';

import { PatientService } from './patient.service';


@Component({
    selector: 'pm-patients',
    templateUrl: 'app/patients/patient-list.component.html',
    styleUrls: ['app/patients/patient-list.component.css'],
    pipes: [PatientFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class PatientListComponent implements OnInit {
    pageTitle: string = 'Patient List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
 
     patients: IPatient[];

    constructor(private _patientService: PatientService){
        
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
       this._patientService.getPatients()
            .subscribe(
                patients => this.patients = patients,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Patient List: ' + message;
    }
}