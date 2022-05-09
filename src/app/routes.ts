import { environment } from 'src/environments/environment';

export const getDoctorByIdUrl = (id: string): string => `${environment.baseUrl}doctor/get/${id}`
export const getAllUsersUrl = `${environment.baseUrl}user/admin/get-all`
