import { Component, OnInit } from '@angular/core';

import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  employee: any;

  constructor(private _employeeService: EmployeeServiceService) {
    this.employee = [];
    this.employee.push(_employeeService);

  }

  ngOnInit(): void {
  }
  getEmployees() {
    this.employee = this._employeeService.getEmployees();
    console.log(this.employee);
  }

}
