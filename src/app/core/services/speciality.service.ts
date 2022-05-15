import { Injectable } from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {Routes} from "../../routes";

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor (
    private routes: Routes,
    private apiService: ApiService
  ) {
  }

  getAllSpeciality() {
    return this.apiService.get(this.routes.getAllSpecialityUrl)
  }

  getSpeciality(id: string) {
    return this.apiService.get(this.routes.getSpecialityUrl(id))
  }

  deleteSpeciality(id: string) {
    return this.apiService.delete(this.routes.deleteSpecialityUrl(id))
  }

  updateSpeciality(data: any) {
    return this.apiService.post(this.routes.updateSpecialityUrl, data)
  }

 addSpeciality(data: any) {
    return this.apiService.post(this.routes.addSpecialityUrl, data)
  }
}
