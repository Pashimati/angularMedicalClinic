import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {DoctorsService} from "@core/services/doctors.service";

@Component({
  selector: 'app-list-of-doctors',
  templateUrl: './list-of-doctors.component.html',
})
export class ListOfDoctorsComponent implements OnInit {

  doctors = []

  displayedColumns: string[] = ['position', 'name', 'surname','speciality','department', 'actions'];

  constructor (
    private _snackBar: MatSnackBar,
    private doctorsService: DoctorsService
  ) {
  }

  ngOnInit() {
    this.updateTableList()
  }

  updateTableList () {
    this.doctorsService.getAllDoctors()
      .subscribe({
        next: (data) => {
          const doctors = data.doctors
          this.doctors = doctors.map((doctor: any, key: number) => {
            const data = doctor.data
            const id = doctor.id

            return {
              id: id,
              position: key + 1,
              name: data.name,
              surname: data.surname,
              speciality: data.speciality,
              department: data.department,
            }
          })
        }
      })
  }

  removeDoctor(id: string) {
    this.doctorsService.deleteDoctor(id)
      .subscribe({
        next: () => {
            this.updateTableList()
            this._snackBar.open('Doctor has been deleted', 'Undo', {
              duration: 3000
            });

        }
      });
  }
}
