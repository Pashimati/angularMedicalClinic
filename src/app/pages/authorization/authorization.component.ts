import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@core/services/auth/auth.service";
import {Router} from "@angular/router";
import {StateService} from "@core/services/state.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: [AuthService]
})
export class AuthorizationComponent implements OnInit {
  login: FormGroup;

  role: string = ''

  constructor(
    private _snackBar: MatSnackBar,
    private stateService: StateService,
    private router: Router,
    private authService: AuthService
  ) {
    this.login = new FormGroup({

      "email": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "password": new FormControl("", Validators.pattern("[0-9]{10}"))
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    const {email, password} = this.login.value
    this.authService.onLogin(email,password)
      .then((response) => {
        const user = response.user
        const id = user?.uid
        if (typeof id === "string") {
          localStorage.setItem('id', id)
        }
        user?.getIdToken()
          .then((token) => {
            this.stateService.login(token)
            this.authService.getRole()
              .subscribe((response) => {
                const role = response.role
                if (role == 'ADMIN') {

                    this.router.navigate(['']);

                  } else if (role == 'DOCTOR') {
                    this.router.navigate(['/doctor', id]);

                  } else {
                    this.router.navigate(['/profile', id]);
                  }
          })
          this._snackBar.open('You are logged in!', 'Undo', {
            duration: 5000
          });
        })
    })
  }
}

