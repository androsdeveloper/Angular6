import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers :[EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private router: Router,private employeeService: EmployeeService){
  }

  ngOnInit() {
  }

  Insurances(): void {
    this.router.navigate(['insurance-component']);
  };

}
