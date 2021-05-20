import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Challenge } from '../models/challenge.model';
import { DayStatus } from '../models/day.model';

@Injectable({ providedIn: 'root' })
export class ChallengeService {
  get currentChallenge$() {
    return this._currentChallenge.asObservable();
  }

  private _currentChallenge = new BehaviorSubject<Challenge>(null);

  // constructor(private httpClient: HttpClient) {}

  createNewChallenge(title: string, description: string) {
    const newChallenge = new Challenge(
      title,
      description,
      new Date().getFullYear(),
      new Date().getMonth(),
    );

    this._currentChallenge.next(newChallenge);
  }

  updateDayStatus(dayInMonth: number, status: DayStatus) {
    const currentChallenge = this._currentChallenge.value;
    if (!currentChallenge || currentChallenge.days.length < dayInMonth) {
      return;
    }
    const dayIndex = currentChallenge.days.findIndex(
      (d) => d.dayInMonth === dayInMonth,
    );

    currentChallenge.days[dayIndex].status = status;
    this._currentChallenge.next(currentChallenge);

    console.log('[DAY]', currentChallenge.days[dayIndex]);
  }
}
