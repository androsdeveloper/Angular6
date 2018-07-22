import { Component, OnInit } from '@angular/core';
import { AssignService } from '../shared/assign.service'

import { Assign } from '../shared/assign.model';
import { ToastrService } from 'ngx-toastr';    

@Component({
  selector: 'app-assign-list',
  templateUrl: './assign-list.component.html',
  styleUrls: ['./assign-list.component.css']
})
export class AssignListComponent implements OnInit {

  constructor(private assignService: AssignService, private toastr: ToastrService) { }
  
  ngOnInit() {
     this.assignService.getAssignList();
  }

  showForEdit(ins:Assign){ 
    this.assignService.selectedAssign = Object.assign({}, ins); 
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.assignService.deleteAssign(id)
      .subscribe(x => {
        this.assignService.getAssignList();
        this.toastr.warning("Deleted Successfully","Insurance Register");
      })
    }
  }
}

 
