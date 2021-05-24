import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: RouterExtensions,
  ) {}

  canLoad(route: Route) {
    return this.authService.user$.pipe(
      take(1),
      switchMap((user) => {
        if (!user || !user.token) {
          return this.authService.autoLogin();
        }
        return of(true);
      }),
      tap((auth) => {
        if (!auth) {
          this.router.navigate(['/auth']);
        }
      }),
    );
  }
}
