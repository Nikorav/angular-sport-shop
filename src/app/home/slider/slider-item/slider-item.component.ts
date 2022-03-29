import {Component, Input, OnInit} from '@angular/core';
import {SliderItem} from "../types";

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnInit {

  @Input()
  public item: SliderItem = {} as SliderItem;

  constructor() { }

  ngOnInit(): void {}

}
