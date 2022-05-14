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
import {LoaderComponent} from "@core/components/loader/loader.component";
import {LoadingInterceptor} from "@core/interceptors/loading.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    LoaderComponent,
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
  providers: [
    StateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
