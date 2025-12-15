import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { Product } from '../../../models/product-model';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { CategorySrvice } from '../../../services/category-srvice';
import { Category } from '../../../models/category-model';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct {
    product: Product = new Product();
    categorySrv: CategorySrvice  = inject(CategorySrvice)
    categories: Category[] = this.categorySrv.categories
    titled:string ='';
    categoryId: number=0;
    description: string ='';
    imageUrl: string ='';
    timeValue: number =0;
    ProviderId: number =0;
    optionalTime: string ='';

    ngOnInit(){
      this.categorySrv.addCategory("ביביסיטינג")
      this.categorySrv.addCategory("קוסמטיקה")
      this.categorySrv.addCategory("קונדיטוריה")
    }
    @Output()
    productReady: EventEmitter<Product> = new EventEmitter<Product>();

    addProduct(){
      this.product.title = this.titled
      this.product.categoryId = this.categoryId;
      this.product.description  = this.description;
      this.product.timeValue  = this.timeValue;
      this.product.ProviderId  = 1;
      this.product.optionalTime  = this.optionalTime;
      this.product.imageUrl = this.imageUrl
      this.productReady.emit(this.product)
      this.product = new Product();
    }
}
