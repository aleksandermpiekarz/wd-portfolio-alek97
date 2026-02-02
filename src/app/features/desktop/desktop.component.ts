import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { windowsActions } from '../../core/store/windows/windows.actions';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
})
export class DesktopComponent {
  private store = inject(Store);
  private id = 0;

  public addFolder(): void {
    this.store.dispatch(
      windowsActions.addWindowAndPushToFront({
        windowData: {
          id: String(this.id++),
          icon: 'ico-directory-open',
          title: 'My Documents',
          files: [],
          windowViewMode: 'window-mode',
          type: 'folder',
        },
      }),
    );
  }
}
