import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {switchMap} from "rxjs";
import {SpecialityService} from "@core/services/speciality.service";

@Component({
  selector: 'app-add-update-speciality',
  templateUrl: './add-update-speciality.component.html',
})
export class AddAndUpdateSpeciality implements OnInit {

  speciality = {
    id: '',
    title: '',
  }

  flag: boolean = false

  constructor
  (
    private specialityService: SpecialityService,
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
        this.specialityService.getSpeciality(id)
          .subscribe({
            next: ({speciality}) => {
              this.speciality.id = id
              this.speciality.title = speciality.title
              if (id) {
                this.flag = true
              }
            }
          })
      });
  }

  updateSpeciality() {
    this.specialityService.updateSpeciality(this.speciality)
      .subscribe({
        next: () => {
          this.router.navigate(['/admin/list-of-speciality']);
          this._snackBar.open('Speciality has been updated', 'Undo', {
            duration: 3000
          });
        }
      });
  }

  addSpeciality() {
    this.specialityService.addSpeciality(this.speciality)
      .subscribe({
        next: () => {
          this.router.navigate(['/admin/list-of-speciality']);

          this._snackBar.open('Speciality has been created', 'Undo', {
            duration: 3000
          });
        }
      });
  }
}
