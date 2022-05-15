import { Injectable } from '@angular/core';
import { ApiService } from "@core/services/api.service";
import {Routes} from "../../routes";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor (
    private routes: Routes,
    private apiService: ApiService
  ) {
  }

  getAllDepartments() {
    return this.apiService.get(this.routes.getAllDepartmentsUrl)
  }

  getDepartment(id: string) {
    return this.apiService.get(this.routes.getDepartmentUrl(id))
  }

  deleteDepartment(id: string) {
    return this.apiService.delete(this.routes.deleteDepartmentUrl(id))
  }

  updateDepartments(data: any) {
    return this.apiService.post(this.routes.updateDepartmentUrl, data)
  }

 addDepartments(data: any) {
    return this.apiService.post(this.routes.addDepartmentUrl, data)
  }
}
