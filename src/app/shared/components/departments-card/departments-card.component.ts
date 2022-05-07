import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-departments-card',
  templateUrl: './departments-card.component.html',
  styleUrls: ['./departments-card.component.scss']
})
export class DepartmentsCardComponent implements OnInit {

  @Input() department: any;

  departament ={
    title: '2123123',
    description: '2123123',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
