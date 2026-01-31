import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FolderViewComponent } from '../folder-view/folder-view.component';

@Component({
  selector: 'app-desktop',
  imports: [TranslatePipe, FolderViewComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {}
