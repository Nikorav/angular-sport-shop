import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public user: firebase.User | null = null;


  public ngOnInit() {
    this.authService.user$.subscribe((value : firebase.User | null) => this.user = value);
  }

  public login(): void {
    this.authService.googleSingIn().subscribe()
  }
}
