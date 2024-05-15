import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  total: number = 0;
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
      console.log('data: ', data);
      if (data.length > 0) {
        this.total = this.products
          .map((prod) => prod.price)
          .reduce((prevPrice, nextPrice) => prevPrice + nextPrice);
      }
    });
    console.log('this.products: ', this.products);
    this.calcTotalItems();
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
      this.total += product.price!;
    }
    this.calcTotalItems();
  }
  decreaseQuantity(id: number) {
    let product;
    product = this.products?.find((prod, index) => prod.id === id);
    if (product) {
      product.quantityOrdered!--;
      this.total -= product.price!;
    }
    this.calcTotalItems();
  }

  calcTotalItems() {
    if (this.products && this.products?.length > 0) {
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
