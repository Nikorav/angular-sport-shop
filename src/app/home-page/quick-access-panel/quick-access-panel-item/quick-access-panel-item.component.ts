import {Component, Input, OnInit} from '@angular/core';
import {QuickAccessItem} from "../type";
import {NavigationService} from "../../../services/navigation.service";

@Component({
  selector: 'app-quick-access-panel-item',
  templateUrl: './quick-access-panel-item.component.html',
  styleUrls: ['./quick-access-panel-item.component.scss']
})
export class QuickAccessPanelItemComponent implements OnInit {

  @Input()
  public item: QuickAccessItem = {} as QuickAccessItem;

  public link: string = "";

  @Input()
  public itemTemplate: any;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.link = this.navigationService.getProductLink(this.item.id);
  }

}
