import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Injectable()
export class UsersResolver implements Resolve<User[]> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.usersService.getUsers();
  }
}
