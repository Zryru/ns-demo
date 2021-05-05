import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { CurrentChallengeComponent } from "./current-challenge.component";

@NgModule({
  declarations: [CurrentChallengeComponent],
  imports: [NativeScriptCommonModule, NativeScriptFormsModule],
  exports: [CurrentChallengeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CurrentChallengeModule {}
