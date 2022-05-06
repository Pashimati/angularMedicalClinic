import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: []
})
export class AuthorizationComponent implements OnInit {
  login: FormGroup;

  role: string = ''

  constructor(
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
    // this.loader.show()
    const data = this.login.getRawValue()
    console.log(data)
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
    //                   this.router.navigate(['/doctor/listOfEntries', id]);
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
  }
}

