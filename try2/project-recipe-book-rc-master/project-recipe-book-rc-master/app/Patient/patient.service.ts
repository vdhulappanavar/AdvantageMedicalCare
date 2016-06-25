import {Injectable } from 'angular2/core';
import {IPatient} from './patient';

import {Http , Response} from 'angular2/http';
import {Observable } from 'rxjs/Observable'; 

@Injectable()
export class PatientService{
    
    private _patientUrl = 'api/patients/patients.json';
    
    constructor(private _http : Http){console.log("in ctor");}
	getPatients() : Observable<IPatient[]>{        
		return this._http.get(this._patientUrl).map( (response: Response) => <IPatient[]>response.json() ).do(  
            data => console.log("ALL" + JSON.stringify(data)) ).catch(this.handelError);
        		
	}
    getPatient(id: number): Observable<IPatient> {
        return this.getPatients()
            .map((patients: IPatient[]) => patients.find(p => p.patientId === id));
    }
    private handelError(error : Response){
        console.log(error);
     return Observable.throw(error.json().error || 'Server Error');   
    }
}