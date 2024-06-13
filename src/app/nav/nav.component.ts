import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { RouterLink } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SignupComponent } from './signup/signup.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';
import { NgClass } from '@angular/common';
import { LoginComponent } from './login/login.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    SearchInputComponent,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgClass,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  providers: [],
})
export class NavComponent implements OnInit {
  inputPlaceholder: string = 'Chercher un produit, marque ou une catégorie';
  animal: string | undefined;
  name: string | undefined;
  totalCardItems: number | undefined = 0;

  /* ERROR Should be resolved on Cart nav total items */
  ngOnInit(): void {
    this.shoppingCardService.subjectProducts.subscribe((data) => {
      if (data.length > 0) {
        this.totalCardItems = data
          .map((prod) => {
            return prod.quantityOrdered;
          })
          .reduce((prevValue, nextValue) => prevValue! + nextValue!);
      } else {
        this.totalCardItems = 0;
      }
    });
  }

  constructor(
    private dialog: MatDialog,
    private shoppingCardService: ShoppingCartService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      data: { name: this.name },
      width: '400px',
      maxHeight: '650px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed ', result);
      this.animal = result;
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      maxWidth: '400px',
      maxHeight: '600px',
    });

    /* dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed ', result);
      this.animal = result;
    }); */
  }
}
