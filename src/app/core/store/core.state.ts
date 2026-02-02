import { ActionReducerMap } from '@ngrx/store';
import { windowsReducer, WindowsState } from './windows/windows.reducer';
import { WindowsEffects } from './windows/windows.effects';

export interface CoreState {
  windows: WindowsState;
}

export const effects = [WindowsEffects];

export const reducers: ActionReducerMap<CoreState> = {
  windows: windowsReducer,
};
