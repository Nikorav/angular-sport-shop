import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {CartService} from "../services/cart.service";
import {filter, switchMap, tap} from "rxjs";
import {Cart} from "./types";
import {NavigationService} from "../services/navigation.service";
import {AuthService} from "../services/auth.service";
import {CrudService} from "../services/crud.service";
import {Collection} from "../data-types/collections";
import {User} from "../data-types/User";
import firebase from "firebase/compat";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export type Product = {
  price: number;
  quantity: number;
  name: string;
}

@Component({
  selector: "app-cart",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  public cart$ = this.cartService.selectCartValue()
    .pipe(
      tap(() => {
        this.cart = this.cartService.getCartValue();
        this.totalPrice = this.cart?.items.reduce((acc, item) => acc += item.price * item.quantity, 0)
      })
    );


  public cart: Cart<Product> = {} as Cart<Product>;

  public totalPrice: number = 0;

  public userInfo: User = {} as User;

  public catalogLink = this.navigationService.getProductListLink();

  public formGroup: FormGroup = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    house: new FormControl('', [Validators.required]),
    corpus: new FormControl(''),
    entrance: new FormControl(''),
    floor: new FormControl('', [Validators.required]),
    flat: new FormControl('', [Validators.required]),
    message: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  constructor(private cartService: CartService,
              private navigationService: NavigationService,
              private authService: AuthService,
              private crudService: CrudService) {
  }

  public ngOnInit(): void {
    this.authService.selectUser()
      .pipe(
        filter((user: firebase.User | null) => !!user),
        switchMap((user: firebase.User | null) => {
          return this.crudService.fetchOneDocumentFromFirestore<User>(Collection.USERS, user!.uid)
            .pipe(
              tap((userInfo: User | null) => {
                if (userInfo) {
                  this.userInfo = userInfo
                }
              })
            )
        })
      ).subscribe()
  }

  public onDeleteProduct(index: number): void {
    this.cartService.deleteItemFromCart(index).subscribe();
  }

  public onDecreaseProductQuantity(index: number): void {
    this.cartService.decreaseProductQuantity(index).subscribe();
  }

  public onIncreaseProductQuantity(index: number): void {
    this.cartService.increaseProductQuantity(index).subscribe();
  }

  public onSubmit(): void {

    const {controls} = this.formGroup;
    if (this.formGroup.invalid) {
      Object.keys(controls).forEach((controlName: string) => controls[controlName].markAsTouched());
      return;
    }

    if (!(this.userInfo.balance >= this.totalPrice) || !this.formGroup.valid) {
      return;
    }



    const orderItems = this.cart.items;
    const totalPrice = this.totalPrice;

    this.crudService.updateDocument(Collection.USERS, this.userInfo.id, {
      balance: +this.userInfo.balance - +this.totalPrice,
    }).subscribe();

    this.crudService.updateDocument(Collection.CARTS, this.cart.id, {
      status: "bought"
    }).pipe(
      switchMap(() => {
        return this.crudService.createDocument(Collection.ORDERS, {
          items: orderItems,
          userID: this.userInfo.id,
          totalPrice: totalPrice,
          orderDescription: {
            city: controls['city'].value,
            street: controls['street'].value,
            house: controls['house'].value,
            corpus: controls['corpus'].value,
            entrance: controls['entrance'].value,
            floor: controls['floor'].value,
            flat: controls['flat'].value,
            message: controls['message'].value,
            name: controls['name'].value,
            surname: controls['surname'].value,
            email: controls['email'].value,
            phone: controls['phone'].value
          },
        })
      })
    ).subscribe();
  }
}
