import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nsjdc-challenge-dashboard",
  templateUrl: "./challenge-dashboard.component.html",
  styleUrls: ["./challenge-dashboard.component.css"]
})
export class ChallengeDashboardComponent implements OnInit {
  challengesArr: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  onChallengeInput(event: string) {
    this.challengesArr.push(event);
  }
}
