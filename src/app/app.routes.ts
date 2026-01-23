import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'desktop' },
  {
    path: 'desktop',
    loadComponent: () =>
      import('./features/desktop/desktop.component').then((m) => m.DesktopComponent),
  },
];
