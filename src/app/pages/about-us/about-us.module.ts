import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AboutUsRoutingModule} from "./about-us-routing.module";
import {AboutUsComponent} from "./about-us.component";
import {TeamComponent} from "./components/team/team.component";
import {SectionPreviewComponent} from "./components/section-preview/section-preview.component";



@NgModule({
  declarations: [
    AboutUsComponent,
    TeamComponent,
    SectionPreviewComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  exports: [AboutUsComponent],
  providers: [],
  bootstrap: [AboutUsComponent]
})
export class AboutUsModule { }
