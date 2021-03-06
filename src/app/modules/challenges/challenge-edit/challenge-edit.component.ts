import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  PageRoute,
  registerElement,
  RouterExtensions
} from '@nativescript/angular';
import { FlexboxLayout } from '@nativescript/core';
import { switchMap, take } from 'rxjs/operators';
import { ChallengeService } from '~/app/services/challenge.service';

@Component({
  selector: 'nsjdc-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss'],
})
export class ChallengeEditComponent implements OnInit {
  challengeDescription = '';
  isCreating = true;
  title;
  description;
  isLoading = false;

  @ViewChild('f', { static: true }) form: NgForm;

  constructor(
    private pageRoute: PageRoute,
    private router: RouterExtensions,
    private challengeService: ChallengeService,
  ) {
    registerElement('form', () => FlexboxLayout);
  }

  ngOnInit(): void {
    this.pageRoute.activatedRoute
      .pipe(switchMap((activatedRoute) => activatedRoute.paramMap))
      .subscribe((paramMap) => {
        if (!paramMap.has('mode')) {
          this.isCreating = true;
        } else {
          this.isCreating = paramMap.get('mode') !== 'edit';
        }

        if (!this.isCreating) {
          this.challengeService.currentChallenge$
            .pipe(take(1))
            .subscribe((currentChallenge) => {
              if (currentChallenge) {
                this.title = currentChallenge.title;
                this.description = currentChallenge.description;
              }
            });
        }
      });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.isCreating) {
      this.challengeService
        .createNewChallenge(
          this.form.value.titleControl,
          this.form.value.descriptionControl,
        )
        .subscribe(
          () => {
            this.router.backToPreviousPage();
            this.isLoading = false;
          },
          (err) => {
            console.error(['create challenge err'], err);
            this.isLoading = false;
          },
        );
    } else {
      this.challengeService
        .updateChallenge(
          this.form.value.titleControl,
          this.form.value.descriptionControl,
        )
        .subscribe(
          () => {
            this.router.backToPreviousPage();
            this.isLoading = false;
          },
          (err) => {
            console.error(['create challenge err'], err);
            this.isLoading = false;
          },
        );
    }
  }
}
