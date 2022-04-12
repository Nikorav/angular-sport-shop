import {Component, OnInit} from '@angular/core';
import {QuickAccessItem} from "./type";

@Component({
  selector: 'app-quick-access-panel',
  templateUrl: './quick-access-panel.component.html',
  styleUrls: ['./quick-access-panel.component.scss']
})
export class QuickAccessPanelComponent implements OnInit {

  public quickAccessItems: QuickAccessItem[] = [
    {
      id: '1',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: '2',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: '3',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: '4',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: '5',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: '6',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: '7',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: '8',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: '9',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    },
    {
      id: '10',
      brand: '../../../../assets/quick-access-panel/scout.jpg',
      image: '../../../../assets/quick-access-panel/splav_scout.jpg',
      title: 'SPLAV Scout 3 200 (зелёный) спальный мешок',
      price: '115.00 руб.',
    }
  ];

  public marketItems: QuickAccessItem[] = [];

  public trackByFn(index: number, item: any,): string {
    return item.id;
  }

  public isButtonDisabled = false;

  public itemsPerPage: number = 5;

  constructor() {
  }

  public doSlide(direction: number): void {

    if (direction === 1) {
      const lastItem = this.marketItems[this.marketItems.length - 1];
      const elemIndex = this.marketItems[this.itemsPerPage - 1]?.id === this.quickAccessItems[this.quickAccessItems.length - 1]?.id
        ? 0
        : this.quickAccessItems.findIndex((item) => item.id === lastItem.id) + 1;
      this.marketItems.shift();
      this.marketItems = [...this.marketItems, this.quickAccessItems[elemIndex]];
    } else {
      const [firstItem] = this.marketItems;
      const elemIndex = this.marketItems[0]?.id === this.quickAccessItems[0]?.id
        ? this.quickAccessItems.length - 1
        : this.quickAccessItems.findIndex((item) => item.id === firstItem.id) - 1;
      this.marketItems.pop();
      this.marketItems = [this.quickAccessItems[elemIndex], ...this.marketItems,];

    }
  }

  ngOnInit(): void {
    this.marketItems = this.quickAccessItems.slice(0, this.itemsPerPage);
    this.isButtonDisabled = this.quickAccessItems.length < this.itemsPerPage;
  }

}
