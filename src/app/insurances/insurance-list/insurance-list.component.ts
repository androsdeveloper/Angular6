import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../shared/insurance.service'

import { Insurance } from '../shared/insurance.model';
import { ToastrService } from 'ngx-toastr';    

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {

  constructor(private insuranceService: InsuranceService, private toastr: ToastrService) { }

  ngOnInit() {
     this.insuranceService.getInsuranceList();
  }

  showForEdit(ins:Insurance){
 
 
    this.insuranceService.selectedInsurance = Object.assign({}, ins);
 
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.insuranceService.deleteInsurance(id)
      .subscribe(x => {
        this.insuranceService.getInsuranceList();
        this.toastr.warning("Deleted Successfully","Insurance Register");
      })
    }
  }

}


