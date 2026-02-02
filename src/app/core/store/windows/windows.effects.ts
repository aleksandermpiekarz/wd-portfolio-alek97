import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { windowsActions } from './windows.actions';

@Injectable({ providedIn: 'root' })
export class WindowsEffects {
  private actions$: Actions = inject(Actions);

  fetch$ = createEffect(
    () => {
      return this.actions$.pipe(ofType(windowsActions.fetch));
    },
    { dispatch: false },
  );
}
