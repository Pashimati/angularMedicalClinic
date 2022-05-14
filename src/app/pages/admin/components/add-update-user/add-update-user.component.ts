import { Component, OnInit } from '@angular/core';
import {UsersService} from "@core/services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
})
export class AddAndUpdateUser implements OnInit {

  user = {
    id: '',
    name: '',
    surname: '',
    age: '',
    sex: '',
    address: '',
    email: '',
    password: '',
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
        this.userService.getUser(id)
          .subscribe({
            next: ({user}) => {
              this.user.name = user.name
              this.user.surname = user.surname
              this.user.age = user.age
              this.user.sex = user.sex
              this.user.address = user.address
              this.user.phone = user.phone
              this.user.id = id
              if (id) {
                this.flag = false
              }
            }
          })
      });
  }

  addUser() {
      this.userService.addUser(this.user)
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.router.navigate(['/admin/list-of-users']);
              this._snackBar.open('User has been added', 'Undo', {
                duration: 3000
              });
            } else {
              this._snackBar.open('User not been added', 'Undo', {
                duration: 3000
              });
            }
          }
        });
  }

  updateUser() {
    this.userService.updateUser(this.user)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(['/admin/list-of-users']);
            this._snackBar.open('User has been updated', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('User not been updated', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }


}
