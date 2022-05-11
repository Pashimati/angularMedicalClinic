import { Injectable } from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (
    private auth: AngularFireAuth,
    private apiService: ApiService
  ) {
  }

  register(data: object) {
    return this.apiService.post('auth/signup', data)
  }

  onLogin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  onLogout() {
    return this.auth.signOut()
  }

  getRole() {
    return this.apiService.get('auth/get-role')
  }

  static getToken() {
    return localStorage.getItem('token')
  }
}
