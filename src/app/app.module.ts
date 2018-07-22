import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './LoginUser/login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./LoginUser/service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AddUserComponent } from './LoginUser/add-user/add-user.component';
import { EditUserComponent } from './LoginUser/edit-user/edit-user.component';
import { ListUserComponent } from './LoginUser/list-user/list-user.component';
import {UserService} from "./LoginUser/service/user.service";


import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';
import { InsurancesComponent } from './insurances/insurances.component';
import { InsuranceComponent } from './insurances/insurance/insurance.component';
import { InsuranceListComponent } from './insurances/insurance-list/insurance-list.component';
import { TypesRisksComponent } from './types-risks/types-risks.component';

import { TypeRiskListComponent } from './types-risks/type-risk-list/type-risk-list.component';
import { TypeCoveringsComponent } from './type-coverings/type-coverings.component';
import { TypeCoveringComponent } from './type-coverings/type-covering/type-covering.component';
import { TypeCoveringListComponent } from './type-coverings/type-covering-list/type-covering-list.component';

import { AssignsComponent } from './assigns/assigns.component';
import { AssignComponent } from './assigns/assign/assign.component';
import { AssignListComponent } from './assigns/assign-list/assign-list.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    InsurancesComponent,
    InsuranceComponent,
    InsuranceListComponent,
    TypesRisksComponent,
    TypeRiskListComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    TypeCoveringsComponent,
    TypeCoveringComponent,
    TypeCoveringListComponent,
    AssignsComponent,
    AssignComponent,
    AssignListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
