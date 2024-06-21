import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://localhost:3000/products';
  wrongUrl: string = 'http://localhost:3000/dqsdqsdsqd';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    /* const randomNumber = Math.random();
    console.log(
      'randomNumber >= 0.5 == this.url else this.wrongUrl',
      randomNumber
    );

    return randomNumber >= 0.5
      ? this.http.get<Product[]>(this.url)
      : this.http.get<Product[]>(this.wrongUrl); */
    return this.http.get<Product[]>(this.url);
  }
}
