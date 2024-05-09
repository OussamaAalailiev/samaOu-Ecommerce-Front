import { Component, OnInit } from '@angular/core';
import { BestSellingProductsComponent } from '../best-selling-products/best-selling-products.component';
import { CategoryService } from '../services/category-service/category.service';
import { Category } from '../model/category';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories-container',
  standalone: true,
  imports: [BestSellingProductsComponent, NgFor, RouterLink],
  providers: [HttpClientModule],
  templateUrl: './categories-container.component.html',
  styleUrl: './categories-container.component.css',
})
export class CategoriesContainerComponent implements OnInit {
  /* categories: Category[] = []; */
  categories: Category[] | undefined;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {
        alert('Cannot fetch categories, Something went wrong :( ...');
      }
    );
  }
  ngOnInit(): void {
    /* this.categories = this.categoryService.getCategories(); */
  }
}
