import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IndexRoutingModule} from "./index-routing.module";
import {IndexComponent} from "./index.component";
import {OurDepartmentsComponent} from "./components/our-departments/our-departments.component";
import {HomepageBoxesComponent} from "./components/homepage-boxes/homepage-boxes.component";
import {SectionIndexComponent} from "./components/section-index/section-index.component";
import {TheNewsComponent} from "./components/the-news/the-news.component";


@NgModule({
  declarations: [
    IndexComponent,
    HomepageBoxesComponent,
    OurDepartmentsComponent,
    SectionIndexComponent,
    TheNewsComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
  ],
  exports: [IndexComponent],
  providers: [],
  bootstrap: [IndexComponent]
})
export class IndexModule { }
