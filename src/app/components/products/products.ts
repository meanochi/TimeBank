import { Component, inject } from '@angular/core';
import { Product } from '../../models/product-model';
import { ProductsService } from '../../services/products-service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AddProduct } from './add-product/add-product';
import { CategorySrvice } from '../../services/category-srvice';
import { DrawerModule } from 'primeng/drawer';
import { ShowProduct } from './show-product/show-product';
import { Category } from '../../models/category-model';

@Component({
  selector: 'app-products',
  imports: [ButtonModule, AddProduct, CardModule,DrawerModule,ShowProduct],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  productSrv:ProductsService = inject(ProductsService);
  products: Product[] = this.productSrv.products;
  pro:Product = new Product();
  visible: boolean = false;
  pId :number =0
  pTitle:string ='';
  categories: Category[] = inject(CategorySrvice).categories;
  addProduct(p: Product){
    p.id = this.products.length +1;
    this.productSrv.addProduct(p);
    this.getAll()
  }
  getAll(){
    this.products = this.productSrv.products
  }
  ngOnInit() {
  }
  openProduct(id:number){
    this.pId = id;
    this.pTitle = this.productSrv.findProduct(id)?.title || '';
    this.visible = true;
  }
}
