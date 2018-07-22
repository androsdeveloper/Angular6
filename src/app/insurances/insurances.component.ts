import { Component, OnInit } from '@angular/core';
import { InsuranceService } from './shared/insurance.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.css'],
  providers :[InsuranceService]
})
export class InsurancesComponent implements OnInit {

  constructor(private router: Router,private insuranceService: InsuranceService) { }

  ngOnInit() {
  }

  
  AssignsRoute(): void {
    this.router.navigate(['assign-component']);
  };
}

