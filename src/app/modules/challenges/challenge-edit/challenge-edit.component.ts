import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "nsjdc-challenge-edit",
  templateUrl: "./challenge-edit.component.html",
  styleUrls: ["./challenge-edit.component.css"]
})
export class ChallengeEditComponent implements OnInit {
  challengeDescription = "";

  @Output() input = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onInput(): void {
    this.input.emit(this.challengeDescription);
  }
}
