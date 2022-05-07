import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ServiceRoutingModule} from "./service-routing.module";
import {ServiceComponent} from "./service.component";
import {ServiceBoxComponent} from "./components/service-box/service-box.component";
import {SharedModule} from "@shared/shared.module";




@NgModule({
  declarations: [
    ServiceComponent,
    ServiceBoxComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ServiceRoutingModule,
  ],
  exports: [ServiceComponent],
  providers: [],
  bootstrap: [ServiceComponent]
})
export class ServiceModule { }
