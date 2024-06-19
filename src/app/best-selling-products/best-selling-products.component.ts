import { Component, OnInit } from '@angular/core';
import { OurClientsComponent } from '../our-clients/our-clients.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../categories-less-prices/cat-less-prices.service';
import { Product } from '../categories-less-prices/Product';

@Component({
  selector: 'app-best-selling-products',
  standalone: true,
  imports: [
    OurClientsComponent,
    ButtonModule,
    CarouselModule,
    TagModule,
    CurrencyPipe,
  ],
  templateUrl: './best-selling-products.component.html',
  styleUrl: './best-selling-products.component.css',
})
export class BestSellingProductsComponent implements OnInit {
  products: Product[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getLessPriceProducts();
    this.initCarouselResponsiveMediaQueries();
  }

  getLessPriceProducts(): void {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
  }

  initCarouselResponsiveMediaQueries(): void {
    this.responsiveOptions = [
      {
        breakpoint: '992px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }
}
