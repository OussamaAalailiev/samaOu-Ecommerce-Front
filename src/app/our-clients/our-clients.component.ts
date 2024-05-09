import { Component } from '@angular/core';
import { FaqComponent } from '../faq/faq.component';
import { CategoriesLessPricesComponent } from '../categories-less-prices/categories-less-prices.component';

@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [FaqComponent, CategoriesLessPricesComponent],
  templateUrl: './our-clients.component.html',
  styleUrl: './our-clients.component.css',
})
export class OurClientsComponent {}
