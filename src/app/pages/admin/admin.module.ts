import {NgModule} from "@angular/core";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import {SharedModule} from "@shared/shared.module";
import {RouterModule} from "@angular/router";
import {ListOfUsersComponent} from "./components/list-of-users/list-of-users.component";
import {ListOfDoctorsComponent} from "./components/list-of-doctors/list-of-doctors.component";
import {ListOfDepartmentsComponent} from "./components/list-of-departments/list-of-departments.component";
import {ListOfSpecialityComponent} from "./components/list-of-speciality/list-of-speciality.component";
import {AddAndUpdateUser} from "./components/add-update-user/add-update-user.component";
import {AddUpdateDoctorComponent} from "./components/add-update-doctor/add-update-doctor.component";
import {AddAndUpdateDepartment} from "./components/add-update-department/add-update-department.component";
import {AddAndUpdateSpeciality} from "./components/add-update-speciality/add-update-speciality.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AdminComponent,
    ListOfUsersComponent,
    ListOfDoctorsComponent,
    ListOfDepartmentsComponent,
    ListOfSpecialityComponent,
    AddAndUpdateUser,
    AddUpdateDoctorComponent,
    AddAndUpdateDepartment,
    AddAndUpdateSpeciality,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    AdminRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
