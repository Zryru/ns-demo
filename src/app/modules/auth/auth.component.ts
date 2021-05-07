import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'nsjdc-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: RouterExtensions
  ) { }

  ngOnInit(): void {
  }

  onAuth(){
    this.router.navigate(['/challenges'], {clearHistory: true});
  }

}
