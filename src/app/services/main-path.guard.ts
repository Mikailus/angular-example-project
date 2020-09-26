import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPathGuard implements CanActivate {
  private readonly restrictedPath: string = 'comments';

  constructor(private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    const mainUrlSegment: UrlSegment = route.url[0];
    // const canActivate: boolean = mainUrlSegment.path !== this.restrictedPath;
    const canActivate: boolean = true;

    if (!canActivate) {
      this.router.navigate(['users']);
    }
    return canActivate;
  }
}
