import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular';
import { ChallengeAction } from '~/app/shared/ui/challenge-actions/challenge-actions.component';

@Component({
  selector: 'nsjdc-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.css']
})
export class DayModalComponent implements OnInit {

  context: {date: Date};

  constructor(private modalDialogParams: ModalDialogParams) { }

  ngOnInit(): void {
     this.context = this.modalDialogParams.context;
  }

  clickHandler(event: ChallengeAction) {
    this.modalDialogParams.closeCallback(event);
  }
}
