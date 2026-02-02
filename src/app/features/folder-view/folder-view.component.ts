import { Component, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { FolderWindowData, WindowViewMode } from '../../types/window.types';
import { Store } from '@ngrx/store';
import { windowsActions } from '../../core/store/windows/windows.actions';

@Component({
  selector: 'app-folder-view',
  imports: [NgClass, CdkDrag, CdkDragHandle],
  templateUrl: './folder-view.component.html',
  styleUrl: './folder-view.component.scss',
})
export class FolderViewComponent {
  private store = inject(Store);

  public folderData = input<FolderWindowData>();

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
}
