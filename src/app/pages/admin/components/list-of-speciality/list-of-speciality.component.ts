import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SpecialityService} from "@core/services/speciality.service";


@Component({
  selector: 'app-list-of-speciality',
  templateUrl: './list-of-speciality.component.html',

})
export class ListOfSpecialityComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'actions'];
  specialitys: [] = []

  constructor(
    private _snackBar: MatSnackBar,
    private specialityService: SpecialityService
  ) {

  }

  ngOnInit() {
    this.updateTableList()
  }

  updateTableList () {
    this.specialityService.getAllSpeciality()
      .subscribe({
        next: (data) => {
          const specialitys = data.specialitys

          this.specialitys = specialitys.map((speciality: any, key: number) => {
            const data = speciality.data
            const id = speciality.id
            return {
              id: id,
              position: key + 1,
              title: data.title,
            }
          })
        }
      })
  }

  remove(id: string) {
    this.specialityService.deleteSpeciality(id)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.updateTableList()
            this._snackBar.open('Speciality has been deleted', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Speciality not been deleted!', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }
}
