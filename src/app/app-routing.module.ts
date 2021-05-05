import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  { path: "", redirectTo: "flexbox", pathMatch: "full" },
  {
    path: "challenges",
    loadChildren: () =>
      import("./modules/challenges/challenge-dashboard/challenge-dashboard.module").then(
        m => m.ChallengeDashboardModule
      )
  },
  {
    path: "flexbox",
    loadChildren: () =>
      import("./modules/flexbox/flexbox.module").then(
        m => m.FlexboxModule
      )
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
