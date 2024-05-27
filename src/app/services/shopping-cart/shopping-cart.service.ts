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
    //Verify for duplicate products, If so we add just the quantity to the same product in Cart:
    let duplicateProduct: Product | undefined =
      this.products.length > 0
        ? this.products.find((prod) => prod.id === product.id)
        : undefined;
    if (duplicateProduct !== undefined) {
      this.products = this.products.filter((prod) => prod.id !== product.id);
      duplicateProduct.quantityOrdered!++;
      this.products.push(duplicateProduct);
    } else {
      this.products.push(product);
    }
    this.subjectProducts.next(this.products);
  }
  addItemsToCart(products: Product[]) {
    this.products = products;
    this.subjectProducts.next(this.products);
  }
}
