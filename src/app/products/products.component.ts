import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product-service/product.service';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    FormsModule,
    RatingModule,
    CommonModule,
    NgFor,
    ProgressSpinnerModule,
    NgSwitch,
    NgSwitchCase,
    RouterLink,
    MessagesModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  /* for initialization tasks when the component is created. */
  appState: 'LOADING' | 'LOADED' | 'ERROR' = 'LOADING';
  messages: Message[] | undefined; //alert msg from 'primeng'.
  products!: Product[] | undefined;
  price: number = 151351;
  categoryIdFromRoute: number | undefined;
  numberOfRatings: number = Math.floor(Math.random() * 5000);
  isProductAddedToCart: boolean = false;
  successMsgAlert: string = '';
  errorMsgAlert: string = '';
  productNameToCart: string | undefined;

  ngOnInit(): void {
    //categoryId.
    // First get the product id from the current route.
    //try {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryIdFromRoute = Number(routeParams.get('categoryId'));
    console.log('categoryIdFromRoute=', this.categoryIdFromRoute);
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data.filter(
          (product) => product.category?.id === this.categoryIdFromRoute
        );
        if (this.products && this.products.length > 0) {
          this.appState = 'LOADED';
        } else {
          this.appState = 'ERROR';
        }
        console.log('data= ', data);
      },
      error: (err) => {
        this.appState = 'ERROR';
        /* alert(err); */
      },
    });
    /*  } catch (error) {
      alert(error);
      this.appState = 'ERROR';
    } */
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private messageService: MessageService
  ) {}

  addProductToCart(product: Product) {
    /* const randomAddNum: number = Math.random();
    if (randomAddNum > 0.5) { */
    this.shoppingCartService.addItemToCart(product);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `${product.name} is added successfully!`,
      styleClass: '.alert--success',
    });
    /* } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: `${product.name} cannot be added!`,
      });
    } */
    const successMsg: string = ` added successfully!`;
    this.productNameToCart = product.name;
    //Success Alert If Product added successfully:
    this.isProductAddedToCart = true;
    this.successMsgAlert = successMsg;
  }
}
