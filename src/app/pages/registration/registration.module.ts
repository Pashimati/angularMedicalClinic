import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RegistrationRoutingModule} from "./registration-routing.module";
import {RegistrationComponent} from "./registration.component";


@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
  ],
  exports: [RegistrationComponent],
  providers: [],
  bootstrap: [RegistrationComponent]
})
export class RegistrationModule { }
