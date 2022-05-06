import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DoctorRoutingModule} from "./doctor-routing.module";
import {DoctorComponent} from "./doctor.component";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DoctorRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [DoctorComponent]
})
export class DoctorModule { }
