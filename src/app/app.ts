import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product-model';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Products,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TimeBank');
}
