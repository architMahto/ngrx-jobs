import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../models/app-state';
import { jobsReducer } from './jobs/jobs.reducer';

export const reducers: ActionReducerMap<AppState> = {
  jobs: jobsReducer
};
