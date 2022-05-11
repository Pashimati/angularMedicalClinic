import {NgModule} from "@angular/core";
import {MaterialModules} from "./exports/material";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule,} from "@angular/forms";
import {BackBtnComponent} from "@shared/components/back-btn/back-btn.component";
import {BtnComponent} from "@shared/components/btn/btn.component";
import {FormAppointmentComponent} from "@shared/components/form-appoitnment/form-appointment.component";
import {DepartmentsCardComponent} from "@shared/components/departments-card/departments-card.component";
import {HomepageBoxesComponent} from "@shared/components/homepage-boxes/homepage-boxes.component";
import {OurDepartmentsComponent} from "@shared/components/our-departments/our-departments.component";
import {SectionPreviewComponent} from "@shared/components/section-preview/section-preview.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    BackBtnComponent,
    BtnComponent,
    FormAppointmentComponent,
    DepartmentsCardComponent,
    HomepageBoxesComponent,
    OurDepartmentsComponent,
    SectionPreviewComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    ...MaterialModules
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    BackBtnComponent,
    BtnComponent,
    FormAppointmentComponent,
    DepartmentsCardComponent,
    HomepageBoxesComponent,
    OurDepartmentsComponent,
    SectionPreviewComponent,
    ...MaterialModules,
  ]
})
export class SharedModule { }
