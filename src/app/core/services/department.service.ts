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

  getDepartment(id: string) {
    return this.apiService.get(`department/get/${id}`)
  }

  deleteDepartment(id: string) {
    return this.apiService.delete(`department/delete/${id}`)
  }

  updateDepartments(data: any) {
    return this.apiService.post('department/update', data)
  }

 addDepartments() {
    return this.apiService.get('department/add')
  }
}
