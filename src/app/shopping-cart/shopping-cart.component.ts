import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';
import { Product } from '../model/Product';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [NgClass, CurrencyPipe, NgIf, NgFor, MatButtonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  total: number | undefined = 0;
  subTotal: number = 0;
  products: Product[] | undefined;
  selectedItems: boolean = true;
  selectedLabel: string = 'Deselect all item(s)';
  notSelectedLabel: string = 'Select all item(s)';
  totalItemsOrdered: number | undefined = 0;
  subjectTotalItems: BehaviorSubject<number | undefined> = new BehaviorSubject<
    number | undefined
  >(this.totalItemsOrdered);

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartService.subjectProducts.subscribe((data) => {
      this.products = data;
      if (data.length > 0) {
        this.total = this.calcTotalPrice(data);
      }
    });
    console.log('ngOnInit() this.products: ', this.products);
    this.calcTotalItems();
  }

  /* ngOnDestroy(): void {
    if (this.products && this.products.length > 0) {
      console.log('ngOnDestroy() this.products: ', this.products);
      this.shoppingCartService.subjectProducts.next(this.products);
    }
  } */

  calcTotalPrice(products: Product[]): number | undefined {
    return products
      .map((prod) => prod.price)
      .reduce((prevPrice, nextPrice) => prevPrice + nextPrice);
  }

  deSelectItems() {
    if (this.products) {
      let checkBoxInput: NodeListOf<HTMLInputElement> =
        document.querySelectorAll('.deselect--item');
      checkBoxInput.forEach((el) => el.click());
    }
    this.selectedItems = !this.selectedItems;
  }

  addQuantity(id: number) {
    let product;
    product = this.products?.find((prod, index) => prod.id === id);
    if (product) {
      product.quantityOrdered!++;
      this.total! += product.price!;
    }
    this.calcTotalItems();
  }
  decreaseQuantity(id: number) {
    let product;
    product = this.products?.find((prod, index) => prod.id === id);
    if (product) {
      product.quantityOrdered!--;
      this.total! -= product.price!;
    }
    this.calcTotalItems();
  }

  calcTotalItems() {
    if (this.products && this.products?.length > 0) {
      this.shoppingCartService.addItemsToCart(this.products);
      this.shoppingCartService.subjectProducts.subscribe((data: Product[]) => {
        this.total = data
          .map((prod) => prod.quantityOrdered! * prod.price)
          .reduce((prevSubTotal, nextSubTotal) => prevSubTotal + nextSubTotal);
      });
      this.totalItemsOrdered = this.products
        ?.map((product) => product.quantityOrdered)
        .reduce((prevQuantity, nextQuantiy) => prevQuantity! + nextQuantiy!);
    }
  }

  calcPriceItem(id: number): number | undefined {
    let product;
    product = this.products?.find((prod, index) => prod.id === id);
    if (product) {
      this.subTotal = product.price * product.quantityOrdered!;
    }
    return this.subTotal;
  }
}
