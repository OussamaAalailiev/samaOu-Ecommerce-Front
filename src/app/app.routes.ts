import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { CategoriesContainerComponent } from './categories-container/categories-container.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './nav/signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './nav/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  /* { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }, */
  {
    path: 'categories',
    component: CategoriesContainerComponent,
  },
  { path: 'products/:categoryId', component: ProductsComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: '**', component: NotFoundComponent },
  /* { path: 'products', component: ProductsComponent }, */
];
