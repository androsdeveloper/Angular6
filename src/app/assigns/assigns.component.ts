import { Component, OnInit } from '@angular/core';
import { AssignService } from './shared/assign.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-assigns',
  templateUrl: './assigns.component.html',
  styleUrls: ['./assigns.component.css'],
  providers :[AssignService]
})
export class AssignsComponent implements OnInit {

  constructor(private router: Router,private assignService: AssignService) { }

  ngOnInit() {
  }

  CustomersRoute(): void {
    this.router.navigate(['app-employee']);
  };

}
