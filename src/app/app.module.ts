import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "@shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "@core/core.module";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "src/environments/environment";
import {AuthorizationModule} from "./pages/authorization/authorization.module";
import {StateService} from "@core/services/state.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
