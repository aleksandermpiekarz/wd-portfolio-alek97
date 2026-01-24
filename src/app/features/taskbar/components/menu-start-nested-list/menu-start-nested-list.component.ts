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
  private menusStateManager = inject(MenusStateManager);

  public activeIds = this.menusStateManager.activeIds;
  public menuItems = input<MenuItem[] | undefined>([]);
  public nestedLevel = input(1);

  public menuOpen(trigger: CdkMenuTrigger, id: string) {
    this.menusStateManager.onOpened(trigger, this.nestedLevel(), id);
  }
  public menuClose() {
    this.menusStateManager.onClosed(this.nestedLevel());
  }
}
