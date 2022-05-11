import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from "./interceptors/auth.interceptor"
import {FooterComponent} from "@core/components/footer/footer.component";
import {HeaderComponent} from "@core/components/header/header.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {ModalDialogComponent} from "@core/components/modal-dialog/modal-dialog.component";

@NgModule({
  declarations: [
    ModalDialogComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
  ]
})
export class CoreModule { }
