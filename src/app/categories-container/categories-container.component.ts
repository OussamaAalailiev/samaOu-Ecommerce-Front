import { Component } from '@angular/core';
import { BestSellingProductsComponent } from '../best-selling-products/best-selling-products.component';

@Component({
  selector: 'app-categories-container',
  standalone: true,
  imports: [BestSellingProductsComponent],
  templateUrl: './categories-container.component.html',
  styleUrl: './categories-container.component.css',
})
export class CategoriesContainerComponent {}
