import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageRoute, registerElement, RouterExtensions } from '@nativescript/angular';
import { FlexboxLayout } from '@nativescript/core';
import { switchMap } from 'rxjs/operators';
import { ChallengeService } from '~/app/services/challenge.service';

@Component({
  selector: 'nsjdc-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss'],
})
export class ChallengeEditComponent implements OnInit {
  challengeDescription = '';
  isCreating = true;

  @ViewChild('f', { static: true }) form: NgForm;

  constructor(private pageRoute: PageRoute, private router: RouterExtensions, private challengeService: ChallengeService) {
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
      });
  }

  onSubmit(){
    console.log('[Form]', this.form.value)
    this.challengeService.createNewChallenge(this.form.value.title, this.form.value.description);
    this.router.backToPreviousPage();
  }

}
