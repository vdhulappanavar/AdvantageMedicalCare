import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IMedicine } from './medicine';
import { MedicineService } from './medicine.service';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl:  'app/Medicine/medicine-detail.component.html',
    directives: [StarComponent]
})
export class MedicineDetailComponent implements OnInit {
    pageTitle: string = 'Medicine Detail';
    medicine: IMedicine;
    errorMessage: string;

    constructor(private _medicineService: MedicineService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.medicine) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getMedicine(id);
        }
    }

    getMedicine(id: number) {
        this._medicineService.getMedicine(id)
            .subscribe(
            medicine => this.medicine = medicine,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Medicines']);
    }

}
