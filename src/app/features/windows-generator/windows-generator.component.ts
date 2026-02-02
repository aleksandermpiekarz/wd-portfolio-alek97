import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectActiveWindow,
  selectIndexOrder,
  selectWindowsItems,
} from '../../core/store/windows/windows.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { FolderViewComponent } from '../folder-view/folder-view.component';

@Component({
  selector: 'app-windows-generator',
  imports: [FolderViewComponent],
  templateUrl: './windows-generator.component.html',
  styleUrl: './windows-generator.component.scss',
})
export class WindowsGeneratorComponent {
  private store = inject(Store);

  public windows = toSignal(this.store.select(selectWindowsItems));
  public indexOrder = toSignal(this.store.select(selectIndexOrder));
  public activeWindow = toSignal(this.store.select(selectActiveWindow));
}
