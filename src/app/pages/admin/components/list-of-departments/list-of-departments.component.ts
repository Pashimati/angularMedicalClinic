import {Component, OnInit} from '@angular/core';
import {DepartmentService} from "@core/services/department.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-list-of-departments',
  templateUrl: './list-of-departments.component.html',
})
export class ListOfDepartmentsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'actions'];
  departments: [] = []

  constructor(
    private _snackBar: MatSnackBar,
    private departmentService: DepartmentService
  ) {

  }

  ngOnInit() {
    this.updateTableList()
  }

  updateTableList () {
    this.departmentService.getAllDepartments()
      .subscribe({
        next: (data) => {
          const departments = data.departments

          this.departments = departments.map((department: any, key: number) => {
            const data = department.data
            const id = department.id
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
    this.departmentService.deleteDepartment(id)
      .subscribe({
        next: () => {
            this.updateTableList()
            this._snackBar.open('Department has been deleted', 'Undo', {
              duration: 3000
            });
          }
      });
  }
}
