import { FileData } from './file-data';

export interface FolderData {
  icon: string;
  title: string;
  files: FileData[];
  maximized: boolean;
}
