import {Injectable } from 'angular2/core';
import {IMedicine} from './medicine';

import {Http , Response} from 'angular2/http';
import {Observable } from 'rxjs/Observable'; 

@Injectable()
export class MedicineService{
    
    private _medicineUrl = 'api/medicines/medicines.json';
    
    constructor(private _http : Http){}
	getMedicines() : Observable<IMedicine[]>{        
		return this._http.get(this._medicineUrl).map( (response: Response) => <IMedicine[]>response.json() ).do(  
            data => console.log("ALL" + JSON.stringify(data)) ).catch(this.handelError);
        		
	}
    getMedicine(id: number): Observable<IMedicine> {
        return this.getMedicines()
            .map((medicines: IMedicine[]) => medicines.find(p => p.medicineId === id));
    }
    private handelError(error : Response){
        console.log(error);
     return Observable.throw(error.json().error || 'Server Error');   
    }
}