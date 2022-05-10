import { Injectable } from '@angular/core';
import { ApiService } from "@core/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private apiService: ApiService) {
  }

  getAllDepartments() {
    return this.apiService.get('department/get-all')
  }

  getDepartment() {
    return this.apiService.get('department/get')
  }

  deleteDepartment(id: string) {
    return this.apiService.delete(`department/delete/${id}`)
  }

  updateDepartments() {
    return this.apiService.get('department/update')
  }

 addDepartments() {
    return this.apiService.get('department/add')
  }
}
