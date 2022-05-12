import { Component, OnInit } from '@angular/core';
import {DoctorsService} from "@core/services/doctors.service";

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

  constructor (
    private doctorService: DoctorsService
  ) {

  }

  ngOnInit(): void {
    this.getDoctors()
  }

  getDoctors() {
    this.doctorService.getAllDoctors()
      .subscribe({
        next: (data) => {
          const doctors = data.doctors

          this.doctors = doctors.map((doctor: any) => {
            const data = doctor.data
            return {
              name: data.name,
              surname: data.surname,
              speciality: data.speciality,
              department: data.department,
              about: data.about,
            }
          })
        }
      })
  }
}
