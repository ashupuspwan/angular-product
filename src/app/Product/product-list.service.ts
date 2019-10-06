import { IProduct } from './product';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductListService{
    getProductList(){
        return  [
            {
                "productId": 1,
                "productName": "MI 7Pro",
                "productCode": "MI-001",
                "releaseDate": "March 18 2019",
                "description": "MI mobile phone",
                "price": 15000,
                "imageUrl": "assets/images/7s.jpeg",
                "starRating": 4
            },
            {
               "productId": 2,
               "productName": "MI Note 5",
               "productCode": "MI-PRO-001",
               "releaseDate": "March 18 2019",
               "description": "MI dual camera mobile phone",
               "price": 20000,
               "imageUrl": "assets/images/note5.jpeg",
               "starRating": 4
           },
           {
               "productId": 3,
               "productName": "MI K20",
               "productCode": "MI-K20-001",
               "releaseDate": "March 18 2019",
               "description": "MI mobile phone",
               "price": 21000,
               "imageUrl": "assets/images/k20.jpeg",
               "starRating": 4
           }
       ];
    }
}