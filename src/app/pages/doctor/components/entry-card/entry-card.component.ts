import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss'],
  providers: []
})
export class EntryCardComponent implements OnInit {

  @Input() user: any;

  @Output() OnRemove = new EventEmitter<string>();
  remove(id: string) {
    this.OnRemove.emit(id);
  }

  constructor (
) {
  }

  ngOnInit(): void {
  }
}
