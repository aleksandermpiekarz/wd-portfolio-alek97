import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { windowsActions } from './windows.actions';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIndexOrder } from './windows.selectors';

@Injectable({ providedIn: 'root' })
export class WindowsEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);

  addWindowAndPushToFront$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(windowsActions.addWindowAndPushToFront),
      switchMap(({ windowData }) => [
        windowsActions.addWindow({ windowData }),
        windowsActions.pushWindowToFront({ windowId: windowData.id }),
      ]),
    );
  });

  pushWindowToFront$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(windowsActions.pushWindowToFront),
      withLatestFrom(this.store.select(selectIndexOrder)),
      map(([{ windowId }, indexOrder]) => ({
        windowId,
        indexOrder: [...indexOrder.filter((id) => id !== windowId), windowId],
      })),
      switchMap(({ windowId, indexOrder }) => [
        windowsActions.setIndexOrder({ indexOrder }),
        windowsActions.setActiveWindow({ windowId }),
      ]),
    );
  });
}
