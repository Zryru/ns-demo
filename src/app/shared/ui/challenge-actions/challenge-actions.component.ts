import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DayStatus } from '~/app/models/day.model';

@Component({
  selector: 'nsjdc-challenge-actions',
  templateUrl: './challenge-actions.component.html',
  styleUrls: ['./challenge-actions.component.scss']
})
export class ChallengeActionsComponent implements OnInit {

  actions = DayStatus;

  status: DayStatus = DayStatus.open;

  @Output() action = new EventEmitter<DayStatus>();

  event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAction(event: DayStatus) {
    if (this.status === event){
      return;
    }
    this.status = event;
    this.action.emit(event);
  }

}
