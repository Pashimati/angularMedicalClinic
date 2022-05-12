import { Component, OnInit } from '@angular/core';
import {UsersService} from "@core/services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = {
    id: '',
    name: '',
    surname: '',
    age: '',
    sex: '',
    address: '',
    phone: '',
  }

  flag: boolean = true;

  constructor (
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe((id) => {
        this.user.id = id
        this.userService.getUser(id)
          .subscribe({
            next: ({user}) => {
              this.user.name = user.name
              this.user.surname = user.surname
              this.user.age = user.age
              this.user.sex = user.sex
              this.user.address = user.address
              this.user.phone = user.phone
              if (id) {
                this.flag = false
              }
            }
          })
      });
  }

  updateUser() {
    this.userService.updateUser(this.user)
      .subscribe({
        next: () => {
          this.router.navigate(['']);

          this._snackBar.open('User has been updated', 'Undo', {
            duration: 3000
          });
        }
      });
  }


}
