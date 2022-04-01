import {Component, Input, OnInit} from '@angular/core';
import {CategoryItem} from "../types";

@Component({
  selector: 'app-category-panel-item',
  templateUrl: './category-panel-item.component.html',
  styleUrls: ['./category-panel-item.component.scss']
})
export class CategoryPanelItemComponent implements OnInit {

  @Input()
  public item?: CategoryItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}
