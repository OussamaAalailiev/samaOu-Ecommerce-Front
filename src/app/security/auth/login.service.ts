import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  backendHost: string = 'http://localhost:80800';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    console.log(this.backendHost + '/users');

    return this.http
      .post<User>(this.backendHost + '/users', user)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occured while register user, ', error);
    return throwError(
      () => new Error('Something bad happened, please try again later!')
    );
  }
}
