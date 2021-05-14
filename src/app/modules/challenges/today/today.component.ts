import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ChallengeAction } from '~/app/shared/ui/challenge-actions/challenge-actions.component';

@Component({
  selector: 'nsjdc-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {
  }

  onAction(event: ChallengeAction) {

  }

}
