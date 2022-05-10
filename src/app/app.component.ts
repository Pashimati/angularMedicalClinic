import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

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
    private router: Router,
  ) {
    router.events.forEach((event:any) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/authorization'
          || (event['url'] == '/registration')) {
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
