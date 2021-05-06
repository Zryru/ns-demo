import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  { path: "", redirectTo: "challenges", pathMatch: "full" },
  {
    path: "challenges",
    loadChildren: () =>
      import("./modules/challenges/challenge.module").then(
        m => m.ChallengeModule
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
