import {Component, Input, OnInit} from '@angular/core';
import {PanelItem} from "./types";

@Component({
  selector: 'app-category-panel-item',
  templateUrl: './category-panel-item.component.html',
  styleUrls: ['./category-panel-item.component.scss']
})
export class CategoryPanelItemComponent implements OnInit {

  @Input()
  public item: PanelItem = {} as PanelItem;

  constructor() { }

  ngOnInit(): void {
  }

}
