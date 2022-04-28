import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CartService} from "../services/cart.service";
import {tap} from "rxjs";
import {Cart} from "./types";
import {NavigationService} from "../services/navigation.service";

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
export class CartComponent {
  public cart$ = this.cartService.selectCartValue()
    .pipe(
      tap(() =>{
        this.cart = this.cartService.getCartValue();
      })
    );

  public cart: Cart<Product> = {} as Cart<Product>;

  public catalogLink = this.navigationService.getProductListLink();

  constructor(private cartService: CartService,
              private navigationService: NavigationService) {
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
}
