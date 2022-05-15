import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DepartmentService} from "@core/services/department.service";
import {DoctorsService} from "@core/services/doctors.service";
import {SubscribeService} from "@core/services/subscribe.service";
import {StateService} from "@core/services/state.service";
import {Router} from "@angular/router";

interface nameDepartment {
  value: string;
  viewValue: string;
}

interface Doctor {
  name: string
  surname: string
  about: string
  speciality: string
  department: string
}
@Component({
  selector: 'app-form-appointment',
  templateUrl: './form-appointment.component.html',
  styleUrls: ['./form-appointment.component.scss'],
})
export class FormAppointmentComponent implements OnInit {

  flag: boolean = false

  appointment: FormGroup

  doctors: Doctor [] = [];

  allDoctors: Doctor [] = [];

  nameDepartments: nameDepartment[] = [];

  constructor (
    private router: Router,
    private stateService: StateService,
    private departmentService: DepartmentService,
    private subscriptionService: SubscribeService,
    private doctorService: DoctorsService,
    private _snackBar: MatSnackBar
  ) {
    this.appointment = new FormGroup({

      date: new FormControl(),
      time: new FormControl(),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl(),
      nameDepartment: new FormControl(),
      nameDoctor: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.stateService.isLoggedIn()
      .subscribe(value => {
        console.log(value)
        this.flag = value
        if (!value) {
          this.appointment.disable();
        }
      })

    this.setNameDepartments()
    this.setDoctors()
  }

  setNameDepartments () {
    this.departmentService.getAllDepartments()
      .subscribe({
        next: (data) => {
          const departments = data.departments

          this.nameDepartments = departments.map((department: any) => {
            const data = department.data
            return {
              viewValue: data.title,
              value: data.title,
            }
          })
        }
      })
  }

  setDoctors (): any {
    this.doctorService.getAllDoctors()
      .subscribe({
        next: (data) => {
          const doctors = data.doctors

          this.allDoctors = doctors.map((doctor: any) => {
            const data = doctor.data
            return {
              doctorUid: data.doctorUid,
              name: data.name,
              surname: data.surname,
              department: data.department,
            }
          })
        }
      })
  }


  onChange(event: any) {
    const department: string = event.value
    this.doctors = this.getDoctors(department);
  }

  getDoctors(department: string) {

    let response: Doctor [] = []

    this.allDoctors.forEach((doctor) => {
      if (doctor.department === department) {
        response.push(doctor)
      }
    })
    return response
  }

  submit() {
    if (this.flag) {
      const data = this.appointment.getRawValue()
      data.uidUser = localStorage.getItem('id')
      this.subscriptionService.addSubscription(data)
        .subscribe({
          next: (response) => {
            if (response.success) {
              this._snackBar.open('You have an appointment with a doctor', 'Undo', {
                duration: 3000
              });
            } else {
              this._snackBar.open('Unsuccessful!', 'Undo', {
                duration: 3000
              });
            }
          }
        });
    } else {
      this.router.navigate(['/authorization'])
    }
  }

}
