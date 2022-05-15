import {Injectable} from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {Routes} from "../../routes";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor (
    private routes: Routes,
    private apiService: ApiService
  ) {
  }

  getAllUsers() {
    return this.apiService.get(this.routes.getAllUsersUrl)
  }

  getUser(id: string) {
    return this.apiService.get(this.routes.getUserUrl(id))
  }

  deleteUser(id: string) {
    return this.apiService.delete(this.routes.deleteUserUrl(id))
  }

  updateUser(data: any) {
    return this.apiService.post(this.routes.updateUserUrl, data)
  }

 addUser(data: any) {
    return this.apiService.post(this.routes.addUserUrl, data)
  }
}
