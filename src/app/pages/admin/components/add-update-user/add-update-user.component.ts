import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "@core/services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
})
export class AddAndUpdateUser implements OnInit {
  profile: FormGroup
  id: string =''


  flag: boolean = true;

  constructor (
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.profile = new FormGroup({
      email: new FormControl("", Validators.min(3)),
      password: new FormControl("", Validators.min(3)),
      name: new FormControl("", Validators.min(3)),
      surname: new FormControl("", Validators.min(3)),
      sex: new FormControl(),
      age: new FormControl("", Validators.pattern("[0-9]{2}")),
      address: new FormControl("", Validators.min(20)),
      phone: new FormControl("", Validators.pattern("[- +()0-9]+")),
      fileName: new FormControl(),
    });
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe((id) => {
        this.userService.getUser(id)
          .subscribe({
            next: ({user}) => {

              if (id) {
                this.flag = false
              }
            }
          })
      });
  }

  addUser() {
    const data = this.profile.getRawValue()
      this.userService.addUser(data)
        .subscribe({
          next: () => {
            this.router.navigate(['/admin/list-of-users']);

            this._snackBar.open('User has been created', 'Undo', {
              duration: 3000
            });
          }
        });
  }
}
