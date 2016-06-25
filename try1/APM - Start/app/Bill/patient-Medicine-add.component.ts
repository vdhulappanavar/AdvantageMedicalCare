import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IPatient } from './patient';
import { PatientService } from './patient.service';
import { StarComponent } from '../shared/star.component';


import {IMedicine} from './Medicine'
import {MedicineFilterPipe} from './medicine-filter.pipe';
import {MedicineService} from './medicine.service';

@Component({
    templateUrl:  'app/Bill/patient-Medicine-add.component.html',
    directives: [StarComponent],
    styleUrls : ['app/Medicine/medicine-list.component.css'],
    providers : [PatientService,MedicineService],
    pipes : [MedicineFilterPipe]
})
export class PatientMedicineAddComponent implements OnInit {
    pageTitle1: string = 'Patient Detail';
    pageTitle2: string = 'Medcine List';
    patient: IPatient;
    errorMessage: string;
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter = "";	
	medicines : IMedicine[] ;
    constructor(private _patientService: PatientService,
        private _router: Router,
        private _routeParams: RouteParams,
        private _medicineService : MedicineService) {
    }

    ngOnInit() {
        if (!this.patient) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getPatient(id);
        }
        this._medicineService.getMedicines().subscribe( medicines =>this.medicines = medicines ,error => this.errorMessage = <any>error  );
    }

    getPatient(id: number) {
        this._patientService.getPatient(id)
            .subscribe(
            patient => this.patient = patient,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Bill']);
    }
    toggleImage() : void
    {
        this.showImage = !this.showImage;
    }
    
    
    
    OnRatingClicked(message : string) : void {
        this.pageTitle = "Medicine List: " + message;
    }

}
