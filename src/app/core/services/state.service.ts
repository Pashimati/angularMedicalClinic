import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class StateService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }


  login(token: string) : void {
    localStorage.setItem('token', token);
    this.isLoginSubject.next(true);
  }


  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }


  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }
}
