import { Component } from "@angular/core";
import { ProductListService } from './product-list.service';
import { IProduct } from './product';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
    pageTitle: string = " ABC Product List";
    imageWidth: number = 50;
    imageMargin: number =2;
    showImage: boolean = false;
    _listFilter: string = ' ';
    products: IProduct[];
    filterProduct: IProduct[];
    
    get listFilter():string {
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filterProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    /**
     *service 
     */
    constructor(service:ProductListService) {
        //let service = new ProductListService(); // new keword tightly coupled the app, use DI.
        this.products = service.getProductList();   
        this.filterProduct = this.products;
        this.listFilter = 'Mi';
    }

    toogleImage():void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[]{
      
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

}