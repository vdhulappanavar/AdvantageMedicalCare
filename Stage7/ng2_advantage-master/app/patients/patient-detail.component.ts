import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

@Component({
    templateUrl: 'app/patients/patient-detail.component.html'
})
export class PatientDetailComponent  {
    pageTitle: string = 'Patient Detail';
    
    constructor(private _routeParams: RouteParams,
                private _router: Router) {
          let id = +this._routeParams.get('id');
          this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['Patients']);
    }

}
