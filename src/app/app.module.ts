import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './Product/product-list.component';
import { ProductListService } from './Product/product-list.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
