import { Component, inject, input } from '@angular/core';
import { MenuItem } from '../../../../types/menu-item';
import { TranslatePipe } from '@ngx-translate/core';
import { CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { NgClass } from '@angular/common';
import { MenusStateManager } from '../../../../services/menus-state-manager.service';

@Component({
  selector: 'app-menu-start-nested-list',
  templateUrl: './menu-start-nested-list.component.html',
  imports: [TranslatePipe, CdkMenuTrigger, NgClass, CdkMenuItem],
})
export class MenuStartNestedListComponent {
  public menuItems = input<MenuItem[] | undefined>([]);
  public nestedLevel = input(1);

  private xx = inject(MenusStateManager);

  public menuOpen(trigger: CdkMenuTrigger) {
    this.xx.onOpened(trigger, this.nestedLevel());
  }
  public menuClose() {
    this.xx.onClosed(this.nestedLevel());
  }
}
