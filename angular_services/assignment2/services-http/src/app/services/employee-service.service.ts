import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employee: any;

  constructor(http: HttpClient) {
    this.employee = [];
    http.get<any>('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe(data => {
        this.employee = data.data;
      })
  }
  getEmployees() {
    return this.employee; 
  }
}
