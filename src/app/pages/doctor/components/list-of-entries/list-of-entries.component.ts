import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {SubscribeService} from "@core/services/subscribe.service";
import {UsersService} from "@core/services/users.service";

@Component({
  selector: 'app-list-of-entries',
  templateUrl: './list-of-entries.component.html',
  styleUrls: ['./list-of-entries.component.scss'],
  providers: []
})
export class listOfEntriesComponent implements OnInit {

  users: object[] = [];

  constructor
  (
    private subscribeService: SubscribeService,
    private userService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe((uid) => {
        this.getSubscribeUsers(uid)
      })
  }

  getSubscribeUsers(uid: string) {
    this.subscribeService.getAllSubscriptionsById(uid)
      .subscribe({
        next: (data) => {
          const subscriptions = data.subscriptionsById
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
      })
  }
}
