import { Component, inject, ViewChild } from '@angular/core';
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
  public menuItems: MenuItem[] = [
    {
      icon: 'ico-directory-favorites',
      title: 'app.applications.favourites',
      submenuItems: [
        {
          icon: 'ico-directory-favorites',
          title: 'app.applications.favourites',
          submenuItems: [
            {
              icon: 'ico-directory-favorites',
              title: 'app.applications.favourites',
              submenuItems: [
                {
                  icon: 'ico-directory-favorites',
                  title: 'app.applications.favourites',
                },
              ],
            },
            {
              icon: 'ico-directory-open',
              title: 'app.applications.documents',
              submenuItems: [
                {
                  icon: 'ico-directory-favorites',
                  title: 'app.applications.favourites',
                },
              ],
            },
            { icon: 'ico-settings', title: 'app.applications.settings' },
            { icon: 'ico-key-win', title: 'app.menu-start.logOff' },
            { icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
          ],
        },
        {
          icon: 'ico-directory-open',
          title: 'app.applications.documents',
          submenuItems: [
            {
              icon: 'ico-directory-favorites',
              title: 'app.applications.favourites',
              submenuItems: [
                {
                  icon: 'ico-directory-favorites',
                  title: 'app.applications.favourites',
                  submenuItems: [
                    {
                      icon: 'ico-directory-favorites',
                      title: 'app.applications.favourites',
                    },
                  ],
                },
                {
                  icon: 'ico-directory-open',
                  title: 'app.applications.documents',
                  submenuItems: [
                    {
                      icon: 'ico-directory-favorites',
                      title: 'app.applications.favourites',
                    },
                  ],
                },
                { icon: 'ico-settings', title: 'app.applications.settings' },
                { icon: 'ico-key-win', title: 'app.menu-start.logOff' },
                { icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
              ],
            },
            {
              icon: 'ico-directory-open',
              title: 'app.applications.documents',
              submenuItems: [
                {
                  icon: 'ico-directory-favorites',
                  title: 'app.applications.favourites',
                  submenuItems: [
                    {
                      icon: 'ico-directory-favorites',
                      title: 'app.applications.favourites',
                    },
                  ],
                },
                {
                  icon: 'ico-directory-open',
                  title: 'app.applications.documents',
                  submenuItems: [
                    {
                      icon: 'ico-directory-favorites',
                      title: 'app.applications.favourites',
                    },
                  ],
                },
                { icon: 'ico-settings', title: 'app.applications.settings' },
                { icon: 'ico-key-win', title: 'app.menu-start.logOff' },
                { icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
              ],
            },
            { icon: 'ico-settings', title: 'app.applications.settings' },
            { icon: 'ico-key-win', title: 'app.menu-start.logOff' },
            { icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
          ],
        },
        { icon: 'ico-settings', title: 'app.applications.settings' },
        { icon: 'ico-key-win', title: 'app.menu-start.logOff' },
        { icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
      ],
    },
    {
      icon: 'ico-directory-open',
      title: 'app.applications.documents',
      submenuItems: [
        {
          icon: 'ico-directory-favorites',
          title: 'app.applications.favourites',
          submenuItems: [{ icon: 'ico-directory-favorites', title: 'app.applications.favourites' }],
        },
        {
          icon: 'ico-directory-open',
          title: 'app.applications.documents',
          submenuItems: [{ icon: 'ico-directory-favorites', title: 'app.applications.favourites' }],
        },
        { icon: 'ico-settings', title: 'app.applications.settings' },
        { icon: 'ico-key-win', title: 'app.menu-start.logOff' },
        { icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
      ],
    },
    { icon: 'ico-settings', title: 'app.applications.settings' },
    { icon: 'ico-key-win', title: 'app.menu-start.logOff' },
    { icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
  ];

  private menusStateManager = inject(MenusStateManager);

  //TODO: changes for dev, remove:
  @ViewChild('trigger') menuTrigger!: CdkMenuTrigger;
  ngAfterViewInit() {
    setTimeout(() => {
      this.menuTrigger.open();
    }, 100);
  }
  public menuOpen(trigger: CdkMenuTrigger): void {
    this.menusStateManager.onOpened(trigger, 0);
  }

  public menuClose(): void {
    this.menusStateManager.onClosed(0);
  }
}
