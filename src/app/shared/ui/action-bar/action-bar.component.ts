import { Component, Input, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid, Page } from '@nativescript/core';
import { UIService } from '../../../shared/ui/ui.service';
declare var android: any;
@Component({
  selector: 'nsjdc-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;
  @Input() hasMenu = true;

  get canGoBack() {
    return this.router.canGoBack();
  }

  get isIsAndroid() {
    return isAndroid;
  }

  constructor(private page: Page, private router: RouterExtensions, private uiService: UIService) {}

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

  toggleMenu(){
    console.log('TOGGLING')
    this.uiService.toggleDrawer();
  }
}
