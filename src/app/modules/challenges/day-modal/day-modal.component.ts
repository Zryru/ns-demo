import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular';
import { Day, DayStatus } from '~/app/models/day.model';

@Component({
  selector: 'nsjdc-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.css']
})
export class DayModalComponent implements OnInit {

  context: {day: Day};

  constructor(private modalDialogParams: ModalDialogParams) { }

  ngOnInit(): void {
     this.context = this.modalDialogParams.context;
  }

  clickHandler(event: DayStatus) {
    this.modalDialogParams.closeCallback(event);
  }
}
