import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IPatient } from './patient';
import { PatientService } from './patient.service';

@Component({
    //templateUrl:  'app/Product/product-detail.component.html'
    template : `hello`    
})
export class PatientDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
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
            this.getProduct(id);
        }
    }

    getProduct(id: number) {
        this.patient = this._patientService.getPatient(id)
            
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }

}
