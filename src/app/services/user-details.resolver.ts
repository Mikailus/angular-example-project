import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { ExtendedUser } from '../interfaces/extended-user.interface';

@Injectable()
export class UserDetailsResolver implements Resolve<ExtendedUser> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ExtendedUser> {
    const userId: number = route.params.userId;
    return this.usersService.getUserDetails(userId);
  }
}
