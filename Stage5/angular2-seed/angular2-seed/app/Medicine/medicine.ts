export interface IMedcine{
	Id : number; 
	Name : string ; 
	Price : number;	
	imageUrl : string;
}

export class Medicine implements IMedicine{
	constructor(public Id : number; 
	public Name : string ; 
	public Price : number;	
	public imageUrl : string;){	
	}	
}