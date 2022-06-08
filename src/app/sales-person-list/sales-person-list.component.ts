import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Mike","Stoba",'chigov@gmail.com',5000),
    new SalesPerson("Alex","Gerasimluik",'alex@gmail.com',6000),
    new SalesPerson("Max","Stoba",'max@gmail.com',7000),
    new SalesPerson("Alex","Aganasiev",'afa11afa@gmail.com',8000),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
