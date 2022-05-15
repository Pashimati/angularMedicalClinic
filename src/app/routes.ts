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
  getDoctorUrl = (id: string): string => `doctor/get/${id}`
  deleteDoctorUrl = (id: string): string => `doctor/delete/${id}`
  updateDoctorUrl = `doctor/update`
  addDoctorUrl = `doctor/add`
  getAllDoctorsUrl = `doctor/get-all`

  //departments
  getDepartmentUrl = (id: string): string => `department/get/${id}`
  deleteDepartmentUrl = (id: string): string => `department/delete/${id}`
  updateDepartmentUrl = `department/update`
  addDepartmentUrl = `department/add`
  getAllDepartmentsUrl = `department/get-all`

  //speciality
  getSpecialityUrl = (id: string): string => `speciality/get/${id}`
  deleteSpecialityUrl = (id: string): string => `speciality/delete/${id}`
  updateSpecialityUrl = `speciality/update`
  addSpecialityUrl = `speciality/add`
  getAllSpecialityUrl = `speciality/get-all`
}
