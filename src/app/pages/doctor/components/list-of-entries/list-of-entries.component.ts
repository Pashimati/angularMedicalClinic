import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {SubscribeService} from "@core/services/subscribe.service";
import {UsersService} from "@core/services/users.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-of-entries',
  templateUrl: './list-of-entries.component.html',
  styleUrls: ['./list-of-entries.component.scss'],
  providers: []
})
export class listOfEntriesComponent implements OnInit {

  idDoctor: string = ''
  users: object[] = [];

  constructor
  (    private _snackBar: MatSnackBar,

    private subscribeService: SubscribeService,
    private userService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe((uid) => {
        this.idDoctor = uid
        this.getSubscribeUsers(uid)
      })
  }

  getSubscribeUsers(uid: string) {
    this.subscribeService.getAllSubscriptionsById(uid)
      .subscribe({
        next: (response) => {
          if (response.success) {
            const subscriptions = response.subscriptionsById
            subscriptions.map((subscription: any) => {
              const uidUser = subscription.data.uidUser
              const id = subscription.id
              const email = subscription.data.email
              let date = subscription.data.date

              this.userService.getUser(uidUser)
                .subscribe({
                  next: (data) => {
                    const user = data.user
                    this.users.push({...user, email, date, id})
                  }
                })
            })
          }
        }
      })
  }

  removeSubscription(id: string){
    this.subscribeService.deleteSubscription(id)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.getSubscribeUsers(this.idDoctor)
            this._snackBar.open('Subscription has been deleted', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Subscription not been deleted', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }
}
