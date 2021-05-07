import { Component, Input } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ItemEventData, Page } from '@nativescript/core';

declare var android: any;
@Component({
  selector: 'nsjdc-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
})
export class CurrentChallengeComponent {
  @Input() challenges: string[] = [];

  constructor(private router: RouterExtensions, private page: Page) {}

  onItemTap(event: ItemEventData) {
    console.log('[List item] =>', event);
  }

  goEdit() {
    this.router.navigate(['/challenges/edit']);
  }


}
