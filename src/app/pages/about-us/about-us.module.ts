import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AboutUsRoutingModule} from "./about-us-routing.module";
import {AboutUsComponent} from "./about-us.component";
import {TeamComponent} from "./components/team/team.component";
import {SharedModule} from "@shared/shared.module";
import {DoctorCardComponent} from "./components/doctor-card/doctor-card.component";



@NgModule({
  declarations: [
    AboutUsComponent,
    TeamComponent,
    DoctorCardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AboutUsRoutingModule
  ],
  exports: [AboutUsComponent],
  providers: [],
  bootstrap: [AboutUsComponent]
})
export class AboutUsModule { }
