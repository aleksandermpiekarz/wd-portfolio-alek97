import { Injectable } from '@angular/core';
import { CdkMenuTrigger } from '@angular/cdk/menu';

@Injectable({ providedIn: 'root' })
export class MenusStateManager {
  private openByLevel = new Map<number, CdkMenuTrigger>();

  public onOpened(trigger: CdkMenuTrigger, level: number): void {
    const current = this.openByLevel.get(level);

    if (current && current !== trigger) {
      current.close();
    }

    this.closeDeeper(level);

    this.openByLevel.set(level, trigger);
  }

  public onClosed(level: number): void {
    const current = this.openByLevel.get(level);
    if (!current) return;

    this.openByLevel.delete(level);
    this.closeDeeper(level);
  }

  public reset(): void {
    for (const trigger of this.openByLevel.values()) {
      trigger.close();
    }
    this.openByLevel.clear();
  }

  private closeDeeper(level: number): void {
    const toClose: number[] = [];

    for (const level of this.openByLevel.keys()) {
      if (level > level) toClose.push(level);
    }

    for (const level of toClose) {
      this.openByLevel.get(level)?.close();
      this.openByLevel.delete(level);
    }
  }
}
