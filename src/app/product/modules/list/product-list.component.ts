import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NavigationService} from "../../../services/navigation.service";

@Component({
  selector: "app-product-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./product-list.component.html",
})
export class ProductListComponent {

  public link = this.navigationService.getProductLink("12345");

  constructor(private navigationService: NavigationService) {
  }
}
