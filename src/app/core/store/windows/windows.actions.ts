import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { WindowEntity, WindowViewMode } from '../../../types/window.types';

export const windowsActions = createActionGroup({
  source: 'windows',
  events: {
    'Fetch ': emptyProps(),
    'Change loading state': props<{ loading: boolean }>(),
    'Add window and push to front': props<{ windowData: WindowEntity }>(),
    'Add window': props<{ windowData: WindowEntity }>(),
    'Update window view mode': props<{ windowId: string; windowViewMode: WindowViewMode }>(),
    'Close window': props<{ windowId: string }>(),
    'Push window to front': props<{ windowId: string }>(),
    'Set index order': props<{ indexOrder: string[] }>(),
    'Set active window': props<{ windowId: string }>(),
    'Reset active window': emptyProps(),
  },
});
