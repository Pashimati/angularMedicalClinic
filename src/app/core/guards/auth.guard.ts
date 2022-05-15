import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor (
    private router: Router,
  ) {
  }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean
  {
    const role = localStorage.getItem('role')
    if (role === 'USER') {
      return true;
    }
    this.router.navigate(['/404']);
    return false;
  }
}
