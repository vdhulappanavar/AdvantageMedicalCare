import {Component} from 'angular2/core'

import {PatientListComponent} from './patient-list.component';
import {MedicineListComponent} from './medicine-list.component';

import {PatientService} from './patient.service';
import {MedicineService} from './medicine.service';



@Component({
	template : `
					
					<div>
						<div class="container">
							<h1>Select Patient</h1>
							<pt-list></pt-list>
						</div>
					</div>
				`,
	directives : [PatientListComponent],
	providers : [PatientService , MedicineService ]
})

export class BillComponent{
}