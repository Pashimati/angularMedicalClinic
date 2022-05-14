import { Component, OnInit } from '@angular/core';
import {LoadingService} from "@core/services/loading.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading$ = this.loadingService.loading$

  constructor(public loadingService: LoadingService) { }
  ngOnInit() {
  }
}
