import { Injectable } from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private apiService: ApiService
  ) {
  }

  data: any = null;

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  getRole() {

  }

  register(data: object) {
    return this.apiService.post('auth/signup', data)
  }

}
