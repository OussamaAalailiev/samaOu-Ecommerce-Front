import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Product } from './Product';
import { ProductService } from './cat-less-prices.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-categories-less-prices',
  standalone: true,
  imports: [ButtonModule, CarouselModule, TagModule, CurrencyPipe],
  templateUrl: './categories-less-prices.component.html',
  styleUrl: './categories-less-prices.component.css',
})
export class CategoriesLessPricesComponent {
  products: Product[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
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
