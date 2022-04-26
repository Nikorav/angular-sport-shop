import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {NavigationService} from "../services/navigation.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private navigationService: NavigationService) { }

  public user: firebase.User | null = null;


  public ngOnInit() {
    this.authService.user$.subscribe((value : firebase.User | null) => {
      console.log(value)
      this.user = value
    });
  }

  public login(): void {
    this.authService.googleSingIn()
      .pipe(
        tap(() => this.router.navigate([this.navigationService.getMainLink()]))
      )
    .subscribe()
  }
}
