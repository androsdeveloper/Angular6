import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' ;
import { AssignService } from '../shared/assign.service';
import { ToastrService } from 'ngx-toastr';
import { InsuranceService } from '../../insurances/shared/insurance.service' ;
import { Insurance } from '../../insurances/shared/insurance.model';
import { EmployeeService} from '../../Employees/shared/Employee.service';
import { Employee } from '../../Employees/shared/employee.model';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  constructor(private assignService : AssignService,private insuranceService: InsuranceService,private employeeService:EmployeeService,  private toastr: ToastrService) { }
  
  employee : Employee[];
  insurance : Insurance[];

  ngOnInit() {
    this.resetForm();
    this.employeeService.getEmployeeListForSelect()
    .subscribe(data=>{
      this.employee=data.json();
    });

    this.insuranceService.getInsuranceListForSelect()
    .subscribe(data=>{
      this.insurance=data.json();
    });
  
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.assignService.selectedAssign = {
      AssignId :null,
      EmployeeID: null,
      InsuranceId: null
    
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.AssignId == null) {
     
      //form.value.TypeCoveringId = form.value.TypeCoveringId.TypoCoveringId;
      //form.value.TypeRiskId = form.value.TypeRiskId.TypeRiskId;
      this.assignService.postAssign(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.assignService.getAssignList();
          this.toastr.success('New Record Added Succcessfully', 'Assign Register');
        })
    }
    else {
      this.assignService.putAssign(form.value.AssignId, form.value)
    
      .subscribe(data => {
        this.resetForm(form);
        this.assignService.getAssignList();
        this.toastr.info('Record Updated Successfully!', 'Assign Register');
      });
    }
    
  }

}


  
  

  



