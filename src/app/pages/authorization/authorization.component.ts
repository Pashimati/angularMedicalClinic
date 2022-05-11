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
        user?.getIdToken().then((token) => {
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


  // submit(): void {
    // this.loader.show()
  // ?  const data = this.login.getRawValue()
  // console.log(data)
    // this.authAndRegisterService
    //   .auth(data)
    //     .then(response => {
    //       const user = response.user
    //       const id = user.uid
    //         user.getIdToken()
    //         .then( token => {
    //           localStorage.setItem('token', token)
    //           this.authAndRegisterService.getRole(token)
    //             .subscribe({
    //               next: ({response}:any) => {
    //                 this.role = response.role
    //                 localStorage.setItem('role', this.role)
    //
    //                 if (this.role == 'ADMIN') {
    //                   Emitters.roleEmitter.emit('ADMIN')
    //                   this.router.navigate(['/home']);
    //
    //                 } else if (this.role == 'DOCTOR') {
    //                   Emitters.roleEmitter.emit('DOCTOR')
    //                   this.router.navigate(['/doctor/list-of-entries', id]);
    //
    //                 } else {
    //                   Emitters.roleEmitter.emit('USER')
    //                   this.router.navigate(['/profile', id]);
    //                 }
    //               }
    //             });
    //           localStorage.setItem('currentUserUid', id)
    //           Emitters.authEmitter.emit(true)
    //           this._snackBar.open('You are logged in!', 'Undo', {
    //             duration: 5000
    //           });
    //           this.loader.hide()
    //       })
    // })
  // }
}

