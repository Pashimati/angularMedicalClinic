import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalDialogComponent} from "@core/components/modal-dialog/modal-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    this.dialog.open(ModalDialogComponent);
  }
  ngOnInit(): void {
  }
}
