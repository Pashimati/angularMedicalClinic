import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DepartmentService} from "@core/services/department.service";


@Component({
  selector: 'app-add-update-department',
  templateUrl: './add-update-department.component.html',
  styleUrls: [],
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

  updateDepartment() {
    this.departmentService.updateDepartments(this.department)
      .subscribe({
        next: () => {
            this.router.navigate(['/admin/list-of-departments']);
            this._snackBar.open('Department has been updated', 'Undo', {
              duration: 3000
            });
        }
      });
  }

  addDepartment() {
    this.departmentService.addDepartments(this.department)
      .subscribe({
        next: () => {
            this.router.navigate(['/admin/list-of-departments']);

            this._snackBar.open('Department has been created', 'Undo', {
              duration: 3000
            });
        }
      });
  }

}
