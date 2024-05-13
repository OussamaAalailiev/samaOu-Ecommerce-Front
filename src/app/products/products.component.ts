import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product-service/product.service';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, RatingModule, CommonModule, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  /* for initialization tasks when the component is created. */
  products!: Product[] | undefined;
  /* value!: number; */ /* Rating value. */
  price: number = 151351;
  categoryIdFromRoute: number | undefined;
  numberOfRatings: number = Math.floor(Math.random() * 5000);

  ngOnInit(): void {
    //categoryId.
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.categoryIdFromRoute = Number(routeParams.get('categoryId'));
    console.log('categoryIdFromRoute= ', this.categoryIdFromRoute);
    this.productService.getAll().subscribe({
      next: (data) => {
        /*  if (this.products) {
          if (this.categoryIdFromRoute === this.products[0].category?.id) { */
        this.products = data.filter(
          (product) => product.category?.id === this.categoryIdFromRoute
        );
        //this.products = data;
        /* }
        } */
      },
      error: (err) => alert(err),
    });
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
}
