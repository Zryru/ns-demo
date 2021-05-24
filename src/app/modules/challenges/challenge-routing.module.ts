import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  {
    path: '',
    component: ChallengeTabsComponent,
    children: [
      { path: 'today', component: TodayComponent, outlet: 'today' },
      { path: 'current-challenge', component: CurrentChallengeComponent, outlet: 'currentChallenge' },
    ],
  },
  { path: ':mode', component: ChallengeEditComponent },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeRoutingModule {}
