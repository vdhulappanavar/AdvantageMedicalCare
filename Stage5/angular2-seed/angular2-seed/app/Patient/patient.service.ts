import {IPatient} from './patient';

export class PatientService{
	
	getPatientList() : IPatient[] {
		//return ["course1" , "course2" , "course3"];
		  return [
					{
						patientId : 1 ,
						centerId : 1, 
						Name:"ABC" ,
						age: 90 , 
						imageUrl : "http://lorempixel.com/100/100/people"
					},
					{
						patientId : 2 ,
						centerId : 1,
						Name:"BCD" ,
						age: 91 , 
						imageUrl : "http://lorempixel.com/100/100/people?1"
					},
					{
						patientId : 3 ,
						centerId : 2,
						Name:"CDE" ,
						age: 92 , 
						imageUrl : "http://lorempixel.com/100/100/people?2"
					},
					{
						patientId : 4 ,
						centerId : 3,
						Name:"DEF" ,
						age: 93 , 
						imageUrl : "http://lorempixel.com/100/100/people?3"
					}
			   ];
	}
	
	getPatient(id){
		return {
						patientId : 4 ,
						centerId : 3,
						Name:"DEF" ,
						age: 93 , 
						imageUrl : "http://lorempixel.com/100/100/people?3"
					};
	}
}