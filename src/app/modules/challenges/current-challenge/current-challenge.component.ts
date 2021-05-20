import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, RouterExtensions } from '@nativescript/angular';
import { ChallengeService } from '../../../services/challenge.service';
import { DayModalComponent } from '../day-modal/day-modal.component';

declare var android: any;
@Component({
  selector: 'nsjdc-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.scss'],
})
export class CurrentChallengeComponent implements OnInit {
  @Input() challenges: string[] = [];

  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  days: { dayInMonth: number; dayInWeek: number }[] = [];

  get currentChallenge$() {
    return this.challengeService.currentChallenge$;
  }

  // private currentYear: number;
  // private currentMonth: number;



  constructor(
    private router: RouterExtensions,
    private modalDialog: ModalDialogService,
    private vcRef: ViewContainerRef,
    private challengeService: ChallengeService
  ) {}
  ngOnInit(): void {

  }

  getRow(index: number, day: {dayInMonth: number, dayInWeek: number}) {
    const startRow = 1;
    const weekRow = Math.floor(index/7);
    const firstWeekDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
    return startRow + weekRow + irregularRow;
  }

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
        cancelable: false,
      })
      .then((callBackResult: 'completed' | 'failed') => {
        console.log('Modal call back', callBackResult);
      });
  }
}
