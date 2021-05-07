import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  private _toggleDrawer = new BehaviorSubject<void>(null);

  get onToggleDrawer$() {
    return this._toggleDrawer.asObservable();
  }

  toggleDrawer() {
    this._toggleDrawer.next(null)
  }
}
