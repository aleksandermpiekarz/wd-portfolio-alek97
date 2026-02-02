import { Component, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { FolderWindowData, WindowViewMode } from '../../types/window.types';
import { Store } from '@ngrx/store';
import { windowsActions } from '../../core/store/windows/windows.actions';
import { ClickOutsideDirective } from '../../core/directives/click-outside.directive';

@Component({
  selector: 'app-folder-view',
  imports: [NgClass, CdkDrag, CdkDragHandle, ClickOutsideDirective],
  templateUrl: './folder-view.component.html',
  styleUrl: './folder-view.component.scss',
})
export class FolderViewComponent {
  private store = inject(Store);

  public folderData = input<FolderWindowData>();
  public index = input<number>();
  public active = input<boolean>();

  public changeWindowMode(windowViewMode: WindowViewMode): void {
    this.store.dispatch(
      windowsActions.updateWindowViewMode({
        windowId: this.folderData()?.id || '',
        windowViewMode,
      }),
    );
  }

  public exit(): void {
    this.store.dispatch(windowsActions.closeWindow({ windowId: this.folderData()?.id || '' }));
  }

  public setActiveWindow(): void {
    console.log('yo');
    this.store.dispatch(
      windowsActions.pushWindowToFront({ windowId: this.folderData()?.id || '' }),
    );
  }
  public resetActiveWindow(): void {
    if (this.active()) {
      this.store.dispatch(windowsActions.resetActiveWindow());
    }
  }
}
