import { Injectable, signal } from '@angular/core';
import { CdkMenuTrigger } from '@angular/cdk/menu';

@Injectable({ providedIn: 'root' })
export class MenusStateManager {
  private _activeIds = signal<string[]>([]);
  private openByLevel = new Map<number, { id: string; trigger: CdkMenuTrigger }>();

  public activeIds = this._activeIds.asReadonly();

  public onOpened(trigger: CdkMenuTrigger, level: number, id: string): void {
    const current = this.openByLevel.get(level);

    if (current?.trigger && current.trigger !== trigger) {
      current.trigger.close();
    }

    this.closeDeeper();

    this.openByLevel.set(level, { id, trigger });
    this.recalculateActiveIds();
  }

  public onClosed(level: number): void {
    const current = this.openByLevel.get(level);
    if (!current) return;

    this.openByLevel.delete(level);
    this.closeDeeper();
  }

  public reset(): void {
    for (const items of this.openByLevel.values()) {
      items.trigger.close();
    }
    this.openByLevel.clear();
  }

  private closeDeeper(): void {
    const toClose: number[] = [];

    for (const level of this.openByLevel.keys()) {
      if (level > level) toClose.push(level);
    }

    for (const level of toClose) {
      this.openByLevel.get(level)?.trigger.close();
      this.openByLevel.delete(level);
    }
    this.recalculateActiveIds();
  }

  public recalculateActiveIds() {
    this._activeIds.set(Array.from(this.openByLevel.values(), (v) => v.id));
  }
}
