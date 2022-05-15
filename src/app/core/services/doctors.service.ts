import { Injectable } from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {Routes} from "src/app/routes";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor (
    private routes: Routes,
    private apiService: ApiService
  ) {
  }

  getAllDoctors() {
    return this.apiService.get(this.routes.getAllDoctorsUrl)
  }

  getDoctor(id: string) {
    return this.apiService.get(this.routes.getDoctorUrl(id))
  }

  deleteDoctor(id: string) {
    return this.apiService.delete(this.routes.deleteDoctorUrl(id))
  }

  updateDoctor(data: any) {
    return this.apiService.post(this.routes.updateDoctorUrl, data)
  }

 addDoctor(data: any) {
    return this.apiService.post(this.routes.addDoctorUrl, data)
  }
}
