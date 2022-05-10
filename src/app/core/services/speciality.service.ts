import { Injectable } from '@angular/core';
import { ApiService } from "@core/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(private apiService: ApiService) {
  }

  getAllSpeciality() {
    return this.apiService.get('speciality/get-all')
  }

  getSpeciality(id: string) {
    return this.apiService.get(`speciality/get/${id}`)
  }

  deleteSpeciality(id: string) {
    return this.apiService.delete(`speciality/delete/${id}`)
  }

  updateSpeciality(data: any) {
    return this.apiService.post('speciality/update', data)
  }

 addSpeciality(data: any) {
    return this.apiService.post('speciality/add', data)
  }
}
