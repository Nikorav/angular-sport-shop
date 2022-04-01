import {Component, Input, OnInit} from '@angular/core';
import {QuickAccessItem} from "../type";

@Component({
  selector: 'app-quick-access-panel-item',
  templateUrl: './quick-access-panel-item.component.html',
  styleUrls: ['./quick-access-panel-item.component.scss']
})
export class QuickAccessPanelItemComponent implements OnInit {

  @Input()
  public item?: QuickAccessItem;

  @Input()
  public itemTemplate: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
