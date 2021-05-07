import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ActionBarComponent } from './action-bar.component';



@NgModule({
  declarations: [
    ActionBarComponent
  ],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [ActionBarComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ActionBarModule { }
