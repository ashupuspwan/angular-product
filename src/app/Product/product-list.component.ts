import { Component } from "@angular/core";


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    pageTitle: string = " ABC Product List";
    products: any[] = [
         {
             "productId": 1,
             "productName": "MI A4",
             "productCode": "MI001",
             "releaseDate": "March 18 2019",
             "description": "MI mobile phone",
             "price": 15000,
             "imageUrl": ""
         },
         {
            "productId": 2,
            "productName": "MI Pro 7",
            "productCode": "MIPRO001",
            "releaseDate": "March 18 2019",
            "description": "MI mobile phone",
            "price": 20000,
            "imageUrl": ""
        },
        {
            "productId": 3,
            "productName": "MI X",
            "productCode": "MIX001",
            "releaseDate": "March 18 2019",
            "description": "MI mobile phone",
            "price": 21000,
            "imageUrl": ""
        }
    ];
}