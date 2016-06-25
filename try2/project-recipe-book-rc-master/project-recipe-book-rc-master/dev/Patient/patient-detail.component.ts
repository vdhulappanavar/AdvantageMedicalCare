import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {RouteSegment} from "@angular/router";
import { IPatient } from './patient';
import { PatientService } from './patient.service';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl:  'app/Patient/patient-detail.component.html',
    directives: [StarComponent]
})
export class PatientDetailComponent implements OnInit {
    pageTitle: string = 'Patient Detail';
    patient: IPatient;
    _patientIndex;
    errorMessage: string;

    constructor(private _routeSegment: RouteSegment,private _patientService: PatientService,
        private _router: Router ) {
    }

     routerOnActivate(curr:RouteSegment, prev?:RouteSegment):void {
        let itemIndex = curr.getParam('id');
        this._patientIndex = itemIndex;
    }

    ngOnInit() {
        this.patient = this._patientService.getPatient(this._patientIndex !== null ? +this._patientIndex : null) || null;
    }

    

    onBack(): void {
        this._router.navigate(['Patients']);
    }

}
