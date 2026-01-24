import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { MenuItem } from '../../types/menu-item';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-start',
  imports: [CdkMenu, CdkMenuItem, NgClass, TranslatePipe],
  templateUrl: './menu-start.component.html',
  styleUrl: './menu-start.component.scss',
})
export class MenuStartComponent {
  public menuItems: MenuItem[] = [
    { icon: 'ico-directory-favorites', title: 'app.applications.favourites', menu: true },
    { icon: 'ico-directory-open', title: 'app.applications.documents', menu: true },
    { icon: 'ico-settings', title: 'app.applications.settings' },
    { icon: 'ico-key-win', title: 'app.menu-start.logOff' },
    { icon: 'ico-shut-down', title: 'app.menu-start.turnOff' },
  ];
}
