import { Injectable } from '@angular/core';
import {signInWithEmailAndPassword} from "@angular/fire/auth";
import { auth } from "./firebase.service";
import {ApiService} from "@core/services/api.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) {
  }

  data: any = null;

  auth = (data: any) => {
    const {email, password} = data
    return signInWithEmailAndPassword(auth, email, password)
  }

  getRole() {

  }

  register(data: object) {
    return this.apiService.post('auth/signup', data)
  }

}
