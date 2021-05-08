import { Component, Input } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

declare var android: any;
@Component({
  selector: 'nsjdc-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
})
export class CurrentChallengeComponent {
  @Input() challenges: string[] = [];

  constructor(private router: RouterExtensions) {}

  goEdit() {
    this.router.navigateByUrl('challenges/edit', {
      transition: { name: 'slideLeft' },
    });
  }

  goCreate() {
    this.router.navigateByUrl('challenges/replace', {
      transition: { name: 'slideLeft' },
    });
  }
}
