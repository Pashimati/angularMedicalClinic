import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class DoctorGuard implements CanActivate{

  constructor (
    private router: Router,
  ) {
  }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    const role = localStorage.getItem('role')
    if (role === 'DOCTOR') {
      return true;
    }
    this.router.navigate(['not-found']);
    return false;
  }
}
