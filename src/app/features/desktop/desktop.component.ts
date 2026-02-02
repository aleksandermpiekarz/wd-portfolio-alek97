import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { windowsActions } from '../../core/store/windows/windows.actions';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {
  private store = inject(Store);

  public addFolder(): void {
    this.store.dispatch(
      windowsActions.addWindow({
        windowData: {
          id: '1',
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
