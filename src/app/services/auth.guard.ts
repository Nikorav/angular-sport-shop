import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, take, tap} from 'rxjs';
import {AuthService} from "./auth.service";
import firebase from "firebase/compat";
import {NavigationService} from "./navigation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private navigationService: NavigationService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.selectUser()
      .pipe(
        take(1),
        map((user: firebase.User | null) => !!user),
        tap((isLogged: boolean) => {
          if (!isLogged) {
            console.log('you are not authorized');
            this.router.navigate([this.navigationService.getAuthLink()])
          }
        }),
      )
  }
}
