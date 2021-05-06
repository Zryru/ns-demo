import { Component, Input } from "@angular/core";

@Component({
  selector: "nsjdc-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent  {

  @Input() challenge: string;
}
