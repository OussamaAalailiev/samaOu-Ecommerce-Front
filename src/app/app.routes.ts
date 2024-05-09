import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { CategoriesContainerComponent } from './categories-container/categories-container.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'categories',
    component: CategoriesContainerComponent,
  },
  { path: 'products', component: ProductsComponent },

  /* { path: 'products', component: ProductsComponent }, */
];
