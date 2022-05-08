import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cartLink = this.navigationService.getCartLink();
  public accountLink = this.navigationService.getAccountLink();
  public homeLink = this.navigationService.getMainLink();

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
  }

}
