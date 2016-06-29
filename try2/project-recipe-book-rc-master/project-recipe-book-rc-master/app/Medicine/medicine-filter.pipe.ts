import { Pipe , PipeTransform } from 'angular2/core';
import {IMedicine} from './medicine';

@Pipe({
	name : 'medicineFilter'
})

export class MedicineFilterPipe implements PipeTransform{
	transform(value: IMedicine[] , args : string[]) : IMedicine[] {
		let filter : string = args[0] ? args[0].toLocaleLowerCase() : null;
		return filter  ? value.filter((medicine : IMedicine) => medicine.medicineName.toLowerCase().indexOf(filter) != -1) : value ; 
	}	
}