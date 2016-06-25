import {Component , OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {IMedicine} from './Medicine'
import {MedicineFilterPipe} from './medicine-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {MedicineService} from './medicine.service';
@Component({
	
	templateUrl : 'app/Medicine/medicine-list.component.html',
    directives : [StarComponent , ROUTER_DIRECTIVES],
    styleUrls : ['app/Medicine/medicine-list.component.css'],
    pipes : [MedicineFilterPipe],    
})
export class MedicineListComponent implements OnInit{
	pageTitle = "Medicine List";
    imageWidth = 50;
    imageMArgin = 2;
    showImage = false;
    listFilter = "";	
	medicines : IMedicine[] ;
    errorMessage : string ;
    constructor(private _medicineService : MedicineService){        
    }
    
    toggleImage() : void
    {
        this.showImage = !this.showImage;
    }
    
    ngOnInit() : void{
        this._medicineService.getMedicines().subscribe( medicines =>this.medicines = medicines ,error => this.errorMessage = <any>error  );
    }
    
    OnRatingClicked(message : string) : void {
        this.pageTitle = "Medicine List: " + message;
    }
}