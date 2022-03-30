import { Component, OnInit } from '@angular/core';
import {SliderItem} from "./types";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {

  public sliderItems: SliderItem[] = [
    {
      title: 'В СПОРТЕ, КАК И В КАЗИНО, ВЫИГРАТЬ СЛУЧАЙНО ОЧЕНЬ ТРУДНО!',
      image: '../../../../assets/slider.jpg',
      definition: 'Функциональная одежда от мировых брендов',
    },
    {
      title: 'test 1 !',
      image: '../../../../assets/slider.jpg',
      definition: 'Функциональная одежда от мировых брендов',
    },
    {
      title: 'test 2 !',
      image: '../../../../assets/slider.jpg',
      definition: 'Функциональная одежда от мировых брендов',
    }
  ];

  public index: number = 0;

  constructor() { }

  public _onChangeSlide(index:number) : void {
    this.index = index
  }

  ngOnInit(): void {
  }

}
