import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DepartmentService} from "@core/services/department.service";


@Component({
  selector: 'app-add-update-department',
  templateUrl: './add-update-department.component.html',
  providers: []
})
export class AddAndUpdateDepartment implements OnInit {

  department = {
    id: '',
    title: '',
    description: '',
  }

  flag: boolean = false

  constructor
  (
    private departmentService: DepartmentService,
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
       this.departmentService.getDepartment(id)
          .subscribe({
            next: ({department}) => {
              this.department.id = id
              this.department.title = department.title
              this.department.description = department.description
              if (id) {
                this.flag = true
              }
            }
          })
      });
  }

  // updateDepartment() {
  //
  //   this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/department/update", this.department)
  //     .subscribe({
  //       next: ({response}:any) => {
  //         if (response.success) {
  //           this.router.navigate(['/admin/departments']);
  //
  //           this._snackBar.open('Department has been updated', 'Undo', {
  //             duration: 3000
  //           });
  //         } else {
  //           this._snackBar.open('Department not been updated', 'Undo', {
  //             duration: 3000
  //           });
  //         }
  //       }
  //     });
  // }
  //
  // addDepartment() {
  //   this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/department/add", this.department )
  //     .subscribe({
  //       next: ({response}:any) => {
  //         if (response.success) {
  //           this.router.navigate(['/admin/departments']);
  //
  //           this._snackBar.open('Department has been created', 'Undo', {
  //             duration: 3000
  //           });
  //         } else {
  //           this._snackBar.open('Department not been created', 'Undo', {
  //             duration: 3000
  //           });
  //         }
  //       }
  //     });
  // }

}
