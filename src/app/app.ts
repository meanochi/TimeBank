import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product-model';
import { Products } from './components/products/products';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Products, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TimeBank');
}
