import { Component, inject } from '@angular/core';
import { Product } from '../../models/product-model';
import { ProductsService } from '../../services/products-service';
import { ButtonModule } from 'primeng/button';
import { AddProduct } from './add-product/add-product';
import { CategorySrvice } from '../../services/category-srvice';

@Component({
  selector: 'app-products',
  imports: [ButtonModule, AddProduct],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  productSrv:ProductsService = inject(ProductsService);
  products: Product[] = this.productSrv.products;
  pro:Product = new Product();
  addProduct(p: Product){
    this.productSrv.addProduct(p);
    this.getAll()
  }
  getAll(){
    this.products = this.productSrv.products
  }
  ngOnInit() {
    this.pro.id = this.products.length +1;
    this.pro.title = 'ש"ב'
    this.pro.categoryId = 1; // Example category ID
    this.pro.ProviderId = 1; // Example provider ID
    this.pro.description = 'עזרה בשיעורי בית';
    this.pro.imageUrl = '';
    this.pro.timeValue = 1.5;
    this.pro.optionalTime = 'א-ה 9:00-17:00'; 
    this.addProduct(this.pro);
  }
}
