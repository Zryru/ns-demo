import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
  { path: '', redirectTo: 'challenges', pathMatch: 'full' },
  {
    path: 'challenges',
    loadChildren: () =>
      import('./modules/challenges/challenge.module').then(
        (m) => m.ChallengeModule,
      ),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
