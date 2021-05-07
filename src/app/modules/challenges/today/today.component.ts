import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'nsjdc-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent implements OnInit {
  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {}

  goCurrent() {
    this.router.navigate(['/challenges/current'], {
      transition: { name: 'slideLeft' },
    });
  }
}
