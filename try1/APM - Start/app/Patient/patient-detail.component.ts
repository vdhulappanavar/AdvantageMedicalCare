import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

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
    errorMessage: string;

    constructor(private _patientService: PatientService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.patient) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getPatient(id);
        }
    }

    getPatient(id: number) {
        this._patientService.getPatient(id)
            .subscribe(
            patient => this.patient = patient,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Patients']);
    }

}
