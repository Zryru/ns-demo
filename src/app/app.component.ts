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
import { takeUntil } from 'rxjs/operators';
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
  constructor(private uiService: UIService, private router: RouterExtensions, private challengeService: ChallengeService) {}

  ngOnInit() {
    this.uiService.onToggleDrawer$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        if (this.sideDrawer) {
          this.sideDrawer.toggleDrawerState();
        }
      });
  }

  ngAfterViewInit(): void {
    this.sideDrawer = this.radSideDrawer.sideDrawer;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  logout(){
    this.challengeService.reset();
    this.router.navigate(['/'], {clearHistory: true});
    this.uiService.toggleDrawer();
  }
}
