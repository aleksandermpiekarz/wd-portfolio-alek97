import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { WindowEntity, WindowViewMode } from '../../../types/window.types';

export const windowsActions = createActionGroup({
  source: 'windows',
  events: {
    'Fetch ': emptyProps(),
    'Change loading state': props<{ loading: boolean }>(),
    'Set windows': props<{ windowsData: WindowEntity[] }>(),
    'Add windows': props<{ windowsData: WindowEntity[] }>(),
    'Add window': props<{ windowData: WindowEntity }>(),
    'Update window view mode': props<{ windowId: string; windowViewMode: WindowViewMode }>(),
    'Close window': props<{ windowId: string }>(),
  },
});
