import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "@core/services/auth/auth.service";

@Injectable()
export class AdminGuard implements CanActivate{

  constructor (
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean
  {
    const role = localStorage.getItem('role')
    if (role === 'ADMIN') {
      return true;
    }
    this.router.navigate(['/404']);
    return false;
  }
}
