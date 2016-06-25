import { Injectable } from 'angular2/core';
import { IPatient } from './patient';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PatientService {
    private _patientUrl = 'api/patients/patients.json';

    constructor(private _http: Http) { }

    getPatients(): Observable<IPatient[]> {
        return this._http.get(this._patientUrl)
            .map((response: Response) => <IPatient[]>response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}