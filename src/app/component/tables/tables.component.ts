import { Component, OnInit } from '@angular/core';
// @ts-ignore
import data from './data.json';
import {Employee} from "../../models/employee";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  employee: Employee[] = data;

  constructor() {
    console.log(this.employee);
  }

  ngOnInit(): void {
  }

}
