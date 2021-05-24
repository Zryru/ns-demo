import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'challenges',
    loadChildren: () =>
      import('./modules/challenges/challenge.module').then(
        (m) => m.ChallengeModule,
      ),
    canLoad: [AuthGuard],
  },
  { path: '', redirectTo: 'challenges/tabs', pathMatch: 'full' },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
