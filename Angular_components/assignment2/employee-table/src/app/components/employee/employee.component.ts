import { Component, OnInit } from '@angular/core';
import { employee } from '../../interface/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees: employee[] = [];
  flag: boolean = false;
  id: number;
  editObj: employee;

  constructor() {
    this.id = 0;
    this.editObj = { employee_id: 1, first_name: "Ram", last_name: "sharma", dept: "CS", City: "Jaipur", email: "ram123@gmail.com" },

      this.employees = this.getEmployees();
  }

  ngOnInit(): void {
  }
  getEmployees() {
    this.employees = [
      { employee_id: 1, first_name: "Ram", last_name: "sharma", dept: "CS", City: "Jaipur", email: "ram123@gmail.com" },
      { employee_id: 2, first_name: "Rahul", last_name: "Kandira", dept: "SE", City: "Jaipur", email: "rahul123fs@gmail.com" },
      { employee_id: 3, first_name: "Anil", last_name: "goyal", dept: "CS", City: "Jaipur", email: "anil12353@gmail.com" },
      { employee_id: 4, first_name: "Abhijeet", last_name: "Sharma", dept: "SDE", City: "Jaipur", email: "abhijeetsharma123@gmail.com" },
      { employee_id: 5, first_name: "Piyush", last_name: "Sharma", dept: "SDE", City: "Jaipur", email: "piyushsharma123000@gmail.com" }
    ];
    return this.employees
  }

  Edit(id: number) {
    this.editObj = this.employees.filter((element) => element.employee_id == id)[0];
    this.flag = true;
    this.id = id;
    console.log(this.id);
  }

}
