import {Component , OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {IProduct} from './Product'
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';
@Component({
	
	templateUrl : 'app/Product/product-list.component.html',
    directives : [StarComponent , ROUTER_DIRECTIVES],
    styleUrls : ['app/Product/product-list.component.css'],
    pipes : [ProductFilterPipe],    
})
export class ProductListComponent implements OnInit{
	pageTitle = "Product List";
    imageWidth = 50;
    imageMArgin = 2;
    showImage = false;
    listFilter = "";	
	products : IProduct[] ;
    errorMessage : string ;
    constructor(private _productService : ProductService){        
    }
    
    toggleImage() : void
    {
        this.showImage = !this.showImage;
    }
    
    ngOnInit() : void{
        this._productService.getProducts().subscribe( products =>this.products = products ,error => this.errorMessage = <any>error  );
    }
    
    OnRatingClicked(message : string) : void {
        this.pageTitle = "Product List: " + message;
    }
}