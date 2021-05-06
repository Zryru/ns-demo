import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeDashboardComponent } from './challenge-dashboard/challenge-dashboard.component';


const routes: Routes = [
  { path: '', component: ChallengeDashboardComponent },
  // { path: '**', component: CurrentChallengeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule {}
