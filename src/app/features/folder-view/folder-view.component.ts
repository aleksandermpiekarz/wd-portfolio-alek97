import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FolderData } from '../../types/folder-data';

@Component({
  selector: 'app-folder-view',
  imports: [NgClass],
  templateUrl: './folder-view.component.html',
  styleUrl: './folder-view.component.scss',
})
export class FolderViewComponent {
  public folderData: FolderData = {
    icon: 'ico-directory-open',
    title: 'My Documents',
    files: [],
    maximized: false,
  };
}
