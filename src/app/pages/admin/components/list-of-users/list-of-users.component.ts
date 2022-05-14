import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsersService} from "@core/services/users.service";

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
})
export class ListOfUsersComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private _snackBar: MatSnackBar,
  ) {
  }


  users = []

  ngOnInit() {
    this.updateTableList()
  }

  displayedColumns: string[] = ['position', 'name', 'surname','sex','age', 'address', 'phone', 'actions'];

  updateTableList () {
    this.userService.getAllUsers()
      .subscribe({
        next: (data) => {
          const users = data.users

          this.users = users.map((user: any, key: number) => {
            const data = user.data
            const id = user.id

            return {
              id: id,
              position: key + 1,
              name: data.name,
              surname: data.surname,
              sex: data.sex,
              age: data.age,
              address: data.address,
              phone: data.phone,
            }
          })
        }
      })
  }

  remove(id: string) {
    this.userService.deleteUser(id)
      .subscribe({
        next: () => {
          this.updateTableList()
          this._snackBar.open('User has been deleted', 'Undo', {
            duration: 3000
          });
        }
      });
  }
}
