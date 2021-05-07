import { Component, Input, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid, Page } from '@nativescript/core';
declare var android: any;
@Component({
  selector: 'nsjdc-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;

  get canGoBack() {
    return this.router.canGoBack();
  }

  constructor(private page: Page, private router: RouterExtensions) {}

  ngOnInit(): void {}

  onLoadedActionBar() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor('red'),
          android.graphics.PorterDuff.Mode.SRC_ATOP,
        );
      }
    }
  }

  goBack() {
    if (isAndroid) {
      this.router.backToPreviousPage();
    }
  }
}
