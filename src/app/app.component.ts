import {Component, OnInit} from '@angular/core';
import {CrudService} from "./services/crud.service";
import {combineLatest, of, switchMap} from "rxjs";
import {CartService} from "./services/cart.service";
import {Collection} from "./data-types/collections";
import {AuthService} from "./services/auth.service";
import {getFirestoreCollectionQuery} from "./utils/utils";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sport-shop';

  constructor(private crudService: CrudService,
              private authService: AuthService,
              private cartService: CartService){}

  ngOnInit(): void {
    combineLatest([
      this.crudService.fetchDataFromFirestore(Collection.ITEMS),
      this.authService.selectUser()
    ]).pipe(
      switchMap(([, user]) => {
        if(!user) {
          return of(null);
        }
        const conditions = {
          status: {
            condition: "==",
            value: "active",
          },
          userID: {
            condition: "==",
            value: user.uid,
          }
        }
        return this.cartService.fetchCarts(getFirestoreCollectionQuery(conditions)).pipe(
          switchMap((carts) => {
            if(!carts.length) {
              return this.crudService.createDocument(Collection.CARTS, {
                userID: user.uid,
                status: 'active',
                items: [],
              })
            }
            return of(carts);
          })
        );
      })
    ).subscribe()
  }
}
