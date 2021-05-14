import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export type ChallengeAction = 'completed' | 'failed' | 'reset';

@Component({
  selector: 'nsjdc-challenge-actions',
  templateUrl: './challenge-actions.component.html',
  styleUrls: ['./challenge-actions.component.scss']
})
export class ChallengeActionsComponent implements OnInit {

  @Output() action = new EventEmitter<ChallengeAction>();

  event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAction(event: ChallengeAction) {
    this.action.emit(event);
  }

}
