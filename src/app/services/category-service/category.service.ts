import { Injectable } from '@angular/core';
import { Category } from '../../model/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url: string = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const data = this.http.get<Category[]>(this.url);
    return data;
  }
}
