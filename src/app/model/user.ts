import { Role } from './role';

export class User {
  id!: number;
  email!: string;
  password!: string;
  roles?: Role[];

  constructor() {}

  get getId() {
    return this.id;
  }

  get getEmail() {
    return this.email;
  }

  get getPassword() {
    return this.password;
  }

  /* set setId(id: number) {
    this.id = id;
  } */

  set setEmail(email: string) {
    this.email = email;
  }

  set setPassword(password: string) {
    this.password = password;
  }
}
