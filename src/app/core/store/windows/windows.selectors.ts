import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WINDOWS_STATE_KEY, windowsAdapterSelectors, WindowsState } from './windows.reducer';

export const selectWindowsState = createFeatureSelector<WindowsState>(WINDOWS_STATE_KEY);

export const selectWindowsItems = createSelector(
  selectWindowsState,
  windowsAdapterSelectors.selectAll,
);
