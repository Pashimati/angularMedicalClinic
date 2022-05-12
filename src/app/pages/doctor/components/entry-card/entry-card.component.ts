import {Component, Input, OnInit} from '@angular/core';
import {SubscribeService} from "@core/services/auth/subscribe.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss'],
  providers: []
})
export class EntryCardComponent implements OnInit {

  @Input() user: any;

  constructor (
    private subscribeService: SubscribeService,
    private _snackBar: MatSnackBar

) {
  }

  ngOnInit(): void {
  }

  remove(id: string) {
    this.subscribeService.deleteSubscription(id)
      .subscribe({
        next: () => {
            this._snackBar.open('Subscription has been deleted', 'Undo', {
              duration: 3000
            });
        }
      });
  }

}
