import { Component, OnInit } from '@angular/core';

export interface Doctor {
  name: string
  surname: string
  about: string
  speciality: string
  department: string
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [],
})
export class TeamComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.getDoctors()
  }

  // getDoctors() {
  //   this.http.getAll('https://api-medical-clinic.herokuapp.com/doctor/get-all')
  //     .subscribe({
  //       next: ({response}: any) => {
  //         const doctors = response.doctors
  //
  //         this.doctors = doctors.map((doctor: any) => {
  //           const data = doctor.data
  //           return {
  //             name: data.name,
  //             surname: data.surname,
  //             speciality: data.speciality,
  //             department: data.department,
  //             about: data.about,
  //           }
  //         })
  //       }
  //     })
  // }
}
