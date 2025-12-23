import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product-model';
import { find } from 'rxjs';
import { Category } from '../models/category-model';
import { CategorySrvice } from './category-srvice';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  categories: Category[] = inject(CategorySrvice).categories;

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('products');
      if (stored) {
        this.products = JSON.parse(stored);
      }
    }
  }

  private saveProducts() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }
  addProduct(product: Product) {
    this.products.push(product);
    this.saveProducts();
  }

  findProduct(id:number){
    this.loadProducts();
    const product:Product | undefined =this.products.find(p=>p.id===id)
    return product
  }
  categoryById(id:number){
    return this.categories.find(c=>c.id === id)?.name
}
prodsFromProvider(providerId:number){
  this.loadProducts();
  return this.products.filter(p=>p.ProviderId === providerId)
}
prodsFromCategory(categoryId:number){
  this.loadProducts();
  return this.products.filter(p=>p.categoryId === categoryId)
}

}

