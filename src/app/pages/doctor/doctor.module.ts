import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DoctorRoutingModule} from "./doctor-routing.module";
import {DoctorComponent} from "./doctor.component";
import {SharedModule} from "@shared/shared.module";
import {listOfEntriesComponent} from "./components/list-of-entries/list-of-entries.component";
import {EntryCardComponent} from "./components/entry-card/entry-card.component";

@NgModule({
  declarations: [
    DoctorComponent,
    listOfEntriesComponent,
    EntryCardComponent,
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
