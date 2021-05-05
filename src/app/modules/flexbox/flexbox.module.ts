import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FlexboxRoutingModule } from './flexbox-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { FlexboxComponent } from './flexbox.component';


@NgModule({
  declarations: [
    FlexboxComponent
  ],
  imports: [
    FlexboxRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class FlexboxModule { }
