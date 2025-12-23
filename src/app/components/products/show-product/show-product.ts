import { Component, Output,EventEmitter, Input, inject} from '@angular/core';
import { ProductsService } from '../../../services/products-service';
import { Product } from '../../../models/product-model';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-show-product',
  imports: [AvatarModule, ButtonModule],
  templateUrl: './show-product.html',
  styleUrl: './show-product.scss',
})
export class ShowProduct {
  productSrv:ProductsService = inject(ProductsService);
  
  @Input()
  productId:number=0;

  showProd:Product = new Product()
  userName:string='Michal'
  ngOnChanges(){
    this.showProd = this.productSrv.findProduct(this.productId)? this.productSrv.findProduct(this.productId)! : new Product();
  }

}
