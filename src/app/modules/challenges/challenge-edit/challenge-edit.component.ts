import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageRoute } from '@nativescript/angular';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'nsjdc-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
})
export class ChallengeEditComponent implements OnInit {
  challengeDescription = '';
  isCreating = true;

  @Output() input = new EventEmitter<string>();

  constructor(private pageRoute: PageRoute) {}

  ngOnInit(): void {
    this.pageRoute.activatedRoute
      .pipe(switchMap((activatedRoute) => activatedRoute.paramMap))
      .subscribe((paramMap) => {
        if (!paramMap.has('mode')) {
          this.isCreating = true;
        } else {
          this.isCreating = paramMap.get('mode') !== 'edit';
        }
      });
  }

  onInput(): void {
    this.input.emit(this.challengeDescription);
  }
}
