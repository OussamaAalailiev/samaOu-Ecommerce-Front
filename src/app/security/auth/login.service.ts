import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  backendHost: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    console.log(this.backendHost + '/users');

    return this.http.post<User>(this.backendHost + '/users', user);
  }
}
