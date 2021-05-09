import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular';

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

  clickHandler(event: 'completed' | 'failed') {
    this.modalDialogParams.closeCallback(event);
  }
}
