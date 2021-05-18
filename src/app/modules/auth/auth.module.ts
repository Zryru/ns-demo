import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { ActionBarModule } from '~/app/shared/ui/action-bar/action-bar.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    AuthRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    ActionBarModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AuthModule { }
