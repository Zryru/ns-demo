import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { SelectedIndexChangedEventData } from '@nativescript/core/ui/tab-view';

@Component({
  selector: 'nsjdc-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css'],
})
export class ChallengeTabsComponent implements OnInit {

  selectedIndex: number = 0;
  constructor(
    private router: RouterExtensions,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
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
