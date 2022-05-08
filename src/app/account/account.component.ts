import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../services/navigation.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {

  public profileLink = this.navigationService.getProfileLink();
  public authLink = this.navigationService.getAuthLink();
  public paymentLink = this.navigationService.getPaymentLink();

  constructor(private navigationService : NavigationService,
              private authService : AuthService) { }

  public logout():void{
    this.authService.singOut().subscribe();
  }

  ngOnInit(): void {
  }

}
