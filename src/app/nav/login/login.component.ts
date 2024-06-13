import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../nav.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  loginFormBuilder = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(11),
        Validators.maxLength(150),
      ],
    ],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  onSubmitLogin() {
    console.warn(this.loginFormBuilder.value);
    this.dialogRef.close();
  }

  get email() {
    return this.loginFormBuilder.get('email');
  }
  get age() {
    return this.loginFormBuilder.get('rememberMe');
  }
  get password() {
    return this.loginFormBuilder.get('password');
  }
}
