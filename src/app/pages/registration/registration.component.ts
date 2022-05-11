import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from '@angular/router';
import {AuthService} from "@core/services/auth/auth.service";


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
    private authService: AuthService,
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
   const data = this.register.getRawValue()
   this.authService.register(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/authorization']);
          this._snackBar.open('User created!', 'Undo', {
            duration: 5000
          });
        }
      });
  }

}
