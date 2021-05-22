import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import {
  SelectedIndexChangedEventData,
  TabView
} from '@nativescript/core/ui/tab-view';
import { filter, take } from 'rxjs/operators';
import { ChallengeService } from '~/app/services/challenge.service';

@Component({
  selector: 'nsjdc-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css'],
})
export class ChallengeTabsComponent implements OnInit {
  @ViewChild('tab', { static: true }) tabLayout: TabView;
  isLoading = true;
  selectedIndex: number = 0;
  constructor(
    private router: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private challengeService: ChallengeService,
  ) {}

  ngOnInit(): void {
    this.challengeService.loadChallenge();
    this.challengeService.currentChallenge$
      .pipe(
        take(1),
        filter((x) => x === undefined),
      )
      .subscribe((value) => {
        this.isLoading = false;
      });
    this.router.navigate(
      [
        {
          outlets: {
            currentChallenge: ['current-challenge'],
            today: ['today'],
          },
        },
      ],
      { relativeTo: this.activeRoute },
    );
  }

  onSelectedIndex(event: SelectedIndexChangedEventData) {
    this.selectedIndex = event.newIndex;
  }
}
