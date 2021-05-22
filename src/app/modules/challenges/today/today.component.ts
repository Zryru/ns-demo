import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Day, DayStatus } from '~/app/models/day.model';
import { ChallengeService } from '~/app/services/challenge.service';
@Component({
  selector: 'nsjdc-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayComponent implements OnInit {
  get currentDay$(): Observable<Day> {
    return this.challengeService.currentChallenge$.pipe(
      map((challenge) => challenge?.currentDay),
    );
  }

  isLoading = false;

  constructor(
    private router: RouterExtensions,
    private challengeService: ChallengeService,
  ) {}

  ngOnInit(): void {}

  onAction(event: DayStatus, currentDay: Day) {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.challengeService
      .updateDayStatus(currentDay.dayInMonth, event)
      .subscribe(
        () => {
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
          console.error('[Todays update status]', err);
        },
      );
  }

  goCreate() {
    this.router.navigateByUrl('challenges/replace', {
      transition: { name: 'slideLeft' },
    });
  }
}
