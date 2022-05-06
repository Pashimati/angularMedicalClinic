import {NgModule} from "@angular/core";
import {RegistrationRoutingModule} from "./registration-routing.module";
import {RegistrationComponent} from "./registration.component";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    RegistrationComponent,

  ],
  imports: [
    SharedModule,
    RegistrationRoutingModule,
  ],
  exports: [RegistrationComponent],
  providers: [],
  bootstrap: [RegistrationComponent]
})
export class RegistrationModule { }
