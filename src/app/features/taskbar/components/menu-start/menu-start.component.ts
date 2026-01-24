import { Component, inject } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MenuItem } from '../../../../types/menu-item';
import { MenuStartNestedListComponent } from '../menu-start-nested-list/menu-start-nested-list.component';
import { TranslatePipe } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { MenusStateManager } from '../../../../services/menus-state-manager.service';

@Component({
  selector: 'app-menu-start',
  imports: [
    CdkMenu,
    MenuStartNestedListComponent,
    TranslatePipe,
    NgClass,
    CdkMenuItem,
    CdkMenuTrigger,
  ],
  templateUrl: './menu-start.component.html',
})
export class MenuStartComponent {
  private menusStateManager = inject(MenusStateManager);

  public activeIds = this.menusStateManager.activeIds;

  public menuItems: MenuItem[] = [
    {
      id: '1',
      icon: 'ico-directory-favorites',
      title: 'app.applications.favourites',
      submenuItems: [
        {
          id: '1-1',
          icon: 'ico-directory-favorites',
          title: 'app.applications.favourites',
          submenuItems: [
            {
              id: '1-1-1',
              icon: 'ico-directory-favorites',
              title: 'app.applications.favourites',
              submenuItems: [
                {
                  id: '1-1-1-1',
                  icon: 'ico-directory-favorites',
                  title: 'app.applications.favourites',
                },
              ],
            },
            {
              id: '1-1-2',
              icon: 'ico-directory-open',
              title: 'app.applications.documents',
              submenuItems: [
                {
                  id: '1-1-2-1',
                  icon: 'ico-directory-favorites',
                  title: 'app.applications.favourites',
                },
              ],
            },
            { id: '1-1-3', icon: 'ico-settings', title: 'app.applications.settings' },
            { id: '1-1-4', icon: 'ico-key-win', title: 'app.menu-start.logOff' },
            { id: '1-1-5', icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
          ],
        },
        {
          id: '1-2',
          icon: 'ico-directory-open',
          title: 'app.applications.documents',
          submenuItems: [
            {
              id: '1-2-1',
              icon: 'ico-directory-favorites',
              title: 'app.applications.favourites',
              submenuItems: [
                {
                  id: '1-2-1-1',
                  icon: 'ico-directory-favorites',
                  title: 'app.applications.favourites',
                  submenuItems: [
                    {
                      id: '1-2-1-1-1',
                      icon: 'ico-directory-favorites',
                      title: 'app.applications.favourites',
                    },
                  ],
                },
                {
                  id: '1-2-1-2',
                  icon: 'ico-directory-open',
                  title: 'app.applications.documents',
                  submenuItems: [
                    {
                      id: '1-2-1-2-1',
                      icon: 'ico-directory-favorites',
                      title: 'app.applications.favourites',
                    },
                  ],
                },
                { id: '1-2-1-3', icon: 'ico-settings', title: 'app.applications.settings' },
              ],
            },
            {
              id: '1-2-2',
              icon: 'ico-directory-open',
              title: 'app.applications.documents',
              submenuItems: [
                {
                  id: '1-2-2-1',
                  icon: 'ico-directory-favorites',
                  title: 'app.applications.favourites',
                  submenuItems: [
                    {
                      id: '1-2-2-1-1',
                      icon: 'ico-directory-favorites',
                      title: 'app.applications.favourites',
                    },
                  ],
                },
                {
                  id: '1-2-2-2',
                  icon: 'ico-directory-open',
                  title: 'app.applications.documents',
                  submenuItems: [
                    {
                      id: '1-2-2-2-1',
                      icon: 'ico-directory-favorites',
                      title: 'app.applications.favourites',
                    },
                  ],
                },
                { id: '1-2-2-3', icon: 'ico-settings', title: 'app.applications.settings' },
              ],
            },
            { id: '1-2-3', icon: 'ico-settings', title: 'app.applications.settings' },
          ],
        },
        { id: '1-3', icon: 'ico-settings', title: 'app.applications.settings' },
      ],
    },
    {
      id: '2',
      icon: 'ico-directory-open',
      title: 'app.applications.documents',
      submenuItems: [
        {
          id: '2-1',
          icon: 'ico-directory-favorites',
          title: 'app.applications.favourites',
          submenuItems: [
            { id: '2-1-1', icon: 'ico-directory-favorites', title: 'app.applications.favourites' },
          ],
        },
        {
          id: '2-2',
          icon: 'ico-directory-open',
          title: 'app.applications.documents',
          submenuItems: [
            { id: '2-2-1', icon: 'ico-directory-favorites', title: 'app.applications.favourites' },
          ],
        },
        { id: '2-3', icon: 'ico-settings', title: 'app.applications.settings' },
      ],
    },
    { id: '3', icon: 'ico-settings', title: 'app.applications.settings' },
    { id: '4', icon: 'ico-key-win', title: 'app.menu-start.logOff' },
    { id: '5', icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
  ];

  public menuOpen(trigger: CdkMenuTrigger, id: string): void {
    this.menusStateManager.onOpened(trigger, 0, id);
  }

  public menuClose(): void {
    this.menusStateManager.onClosed(0);
  }
}
