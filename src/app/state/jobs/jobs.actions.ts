import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../models/app-state';
import { QueryParams } from '../../models/query-params';

import { ActionCreatorService } from '../../services/action-creator.service';

@Injectable()
export class JobsActions {
  static RETRIEVE_JOBS = 'RETRIEVE_JOBS';
  static RETRIEVE_JOBS_SUCCESS = 'RETRIEVE_JOBS_SUCCESS';
  static RETRIEVE_JOBS_ERROR = 'RETRIEVE_JOBS_ERROR';

  constructor(private store: Store<AppState>) {}

  retrieveJobs(queryParams: QueryParams) {
    this.store.dispatch(
      ActionCreatorService.createActionWithPayload(JobsActions.RETRIEVE_JOBS, { queryParams })
    );
  }
}
