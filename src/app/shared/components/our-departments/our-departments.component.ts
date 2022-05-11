import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "@core/services/department.service";

@Component({
  selector: 'app-our-departments',
  templateUrl: './our-departments.component.html',
  styleUrls: ['./our-departments.component.scss'],
  providers: [DepartmentService],
})
export class OurDepartmentsComponent implements OnInit {

  departments = [];

  constructor
  (
    private departmentService: DepartmentService
  ) {
  }

  ngOnInit(): void {
   this.departmentService.getAllDepartments()
     .subscribe({
         next: (data) => {
           const departments = data.departments
           this.departments = departments.map((department: any) => {
             const data = department.data
             return {
               title: data.title,
               description: data.description
             }
           })
         }
       })
  }
}
