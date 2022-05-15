import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Routes {
  //users
  getUserUrl = (id: string): string => `user/get/${id}`
  deleteUserUrl = (id: string): string => `user/delete/${id}`
  updateUserUrl = `user/update`
  addUserUrl = `user/add`
  getAllUsersUrl = `user/get-all`

  //doctors

}
