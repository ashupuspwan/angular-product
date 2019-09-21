import { Component } from "@angular/core";
import { ProductListService } from './product-list.service';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    pageTitle: string = " ABC Product List";
    products;

    /**
     *service 
     */
    constructor(service:ProductListService) {
        //let service = new ProductListService(); // new keword tightly coupled the app, use DI.
        this.products = service.getProductList();   
    }
}