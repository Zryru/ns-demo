import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule
} from '@nativescript/angular';
import { ActionBarModule } from '../../shared/ui/action-bar/action-bar.module';
import { ChallengeActionsModule } from '../../shared/ui/challenge-actions/challenge-actions.module';
import { ChallengeDashboardComponent } from './challenge-dashboard/challenge-dashboard.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { DayModalComponent } from './day-modal/day-modal.component';
import { TodayComponent } from './today/today.component';
@NgModule({
  declarations: [
    ChallengeDashboardComponent,
    ChallengeEditComponent,
    CurrentChallengeComponent,
    TodayComponent,
    ChallengeTabsComponent,
    DayModalComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ChallengeRoutingModule,
    ActionBarModule,
    ChallengeActionsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChallengeModule {}
