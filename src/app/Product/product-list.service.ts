import { IProduct } from './product';

export class ProductListService{
    getProductList(){
        return  [
            {
                "productId": 1,
                "productName": "MI 7Pro",
                "productCode": "MI001",
                "releaseDate": "March 18 2019",
                "description": "MI mobile phone",
                "price": 15000,
                "imageUrl": "assets/images/7s.jpeg"
            },
            {
               "productId": 2,
               "productName": "MI Note 5",
               "productCode": "MIPRO001",
               "releaseDate": "March 18 2019",
               "description": "MI dual camera mobile phone",
               "price": 20000,
               "imageUrl": "assets/images/note5.jpeg"
           },
           {
               "productId": 3,
               "productName": "MI K20",
               "productCode": "MIK2001",
               "releaseDate": "March 18 2019",
               "description": "MI mobile phone",
               "price": 21000,
               "imageUrl": "assets/images/k20.jpeg"
           }
       ];
    }
}