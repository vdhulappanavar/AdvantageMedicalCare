import {Injectable} from "@angular/core";
import {Patient} from "./Patient";
import {PATIENTS} from "../mock/patient";

@Injectable()
export class PatientService {

    getAllPatients() {
        return PATIENTS;
    }

    getPatient(index: number) {
        return PATIENTS[index];
    }

    getPatientIndex(item: Patient) {
        return PATIENTS.indexOf(item);
    }

    insertPatient(item: Patient) {
        PATIENTS.push(item);
    }

    deletePatient(index: number) {
        PATIENTS.splice(index, 1);
    }

    updatePatient(index: number, item: Patient) {
        PATIENTS[index] = item;
    }
}