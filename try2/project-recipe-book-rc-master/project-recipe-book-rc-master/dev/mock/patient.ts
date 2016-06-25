import {Patient} from "../Patient/patient";
import {Ingredient} from "../shared/ingredient";

export let PATIENTS:Patient[] = [
    new Patient(1,
         "Leaf Rake",
        "GDN-0011",
        "March 19, 2016",         
         19.95,
         "Leaf rake with 48-inch wooden handle.",
          3.2,
          "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    ),
    new Patient(
		 2,
         "Garden Cart",
         "GDN-0023",
         "March 18, 2016",         
          32.99,
          "15 gallon capacity rolling garden cart",
          4.2,
         "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    ),
    new Patient(
		 5,
         "Hammer",
         "TBX-0048",
         "May 21, 2016",         
          8.9,
          "Curved claw steel hammer",
          4.8,
         "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    ),
    new Patient(
		 8,
         "Saw",
         "TBX-0022",
         "May 15, 2016",         
          11.55,
          "15-inch steel blade hand saw",
          3.7,
         "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    ),
    new Patient(
		 10,
         "Video Game Controller",
         "GMG-0042",
         "October 15, 2015",         
          35.95,
          "Standard two-button video game controller",
          4.6,
         "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    )
    
];