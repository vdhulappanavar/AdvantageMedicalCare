import { Pipe , PipeTransform } from 'angular2/core';
import {IPatient} from './patient';

@Pipe({
	name : 'productFilter'
})

export class ProductFilterPipe implements PipeTransform{
	transform(value: IPatient[] , args : string[]) : IPatient[] {
		let filter : string = args[0] ? args[0].toLocaleLowerCase() : null;
		return filter  ? value.filter((patient : IPatient) => patient.Name.toLowerCase().indexOf(filter) != -1) : value ; 
	}	
}