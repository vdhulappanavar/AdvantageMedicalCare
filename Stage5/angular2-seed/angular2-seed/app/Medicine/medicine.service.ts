export class MedicineService{
	
	getpatientList()  {
		//return ["course1" , "course2" , "course3"];
		  return [
					{
						id : 1,
						Name:"ABC" ,
						price: 90 , 
						imgUrl : "http://lorempixel.com/100/100/people"
					},
					{
						id : 1,
						Name:"BCD" ,
						price: 100 , 
						imgUrl : "http://lorempixel.com/100/100/people?1"
					},
					{
						id : 1,
						Name:"CDE" ,
						price: 400 , 
						imgUrl : "http://lorempixel.com/100/100/people?2"
					},
					{
						id : 1,
						Name:"DEF" ,
						price: 500 , 
						imgUrl : "http://lorempixel.com/100/100/people?3"
					}
			   ];
	}
}