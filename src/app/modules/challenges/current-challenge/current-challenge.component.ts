import { Component, Input, ViewContainerRef } from '@angular/core';
import { ModalDialogService, RouterExtensions } from '@nativescript/angular';
import { DayModalComponent } from '~/app/challenges/day-modal/day-modal.component';

declare var android: any;
@Component({
  selector: 'nsjdc-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
})
export class CurrentChallengeComponent {
  @Input() challenges: string[] = [];

  constructor(private router: RouterExtensions, private modalDialog: ModalDialogService, private vcRef: ViewContainerRef) {}

  goEdit() {
    this.router.navigateByUrl('challenges/edit', {
      transition: { name: 'slideLeft' },
    });
  }

  goCreate() {
    this.router.navigateByUrl('challenges/replace', {
      transition: { name: 'slideLeft' },
    });
  }

  onChangeStatus() {
    this.modalDialog.showModal(DayModalComponent, { fullscreen: false, viewContainerRef: this.vcRef})
  }
}
