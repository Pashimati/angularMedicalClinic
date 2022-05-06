import {NgModule} from "@angular/core";
import {MaterialModules} from "./exports/material";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MaterialModules
  ],
  exports: [
    ReactiveFormsModule,
    ...MaterialModules
  ]
})
export class SharedModule { }
