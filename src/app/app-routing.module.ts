import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { HomeComponent } from './component/home/home.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { RegistrationComponent } from './component/registration/registration.component';


const routes: Routes = [
  {path:'registration/:id', component:RegistrationComponent},
  {path:'userRegister' ,component:UserRegistrationComponent},
  {path:'edit/:id', component:EditUserComponent},
  {path:'', component:HomeComponent}
  // { path: 'list', component: ListEmployeesComponent },
  // { path: 'create', component: CreateEmployeeComponent },
  // { path: 'edit/:id', component: CreateEmployeeComponent },
  // { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
