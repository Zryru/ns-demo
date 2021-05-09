import { Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  private _toggleDrawer = new BehaviorSubject<void>(null);

  private _rootVcRef: ViewContainerRef

  get onToggleDrawer$() {
    return this._toggleDrawer.asObservable();
  }

  get rootVcRef(): ViewContainerRef {
    return this._rootVcRef;
  }

  toggleDrawer() {
    this._toggleDrawer.next(null)
  }

  setRootVcRef(vcRef: ViewContainerRef){
    this._rootVcRef = vcRef;
  }
}
