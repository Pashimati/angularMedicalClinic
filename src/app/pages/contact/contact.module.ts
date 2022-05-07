import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactRoutingModule} from "./contact-routing.module";
import {ContactComponent} from "./contact.component";
import {MapComponent} from "./components/map/map.component";
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    ContactComponent,
    MapComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ContactRoutingModule,
  ],
  exports: [ContactComponent],
  providers: [],
  bootstrap: [ContactComponent]
})
export class ContactModule { }
