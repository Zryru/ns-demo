import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';


const routes: Routes = [
  { path: '', component: TodayComponent },
  { path: 'current', component: CurrentChallengeComponent},
  { path: 'edit', component: ChallengeEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule {}
