import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { ChallengeService } from './services/challenge.service';
import { UIService } from './shared/ui/ui.service';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent)
  radSideDrawer: RadSideDrawerComponent;
  private sideDrawer: RadSideDrawer;
  private destroyed$ = new Subject<void>();
  constructor(
    private uiService: UIService,
    private router: RouterExtensions,
    private challengeService: ChallengeService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.uiService.onToggleDrawer$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        if (this.sideDrawer) {
          this.sideDrawer.toggleDrawerState();
        }
      });

    this.authService
      .autoLogin()
      .pipe(take(1))
      .subscribe((boolean) => {
        if (boolean) {
          this.router.navigate(['/challenges'], { clearHistory: true });
        }
      });

    this.authService.user$
      .pipe(filter((x) => x === undefined))
      .subscribe((user) => {
        if (user === null) {
          this.router.navigate(['/auth'], {
            clearHistory: true,
            transition: { name: 'slideRight' },
          });
        }
      });
  }

  ngAfterViewInit(): void {
    this.sideDrawer = this.radSideDrawer.sideDrawer;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  logout() {
    this.authService.logout();
    this.challengeService.reset();
    this.router.navigate(['/auth'], {
      clearHistory: true,
      transition: { name: 'slideRight' },
    });
    this.uiService.toggleDrawer();
  }
}
