import { Component, Input } from '@angular/core';
import { ItemEventData } from '@nativescript/core';

@Component({
  selector: 'nsjdc-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
})
export class CurrentChallengeComponent {
  @Input() challenges: string[] = [];

  onItemTap(event: ItemEventData) {
    console.log('[List item] =>', event);
  }
}
