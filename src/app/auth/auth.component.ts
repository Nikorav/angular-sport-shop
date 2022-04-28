import {Component, OnInit} from '@angular/core';
import firebase from "firebase/compat/app";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {NavigationService} from "../services/navigation.service";
import {tap} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public formGroup: FormGroup = {} as FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private navigationService: NavigationService) {
  }

  public user: firebase.User | null = null;


  public ngOnInit() {
    this.authService.user$.subscribe((value: firebase.User | null) => {
      console.log(value)
      this.user = value
    });

    this.formGroup = new FormGroup({
      login: new FormControl("", [Validators.required, Validators.minLength(4)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    })
  }

  public login(): void {
    this.authService.googleSingIn()
      .pipe(
        tap(() => this.router.navigate([this.navigationService.getMainLink()]))
      )
      .subscribe()
  }

  public onFormSubmit(): void {
    console.log(this.formGroup)
  }
}
