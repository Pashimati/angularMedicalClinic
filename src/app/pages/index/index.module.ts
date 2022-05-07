import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IndexRoutingModule} from "./index-routing.module";
import {IndexComponent} from "./index.component";
import {SectionIndexComponent} from "./components/section-index/section-index.component";
import {TheNewsComponent} from "./components/the-news/the-news.component";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    IndexComponent,
    SectionIndexComponent,
    TheNewsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    IndexRoutingModule,
  ],
  exports: [IndexComponent],
  providers: [],
  bootstrap: [IndexComponent]
})
export class IndexModule { }
