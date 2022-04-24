import {Component, OnInit} from '@angular/core';
import {CrudService} from "./services/crud.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sport-shop';

  constructor(private crudService: CrudService){}

  ngOnInit(): void {
    this.crudService.fetchDataFromFirestore("items").subscribe(value => console.log(value))
  }
}
