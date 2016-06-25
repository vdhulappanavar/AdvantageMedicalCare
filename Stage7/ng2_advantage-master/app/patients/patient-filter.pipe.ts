import { PipeTransform, Pipe } from 'angular2/core';
import { IPatient } from './patient';

@Pipe({
    name: 'patientFilter'
})
export class PatientFilterPipe implements PipeTransform {

    transform(value: IPatient[], args: string[]): IPatient[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((patient: IPatient) =>
            patient.patientName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}