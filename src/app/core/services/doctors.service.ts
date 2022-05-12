import { Injectable } from '@angular/core';
import { ApiService } from "@core/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private apiService: ApiService) {
  }

  getAllDoctors() {
    return this.apiService.get('doctor/admin/get-all')
  }

  getDoctor(id: string) {
    return this.apiService.get(`doctor/get/${id}`)
  }

  deleteDoctor(id: string) {
    return this.apiService.delete(`doctor/admin/delete/${id}`)
  }

  updateDoctor(data: any) {
    return this.apiService.post('doctor/admin/update', data)
  }

 addDoctor(data: any) {
    return this.apiService.post('doctor/admin/add', data)
  }
}
