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

  constructor(
    private router: RouterExtensions,
    private modalDialog: ModalDialogService,
    private vcRef: ViewContainerRef,
  ) {}

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
    // const loginOptions = {
    //   title: 'Login Form',
    //   message: 'Enter your credentials',
    //   okButtonText: 'Login',
    //   cancelButtonText: 'Cancel',
    //   neutralButtonText: 'Neutral',
    //   userNameHint: 'Enter your username',
    //   passwordHint: 'Enter your password',
    //   userName: 'john_doe',
    //   password: '123456'
    // }
    // Dialogs.login(loginOptions).then((result) => {
    //   console.log('confirm result', result);
    // });
    this.modalDialog
      .showModal(DayModalComponent, {
        fullscreen: true,
        viewContainerRef: this.vcRef,
        context: { date: new Date() },
        cancelable: false
      })
      .then((callBackResult: 'completed' | 'failed') => {
        console.log('Modal call back', callBackResult);
      });
  }
}
