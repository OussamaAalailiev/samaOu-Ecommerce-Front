import { Component } from '@angular/core';
import { OurClientsComponent } from '../our-clients/our-clients.component';

@Component({
  selector: 'app-best-selling-products',
  standalone: true,
  imports: [OurClientsComponent],
  templateUrl: './best-selling-products.component.html',
  styleUrl: './best-selling-products.component.css',
})
export class BestSellingProductsComponent {}
