import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "@core/components/footer/footer.component";
import {HeaderComponent} from "@core/components/header/header.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
})
export class CoreModule { }
