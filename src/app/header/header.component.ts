import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cartLink = this.navigationService.getCartLink();
  public profileLink = this.navigationService.getProfileLink();
  public homeLink = this.navigationService.getMainLink();

  constructor(private authService: AuthService,
              private navigationService: NavigationService,
              private router: Router ) {
  }
  public logout():void{
    this.authService.singOut().subscribe(()=> this.router.navigate(["/auth"]))
  }

  ngOnInit(): void {
  }

}
