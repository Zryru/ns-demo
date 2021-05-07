import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule
} from '@nativescript/angular';
import { ActionBarModule } from '../../shared/ui/action-bar/action-bar.module';
import { ChallengeDashboardComponent } from './challenge-dashboard/challenge-dashboard.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
@NgModule({
  declarations: [
    ChallengeDashboardComponent,
    ChallengeEditComponent,
    CurrentChallengeComponent,
    TodayComponent,
    ChallengeTabsComponent,
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ChallengeRoutingModule,
    ActionBarModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChallengeModule {}
