import {Component, OnInit} from '@angular/core';
import {CrudService} from "./services/crud.service";
import {combineLatest} from "rxjs";
import {CartService} from "./services/cart.service";
import {Collection} from "./data-types/collections";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sport-shop';

  constructor(private crudService: CrudService,
              private cartService: CartService){}

  ngOnInit(): void {
    combineLatest([
      this.crudService.fetchDataFromFirestore(Collection.ITEMS),
      this.cartService.fetchCarts(),
    ]).subscribe()
  }
}
