import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { ChallengeDashboardComponent } from "./challenge-dashboard/challenge-dashboard.component";
import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";
import { ChallengeRoutingModule } from "./challenge-routing.module";
import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";

@NgModule({
  declarations: [
    ChallengeDashboardComponent,
    ChallengeEditComponent,
    CurrentChallengeComponent
  ],
  imports: [NativeScriptCommonModule, NativeScriptFormsModule, ChallengeRoutingModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeModule {}
