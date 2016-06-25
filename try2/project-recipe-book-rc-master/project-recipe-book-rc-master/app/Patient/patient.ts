export interface IPatient{
	patientId : number; 
	patientName : string ; 
	patientCode : string;
	releaseDate : string ;
	price : number ;
	description : string;
	starRating : number;
	imageUrl : string;
}

export class Patient implements IPatient{
	constructor(public patientId : number, 
	public patientName : string ,
	public patientCode : string,
	public releaseDate : string ,
	public price : number ,
	public description : string,
	public starRating : number,
	public imageUrl : string){
		
	}
	
	calculateDiscount(percent : number) : number {
		return this.price - (this.price * percent /100);
	}
}