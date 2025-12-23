import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { Product } from '../../../models/product-model';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { CategorySrvice } from '../../../services/category-srvice';
import { Category } from '../../../models/category-model';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { Select } from 'primeng/select';
import { FloatLabelModule } from "primeng/floatlabel"
import { FileUpload, FileUploadEvent, FileUploadHandlerEvent, FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { Products } from '../products';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule,Dialog, ButtonModule, InputTextModule, AvatarModule,Select,FloatLabelModule,FileUploadModule,InputNumberModule,TextareaModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct {
    product: Product = new Product();
    categorySrv: CategorySrvice  = inject(CategorySrvice)
    categories: Category[] = this.categorySrv.categories
    titled:string ='';
    categoryId: any;
    description: string ='';
    imageUrl: File | null = null;
    imagePreviewUrl: any;
    timeValue: any;
    ProviderId: number =0;
    optionalTime: string ='';
    selectedFile:any;
    visible: boolean = false;
    profileImgUrl: string | ArrayBuffer | null = null;
    userName:string = 'מיכל';

    showDialog() {
        this.visible = true;
    }
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
      this.product.imageUrl = this.imagePreviewUrl;
      this.productReady.emit(this.product);
      this.reset();
    }
    reset(){
      this.imagePreviewUrl = null;
      this.imageUrl = null;
      this.titled = '';
      this.description = '';
      this.timeValue = null;
      this.optionalTime = '';
      this.categoryId = null
      this.product = new Product();
    }
  onFileSelected(event: any): void{
    const files = event.currentFiles || event.files;
        if (event.files && event.files.length > 0) {
          const file = files[0];
          this.imageUrl = file;
          const reader = new FileReader();
        reader.onload = () => {
            // עדכון משתני התצוגה המקדימה מיידית
            this.imagePreviewUrl = reader.result;
        };
        reader.readAsDataURL(file);
  }
}
  removeImage(fileUpload: FileUpload) {
    this.imagePreviewUrl = null;
    this.profileImgUrl = null; // החזרה לאוואטר ברירת מחדל
    this.imageUrl = null;
    fileUpload.clear(); // ניקוי הרכיב של PrimeNG
}

}