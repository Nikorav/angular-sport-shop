import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {from, tap} from "rxjs";
import {CartService} from "../../../services/cart.service";
import {Product} from "../../../cart/cart.component";

@Component({
  selector: "app-product-details",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent {

  public productID = this.activatedRoute.snapshot.paramMap.get("productId");

  public cart$ = this.cartService.selectCartValue()
    .pipe(
      tap(() => {
        this.cart = this.cartService.getCartValue();
      })
    );

  public cart = {} as any;

  public product: Product = {name: "Test 2", price: 250, quantity: 2};

  public isAccordionItemOpen = true;

  constructor(private activatedRoute: ActivatedRoute,
              private cartService: CartService) {
  }

  public onReturnButtonClick(): void {
    history.back();
  }

  public openAccordionItem(): void {
    this.isAccordionItemOpen = !this.isAccordionItemOpen;
  }

  public onAddToCartClick(): void {
    this.cartService.addProduct(this.product).subscribe();
  }

  public onCopyProductLink(): void {
    from(navigator.clipboard.writeText(window.location.href));
  }
}
