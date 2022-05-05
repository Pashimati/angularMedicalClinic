import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactRoutingModule} from "./contact-routing.module";
import {ContactComponent} from "./contact.component";
import {MapComponent} from "./components/map/map.component";
import {SectionPreviewComponent} from "./components/section-preview/section-preview.component";
import {HomepageBoxesComponent} from "./components/homepage-boxes/homepage-boxes.component";



@NgModule({
  declarations: [
    ContactComponent,
    HomepageBoxesComponent,
    MapComponent,
    SectionPreviewComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
  ],
  exports: [ContactComponent],
  providers: [],
  bootstrap: [ContactComponent]
})
export class ContactModule { }
