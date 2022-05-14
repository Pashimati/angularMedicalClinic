import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {switchMap} from "rxjs";
import {DoctorsService} from "@core/services/doctors.service";

@Component({
  selector: 'app-add-update-doctor',
  templateUrl: './add-update-doctor.component.html',
  providers: []
})
export class AddUpdateDoctorComponent implements OnInit {

  doctor = {
    id: '',
    name: '',
    surname: '',
    speciality: '',
    department: '',
    about: '',
    email: '',
    password: '',
  }
  flag: boolean = false

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorsService,
    private _snackBar: MatSnackBar
  ) {

  }
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe((id) => {
        this.doctorService.getDoctor(id)
          .subscribe({
            next: (data) => {
              const doctor = data.doctor
              this.doctor.name = doctor.name
              this.doctor.surname = doctor.surname
              this.doctor.speciality = doctor.speciality
              this.doctor.department = doctor.department
              this.doctor.about = doctor.about
              this.doctor.id = id
              if (id) {
                this.flag = true
              }
            }
          })
      });
  }

  updateDoctor() {
    this.doctorService.updateDoctor(this.doctor)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(['/admin/list-of-doctors']);
            this._snackBar.open('Doctor has been updated', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Doctor not been updated', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }

  addDoctor() {
    this.doctorService.addDoctor(this.doctor)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(['/admin/list-of-doctors']);
            this._snackBar.open('Doctor has been added', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Doctor not been added', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }
}
