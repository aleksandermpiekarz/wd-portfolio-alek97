import { FileData } from './file-data';

export type WindowEntity = AppWindowData | FolderWindowData;

export type WindowType = 'app' | 'folder';

export type WindowViewMode = 'minimized' | 'window-mode' | 'maximized';

export interface BaseWindowData {
  id: string;
  icon: string;
  title: string;
  windowViewMode: WindowViewMode;
  type: WindowType;
}

export interface AppWindowData extends BaseWindowData {
  type: 'app';
}

export interface FolderWindowData extends BaseWindowData {
  type: 'folder';
  files: FileData[];
}
