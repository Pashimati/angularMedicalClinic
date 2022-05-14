import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {LoadingService} from "@core/services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHead: boolean = false;
  showFoot: boolean = false;

  ngOnInit() {
  }

  constructor(
    public loader: LoadingService,
    private router: Router,
  ) {
    router.events.forEach((event:any) => {
      if (event instanceof NavigationStart) {
        if (
          event['url'] == '/authorization'
          || (event['url'] == '/registration')
          || (event['url'] == '/not-found')
          ) {
          this.showHead = false;
          this.showFoot = false;
        } else {
          this.showHead = true;
          this.showFoot = true;
        }
      }
    });
  }
}
