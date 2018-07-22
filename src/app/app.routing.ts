import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./LoginUser/login/login.component";
import {AddUserComponent} from "./LoginUser/add-user/add-user.component";
import {ListUserComponent} from "./LoginUser/list-user/list-user.component";
import {EditUserComponent} from "./LoginUser/edit-user/edit-user.component";
import {EmployeesComponent} from "./employees/employees.component";
import {InsurancesComponent} from "./insurances/insurances.component";
import {AssignsComponent} from "./assigns/assigns.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'app-employee', component: EmployeesComponent },
  { path: 'insurance-component', component: InsurancesComponent },
  { path: 'assign-component', component: AssignsComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);