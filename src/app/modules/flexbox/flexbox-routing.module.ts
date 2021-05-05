import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { FlexboxComponent } from './flexbox.component';

const routes: Routes = [{
  path: '',
  component: FlexboxComponent
}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FlexboxRoutingModule { }
