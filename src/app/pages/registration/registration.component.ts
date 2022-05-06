import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../authorization/authorization.component.scss'],
  providers: [
  ]
})
export class RegistrationComponent implements OnInit {
  register : FormGroup;


  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.register = new FormGroup({

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
   const data = this.register.getRawValue()
    console.log(data)
   // this.authAndRegisterService
   //    .register('https://api-medical-clinic.herokuapp.com/auth/signup', data)
   //    .subscribe({
   //      next: () => {
   //        this.router.navigate(['/authorization']);
   //        this._snackBar.open('User created!', 'Undo', {
   //          duration: 5000
   //        });
   //        this.loader.hide()
   //      }
   //    });
  }

}
