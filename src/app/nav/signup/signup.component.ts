import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogData } from '../nav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { LoginService } from '../../security/auth/login.service';
import { User } from '../../model/user';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    MessagesModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  genderArr: string[] = ['Male', 'Female', 'Other'];
  messages: Message[] | undefined;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  /**
   *Just as a form control instance gives you control over a single input field, 
      a form group instance tracks the form state of a group of form control instances 
      (for example, a form).
    Each control in a form group instance is tracked by name when creating the form group.
   */
  //FormGroup Model Instance below groups a number of formControls:
  signUpFormBuilder = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(11),
        Validators.maxLength(150),
      ],
    ],
    gender: ['', [Validators.required]],
    age: [12, [Validators.required, Validators.min(12)]],
    newPassword: ['', [Validators.required]],
    confirmNewPassword: ['', [Validators.required]],
  });

  onNoClick(): void {
    this.dialogRef.close('Pizza');
  }

  onSubmit() {
    console.warn(this.signUpFormBuilder.value);
    if (this.signUpFormBuilder.valid) {
      const user: User = new User();
      //user.setEmail(this.signUpFormBuilder.value.email);
      user.email = this.signUpFormBuilder.value.email
        ? this.signUpFormBuilder.value.email
        : '';
      user.password = this.signUpFormBuilder.value.newPassword
        ? this.signUpFormBuilder.value.newPassword
        : '';
      this.loginService.createUser(user).subscribe({
        next: (user) => {
          if (user) {
            this.messages = [
              {
                severity: 'success',
                detail: `${user.email.slice(
                  0,
                  user.email.indexOf('@')
                )} is registered successfully!`,
              },
            ];
            this.closeDialogOnSuccess();
          } else {
            this.messages = [
              {
                severity: 'error',
                detail: `User email is already in use, try another email!`,
              },
            ];
          }
        },
        error: (err) => alert(err),
      });
      //this.dialogRef.close();
    }
  }

  closeDialogOnSuccess() {
    setTimeout(() => this.dialogRef.close(), 1500);
  }

  onUpdate() {
    this.signUpFormBuilder.patchValue({
      email: 'aliev@gmail.com',
      age: 34,
    });
    console.log(this.signUpFormBuilder.value);
  }

  /* Getters for Form control instances. */

  get email() {
    return this.signUpFormBuilder.get('email');
  }
  get age() {
    return this.signUpFormBuilder.get('age');
  }
  get newPassword() {
    return this.signUpFormBuilder.get('newPassword');
  }
  get confirmNewPassword() {
    return this.signUpFormBuilder.get('confirmNewPassword');
  }
  get gender() {
    return this.signUpFormBuilder.get('gender');
  }
}
