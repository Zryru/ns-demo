import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { CurrentChallengeModule } from '../current-challenge/current-challenge.module';
import { ChallengeDashboardRoutingModule } from './challenge-dashboard-routing.module';
import { ChallengeDashboardComponent } from './challenge-dashboard.component';

@NgModule({
  declarations: [
    ChallengeDashboardComponent
  ],
  imports: [
    NativeScriptCommonModule,
    ChallengeDashboardRoutingModule,
    CurrentChallengeModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ChallengeDashboardModule { }
