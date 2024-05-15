import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  // subjectProducts: Subject<Product[]> = new Subject();
  subjectProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    []
  );
  products: Product[] = [];

  constructor() {}

  addItemToCart(product: Product) {
    this.products.push(product);
    this.subjectProducts.next(this.products);
    console.log(product);
    console.log(this.products);
  }
}
