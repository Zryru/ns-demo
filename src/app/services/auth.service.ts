import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dialogs } from '@nativescript/core';
import {
  getString,
  hasKey,
  remove,
  setString
} from '@nativescript/core/application-settings';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { User } from '../models/user.model';

interface AuthData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = new BehaviorSubject<User>(undefined);

  sessionTimeout: NodeJS.Timeout;

  get user$() {
    return this._user.asObservable();
  }

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.authenticate(
      email,
      password,
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
    );
  }

  signUp(email: string, password: string) {
    return this.authenticate(
      email,
      password,
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
    );
  }

  logout() {
    remove('userData');
    if (this.sessionTimeout) {
      clearTimeout(this.sessionTimeout);
    }
    this._user.next(undefined);
  }

  autoLogin(): Observable<boolean> {
    if (!hasKey('userData')) {
      return of(false);
    }
    const userData = JSON.parse(getString('userData'));
    const user = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate),
    );
    if (user.isAuth) {
      this._user.next(user);
      this.autoLogout(user.tokenExpiry);
      return of(true);
    } else {
      return of(false);
    }
  }

  private autoLogout(tokenExpiry: number) {
    this.sessionTimeout = setTimeout(() => {
      this.logout();
      this._user.next(null);
    }, tokenExpiry);
  }

  private authenticate(email: string, password: string, url: string) {
    return this.httpClient
      .post(url + environment.firebaseConfig.apiKey, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((err) => {
          this.handleError(err.error.error);
          return throwError(err.error.error);
        }),
        tap((response: AuthData) => {
          if (response?.idToken) {
            const expireDate = new Date(
              new Date().getTime() + parseInt(response.expiresIn) * 1000,
            );
            const user = new User(
              response.email,
              response.localId,
              response.idToken,
              expireDate,
            );
            setString('userData', JSON.stringify(user));
            this._user.next(user);
            this.autoLogout(user.tokenExpiry);
          }
        }),
      );
  }

  private handleError(error) {
    Dialogs.alert(`CODE: ${error.code} \n ${error.message}`);
  }
}
