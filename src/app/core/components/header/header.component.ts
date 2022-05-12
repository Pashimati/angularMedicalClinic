import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalDialogComponent} from "@core/components/modal-dialog/modal-dialog.component";
import {StateService} from "@core/services/state.service";
import {AuthService} from "@core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [StateService]
})
export class HeaderComponent implements OnInit {

  authenticated = false;
  role = ''
  id = ''

  constructor (
    private router: Router,
    private authService: AuthService,
    private stateService: StateService,
    public dialog: MatDialog
  ) {
  }
  openDialog() {
    this.dialog.open(ModalDialogComponent);
  }
  ngOnInit(): void {
    this.stateService.isLoginSubject
      .subscribe((auth) => {
        this.authenticated = auth
      })

    this.authService.getRole()
      .subscribe((response) => {
        this.role = response.role
      })

    this.stateService.getId()
      .subscribe((id) => {
        this.id = id
      })
  }

  logout() {
    this.authService.onLogout()
      .then(() => {
        this.stateService.logout()
        this.authenticated = false
        this.router.navigate([''])
    })
  }

  getRole() {
    this.authService.getRole()
      .subscribe((response) => {
        this.role = response.role
      })
  }
}
