import { Component } from "@angular/core";
import { HttpClientModule} from '@angular/common/http';
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
    errorMessage: string;
    
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
    constructor(private service:ProductListService) {
        //let service = new ProductListService(); // new keword tightly coupled the app, use DI.
               
    }

    toogleImage():void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[]{
      
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void{
        this.service.getProductList().subscribe({
            next: products => {
                this.products = products
                this.filterProduct = this.products;
            },
            error: err => this.errorMessage = err
        });
       
        this._listFilter = "Mi";
    }

}