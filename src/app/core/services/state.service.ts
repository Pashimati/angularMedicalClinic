import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class StateService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  id = new BehaviorSubject<string>(<string>this.hasId());

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  getId() : Observable<string> {
    return this.id.asObservable();
  }

  login(token: string) : void {
    localStorage.setItem('token', token);
    this.isLoginSubject.next(true);
  }


  logout() : void {
    localStorage.clear();
    this.isLoginSubject.next(false);
  }


  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }

  private hasId() {
    return localStorage.getItem('id');
  }
}
