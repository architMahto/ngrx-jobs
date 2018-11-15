import { Action } from '@ngrx/store';
import { JobsActions } from './jobs.actions';

import { createDefaultJobs, Jobs } from '../../models/jobs';
import { buildJobsList } from '../../models/job';
import { ActionWithPayload } from '../../models/action-with-payload';

export function jobsReducer(
  state: Jobs = createDefaultJobs(),
  action: ActionWithPayload<any> & Action
): Jobs {
  switch (action.type) {
    case JobsActions.RETRIEVE_JOBS:
      return {...state, isLoading: true, isReceived: false, error: null};
    case JobsActions.RETRIEVE_JOBS_SUCCESS:
      return {...state, entities: buildJobsList(action.payload.result), isLoading: false, isReceived: true, error: null};
    case JobsActions.RETRIEVE_JOBS_ERROR:
      return {...state, isLoading: false, isReceived: false, error: action.payload.error};
    default:
      return state;
  }
}
