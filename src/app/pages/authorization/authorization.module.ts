import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthorizationRoutingModule} from "./authorization-routing.module";
import {AuthorizationComponent} from "./authorization.component";


@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AuthorizationComponent]
})
export class AuthorizationModule { }
