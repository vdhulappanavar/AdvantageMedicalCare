export class PatientListService{
	
	getpatientList()  {
		//return ["course1" , "course2" , "course3"];
		  return [
					{
						Name:"ABC" ,
						age: 90 , 
						imgUrl : "http://lorempixel.com/100/100/people"
					},
					{
						Name:"BCD" ,
						age: 91 , 
						imgUrl : "http://lorempixel.com/100/100/people?1"
					},
					{
						Name:"CDE" ,
						age: 92 , 
						imgUrl : "http://lorempixel.com/100/100/people?2"
					},
					{
						Name:"DEF" ,
						age: 93 , 
						imgUrl : "http://lorempixel.com/100/100/people?3"
					}
			   ];
	}
}