import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { Challenge } from '../models/challenge.model';
import { DayStatus } from '../models/day.model';
import { AuthService } from './auth.service';
@Injectable({ providedIn: 'root' })
export class ChallengeService {
  get currentChallenge$() {
    return this._currentChallenge.asObservable();
  }

  private _currentChallenge = new BehaviorSubject<Challenge>(undefined);

  constructor(private http: HttpClient, private authService: AuthService) {}

  loadChallenge() {
    this.authService.user$
      .pipe(
        take(1),
        switchMap((user) => {
          if (!user.isAuth) {
            return of(null);
          }
          return this.http.get(
            environment.firebaseConfig.databaseURL +
              `/challenge/${user.id}.json?auth=${user.token}`,
          );
        }),
      )
      .subscribe((response: any) => {
        const challenge = new Challenge(
          response.title,
          response.description,
          response.description.yea,
          response.month,
          response._days,
        );
        this._currentChallenge.next(challenge);
      });
  }

  createNewChallenge(title: string, description: string) {
    const newChallenge = new Challenge(
      title,
      description,
      new Date().getFullYear(),
      new Date().getMonth(),
    );
    return this.saveToServer(newChallenge);
  }

  updateChallenge(title: string, description: string) {
    const challenge = new Challenge(
      title,
      description,
      this._currentChallenge.value.year,
      this._currentChallenge.value.month,
      this._currentChallenge.value.days,
    );
    return this.saveToServer(challenge);
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
    return this.saveToServer(currentChallenge);
  }

  reset() {
    this._currentChallenge = new BehaviorSubject<Challenge>(undefined);
  }

  private saveToServer(challenge: Challenge) {
    return this.authService.user$.pipe(
      take(1),
      switchMap((user) => {
        if (!user.isAuth) {
          return of(null);
        }
        return this.http.put(
          environment.firebaseConfig.databaseURL +
            `/challenge/${user.id}.json?auth=${user.token}`,
          challenge,
        );
      }),
      tap((res) => {
        this._currentChallenge.next(challenge);
      }),
    );
  }
}
