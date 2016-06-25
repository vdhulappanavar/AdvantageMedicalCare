import {Component , OnChanges , Input , Output , EventEmitter} from '@angular/core';

@Component({
	selector : "ai-star" , 
	templateUrl : "templates/star.component.html" , 
	styleUrls : ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
	@Input() rating : number;
	starWidth : number ;
	@Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
	 
	
	OnClick(){
		this.ratingClicked.emit("clicked");
	}
	
	ngOnChanges() : void {
		this.starWidth = this.rating * 86 / 5;
	}
}