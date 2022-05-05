import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ServiceRoutingModule} from "./service-routing.module";
import {ServiceComponent} from "./service.component";
import {SectionPreviewComponent} from "./components/section-preview/section-preview.component";
import {ServiceBoxComponent} from "./components/service-box/service-box.component";
import {OurDepartmentsComponent} from "./components/our-departments/our-departments.component";




@NgModule({
  declarations: [
    ServiceComponent,
    SectionPreviewComponent,
    ServiceBoxComponent,
    OurDepartmentsComponent,
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
  ],
  exports: [ServiceComponent],
  providers: [],
  bootstrap: [ServiceComponent]
})
export class ServiceModule { }
