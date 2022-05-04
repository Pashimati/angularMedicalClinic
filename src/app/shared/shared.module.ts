import {NgModule} from "@angular/core";
import {MaterialModules} from "./exports/material";

@NgModule({
  declarations: [
  ],
  imports: [
    ...MaterialModules
  ],
  exports: [
    ...MaterialModules
  ]
})
export class SharedModule { }
