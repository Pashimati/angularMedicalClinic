import { Injectable } from '@angular/core';
import { ApiService } from "@core/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) {
  }

  getAllUsers() {
    return this.apiService.get('user/admin/get-all')
  }

  getUser(id: string) {
    return this.apiService.get(`user/get/${id}`)
  }

  deleteUser(id: string) {
    return this.apiService.delete(`user/admin/delete${id}`)
  }

  updateUser(data: any) {
    return this.apiService.post('user/update', data)
  }

 addUser(data: any) {
    return this.apiService.post('department/add', data)
  }
}
