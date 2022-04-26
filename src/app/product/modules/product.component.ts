import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "app-product",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./product.component.html",
})
export class ProductComponent {}
