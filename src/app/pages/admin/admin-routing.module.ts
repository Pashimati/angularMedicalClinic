import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListOfUsersComponent} from "./components/list-of-users/list-of-users.component";
import {ListOfDoctorsComponent} from "./components/list-of-doctors/list-of-doctors.component";
import {ListOfDepartmentsComponent} from "./components/list-of-departments/list-of-departments.component";
import {ListOfSpecialityComponent} from "./components/list-of-speciality/list-of-speciality.component";
import {AddAndUpdateUser} from "./components/add-update-user/add-update-user.component";
import {AddUpdateDoctorComponent} from "./components/add-update-doctor/add-update-doctor.component";
import {AddAndUpdateDepartment} from "./components/add-update-department/add-update-department.component";
import {AddAndUpdateSpeciality} from "./components/add-update-speciality/add-update-speciality.component";
import {AdminComponent} from "./admin.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, // this is the component with the <router-outlet> in the template
    children: [
      {path: '/list-of-users', component: ListOfUsersComponent},
      {path: '/list-of-doctors', component: ListOfDoctorsComponent},
      {path: '/list-of-departments', component: ListOfDepartmentsComponent},
      {path: '/list-of-speciality', component: ListOfSpecialityComponent},
      {path: '/add-update-user', component: AddAndUpdateUser},
      {path: '/add-update-doctor', component: AddUpdateDoctorComponent},
      {path: '/add-update-department', component: AddAndUpdateDepartment},
      {path: '/add-update-speciality', component: AddAndUpdateSpeciality},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
