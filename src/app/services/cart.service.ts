import {Injectable} from "@angular/core";
import {CrudService} from "./crud.service";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Product} from "../cart/cart.component";
import {Cart} from "../cart/types";

@Injectable({
  providedIn: "root",
})
export class CartService {

  private carts$ = new BehaviorSubject<Cart<Product> | null>(null );

  private cart: null | any = null;

  constructor(private crudService: CrudService) {
  }

  public updateCart(items: any[]): Observable<void> {
    return this.crudService.updateDocument("carts", this.cart.id, {
      items: items,
    })
  }

  public fetchCarts(): Observable<Cart<Product>[]> {
    return this.crudService.fetchDataFromFirestore("carts")
      .pipe(
        tap((value: any) => {
          this.cart = value[0]
          this.carts$.next(value[0]);
        })
      );
  }

  public getCartValue(): Cart<Product> {
    console.log(this.cart)
    return this.cart;
  }

  public selectCartValue(): Observable<Cart<Product> | null> {
    return this.carts$
  }

  public deleteItemFromCart(index: number): Observable<void> {
    const products = this.cart?.items.filter((product: Product, productIndex: number) => index !== productIndex)
    return this.updateCart(products);
  }

  public addProduct(product: Product): Observable<void> {
    const productIndex = this.cart.items.findIndex((cartItem: Product) => cartItem.name === product.name);
    let products = [];
    if (productIndex !== -1) {
      products = this.cart.items;
      products[productIndex].quantity++;
    } else {
      products = [...this.cart.items, product];
    }

    return this.updateCart(products)
  }

  public increaseProductQuantity(index: number): Observable<void> {
    const products = this.cart.items;
    products[index].quantity++;
    return this.updateCart(products);
  }

  public decreaseProductQuantity(index: number): Observable<void> {
    const products = this.cart.items;
    products[index].quantity--;
    return  products[index].quantity === 0
      ? this.deleteItemFromCart(index)
      : this.updateCart(products);
  }
}
