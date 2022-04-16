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
    //this.crudService.fetchDataFromFirestore("books").subscribe(val => console.log(val));
    //this.crudService.fetchOneDocumentFromFirestore("books", "LpQnc8EZPIwbpVd90Irw").subscribe(val => console.log(val));
    //this.crudService.deleteDocumentFromCollection("books", "LpQnc8EZPIwbpVd90Irw").subscribe(val => console.log(val, 1))
    //this.crudService.createDocument("books", {title: 'test', author: 'Kolya'}).subscribe(val => console.log(val));
    //this.crudService.updateDocument("books","LpQnc8EZPIwbpVd90Irw", {title: "Властелин колец: Две твердыни"}).subscribe(val => console.log(val));

  }
}
