export interface IMedicine{
	medicineId : number; 
	medicineName : string ; 
	medicineCode : string;
	releaseDate : string ;
	price : number ;
	description : string;
	starRating : number;
	imageUrl : string;
}

export class Medicine implements IMedicine{
	constructor(public medicineId : number, 
	public medicineName : string ,
	public medicineCode : string,
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