import { Component } from "@angular/core";
import { ProductListService } from './product-list.service';
import { IProduct } from './product';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    pageTitle: string = " ABC Product List";
    imageWidth: number = 50;
    imageMargin: number =2;
    showImage: boolean = false;
    listFilter: string = 'Mi';
    products: IProduct[];

    /**
     *service 
     */
    constructor(service:ProductListService) {
        //let service = new ProductListService(); // new keword tightly coupled the app, use DI.
        this.products = service.getProductList();   
    }

    toogleImage():void {
        this.showImage = !this.showImage;
    }
}