export interface IPatient{
	patientId : number; 
	Name : string ; 
	centerId : number;
	age : number;	
	imageUrl : string;
}

export class Patient implements IPatient{
	constructor(public patientId : number, 
	public Name : string ,
	public centerId : number, 
	public age : number,
	public imageUrl : string){	
	}	
}