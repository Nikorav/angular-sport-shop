import {Component} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {NavigationService} from "../services/navigation.service";
import {take, tap} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private authService: AuthService,
              private router: Router,
              private navigationService: NavigationService) {
  }

  public login(): void {
    this.authService.googleSingIn()
      .pipe(
        tap(() => this.router.navigate([this.navigationService.getMainLink()])),
        take(1),
      )
      .subscribe()
  }
}
