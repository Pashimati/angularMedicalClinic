import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss'],
  providers: []
})
export class EntryCardComponent implements OnInit {

  @Input() user: any;

  constructor
  (
  ) { }

  ngOnInit(): void {
  }


  // remove(id: string) {
  //   this.http.deleteFileById('https://api-medical-clinic.herokuapp.com/subscription/delete', id)
  //     .subscribe({
  //       next: ({response}:any) => {
  //         if (response.success) {
  //           //
  //           this._snackBar.open('Subscription has been deleted', 'Undo', {
  //             duration: 3000
  //           });
  //         } else {
  //           this._snackBar.open('Subscription not been deleted', 'Undo', {
  //             duration: 3000
  //           });
  //         }
  //       }
  //     });
  // }

}
