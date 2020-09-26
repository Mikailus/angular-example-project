import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './interfaces/user.interface';
import { ExtendedUser } from './interfaces/extended-user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  public getUserDetails(userId: number): Observable<ExtendedUser> {
    return this.httpClient.get<ExtendedUser>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.httpClient.delete<void>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  public editUser(userId: number, user: Omit<User, 'id'>): Observable<User> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    });

    return this.httpClient.put<User>(`https://jsonplaceholder.typicode.com/users/${userId}`, user, { headers });
  }

  public createUser(user: Omit<User, 'id'>): Observable<User> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    });

    return this.httpClient.post<User>(`https://jsonplaceholder.typicode.com/users`, user, { headers });
  }
}
