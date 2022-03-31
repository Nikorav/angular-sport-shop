import { Component, OnInit } from '@angular/core';
import {QuickAccessItem} from "./type";

@Component({
  selector: 'app-quick-access-panel',
  templateUrl: './quick-access-panel.component.html',
  styleUrls: ['./quick-access-panel.component.scss']
})
export class QuickAccessPanelComponent implements OnInit {

  public quickAccessItems : QuickAccessItem[] = [
    {
      id: 'id товара: 1',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: 'id товара: 2',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: 'id товара: 3',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: 'id товара: 4',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: 'id товара: 5',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
