import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nsjdc-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent implements OnInit {
  challengeDescription = "";
  currentChallenge = "";

  constructor() {}

  ngOnInit(): void {}

  setChallenge(): void {
    this.currentChallenge = this.challengeDescription;
  }
}
