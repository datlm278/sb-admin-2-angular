import {Component, OnInit} from '@angular/core';
import EmployeeData from '/src/app/data.json'
import {Employee} from "../../models/employee";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  employee: Employee[] = EmployeeData;
  pageSize: number = 5;
  pageSizes: number[] = [5, 10, 15];
  page: number = 1;
  count: number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }
  handlePageChange(event: number): void {
    this.page = event;
  }
}
