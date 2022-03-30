import { Component, OnInit } from '@angular/core';
import { PanelItem } from './category-panel-item/types';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.scss']
})

export class CategoryPanelComponent implements OnInit {

  public panelItems : PanelItem[] = [
    {
      image: '../../../../assets/category-panel/functional_underwear.jpg',
      title: 'Фунциональное бельё',
    },
    {
      image: '../../../../assets/category-panel/bicycling.jpg',
      title: 'Велоспорт',
    },
    {
      image: '../../../../assets/category-panel/running.jpg',
      title: 'Бег',
    },
    {
      image: '../../../../assets/category-panel/rest.jpg',
      title: 'Для отдыха',
    },
    {
      image: '../../../../assets/category-panel/diving.jpg',
      title: 'Дайвинг',
    },
    {
      image: '../../../../assets/category-panel/fitness.jpg',
      title: 'Фитнес',
    },
    {
      image: '../../../../assets/category-panel/simulators.png',
      title: 'Тренажёры',
    },
    {
      image: '../../../../assets/category-panel/sports_equipment.jpg',
      title: 'Спортинвентарь',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
