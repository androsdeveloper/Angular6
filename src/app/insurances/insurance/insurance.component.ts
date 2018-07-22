import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' 
import { InsuranceService } from '../shared/insurance.service' 
import { TypeRiskService} from '../../types-risks/shared/type-risk.service'
import { ToastrService } from 'ngx-toastr'
import { TypeRiskModel } from '../../types-risks/shared/type-risk.model';
import { TypeCoveringService } from '../../type-coverings/shared/type-covering.service';
import { TypeCovering } from '../../type-coverings/shared/type-covering.model';

import { EmployeeService } from '../../Employees/shared/Employee.service';
import { Employee } from '../../Employees/shared/Employee.model';
import { and } from '../../../../node_modules/@angular/router/src/utils/collection';
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  selectedTypeRisk
  selectedTypeCovering  

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedTypeRisk = event.target.selectedIndex;   
  } 

  constructor(private insuranceService: InsuranceService, private typeRiskService: TypeRiskService, private typeCoveringService : TypeCoveringService, private toastr: ToastrService) { 
   
  }
  typeRisk : TypeRiskModel[];
  typeCovering : TypeCovering[];

  ngOnInit() {
    this.resetForm();
    this.typeRiskService.getTypeRiskList2()
    .subscribe(data=>{
      this.typeRisk=data.json();
    });

    this.typeCoveringService.getTypeCoveringSelect()
    .subscribe(data=>{
      this.typeCovering=data.json();
    });
  
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.insuranceService.selectedInsurance = {
      InsuranceId :null,
      Name: '',
      DescriptionInsurance: '',
      TypeCoveringId: null,
      Coverage : null,
      StartValidity : null,
      Price : null,
      TypeRiskId : null
    }
  }

  onSubmit(form: NgForm) {

    if(form.value.Coverage >50 && form.value.TypeRiskId == 4){
      this.toastr.info('The value of coverage can not exceed 50% when the type of risk is high!', 'Insurance Register');
    }
    else{
        if (form.value.InsuranceId == null) {
        
          //form.value.TypeCoveringId = form.value.TypeCoveringId.TypoCoveringId;
          //form.value.TypeRiskId = form.value.TypeRiskId.TypeRiskId;     

          this.insuranceService.postInsurance(form.value)
            .subscribe(data => {
              this.resetForm(form);
              this.insuranceService.getInsuranceList();
              this.toastr.success('New Record Added Succcessfully', 'Insurance Register');
            })
        }
        else {
          this.insuranceService.putInsurance(form.value.InsuranceId, form.value)
        
          .subscribe(data => {
            this.resetForm(form);
            this.insuranceService.getInsuranceList();
            this.toastr.info('Record Updated Successfully!', 'Insurance Register');
          });
        }
      }
  }

  

}

