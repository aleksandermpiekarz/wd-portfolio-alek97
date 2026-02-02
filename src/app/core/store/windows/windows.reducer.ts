import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { WindowEntity } from '../../../types/window.types';
import { windowsActions } from './windows.actions';

export const WINDOWS_STATE_KEY = 'windows';

export interface WindowsState extends EntityState<WindowEntity> {
  indexOrder: string[];
  activeWindow: string;
}

export const adapter: EntityAdapter<WindowEntity> = createEntityAdapter<WindowEntity>({
  selectId: (windowEntity: WindowEntity) => windowEntity.id,
});

const INITIAL_STATE: WindowsState = adapter.getInitialState({ indexOrder: [], activeWindow: '' });

export const windowsReducer = createReducer(
  INITIAL_STATE,
  on(windowsActions.addWindow, (state, { windowData }) => adapter.addOne(windowData, state)),
  on(windowsActions.closeWindow, (state, { windowId }) => adapter.removeOne(windowId, state)),
  on(windowsActions.updateWindowViewMode, (state, { windowId, windowViewMode }) =>
    adapter.updateOne({ id: windowId, changes: { windowViewMode } }, state),
  ),
  on(windowsActions.setIndexOrder, (state, { indexOrder }) => ({
    ...state,
    indexOrder,
  })),
  on(windowsActions.setActiveWindow, (state, { windowId }) => ({
    ...state,
    activeWindow: windowId,
  })),
  on(windowsActions.resetActiveWindow, (state) => ({
    ...state,
    activeWindow: '',
  })),
);

export const windowsAdapterSelectors = adapter.getSelectors();
