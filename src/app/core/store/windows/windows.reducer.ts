import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { WindowEntity } from '../../../types/window.types';
import { windowsActions } from './windows.actions';

export const WINDOWS_STATE_KEY = 'windows';

export interface WindowsState extends EntityState<WindowEntity> {}

export const adapter: EntityAdapter<WindowEntity> = createEntityAdapter<WindowEntity>({
  selectId: (windowEntity: WindowEntity) => windowEntity.id,
});

const INITIAL_STATE: WindowsState = adapter.getInitialState({});

export const windowsReducer = createReducer(
  INITIAL_STATE,
  on(windowsActions.setWindows, (state, { windowsData }) => adapter.setAll(windowsData, state)),
  on(windowsActions.addWindows, (state, { windowsData }) => adapter.addMany(windowsData, state)),
  on(windowsActions.addWindow, (state, { windowData }) => adapter.addOne(windowData, state)),
  on(windowsActions.closeWindow, (state, { windowId }) => adapter.removeOne(windowId, state)),
  on(windowsActions.updateWindowViewMode, (state, { windowId, windowViewMode }) =>
    adapter.updateOne({ id: windowId, changes: { windowViewMode } }, state),
  ),
);

export const windowsAdapterSelectors = adapter.getSelectors();
