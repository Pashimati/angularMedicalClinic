import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthorizationRoutingModule} from "./authorization-routing.module";
import {AuthorizationComponent} from "./authorization.component";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AuthorizationRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AuthorizationComponent]
})
export class AuthorizationModule { }
