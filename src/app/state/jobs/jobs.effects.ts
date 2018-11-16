import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ActionWithPayload } from '../../models/action-with-payload';

import { ActionCreatorService } from '../../services/action-creator.service';
import { JobsService } from '../../services/jobs.service';

import { JobsActions } from './jobs.actions';

@Injectable()
export class JobsEffects {
  constructor(
    private actions$: Actions,
    private jobsService: JobsService
  ) {}

  @Effect()
  retrieveJobs$: Observable<Action & ActionWithPayload<any>> = this.actions$
    .ofType(JobsActions.RETRIEVE_JOBS)
    .pipe(
      map(action => action['payload']),
      switchMap(
        payload => this.jobsService.getJobs(payload['queryParams'])
          .pipe(
            map((result: Response) =>
              ActionCreatorService.createActionWithPayload(JobsActions.RETRIEVE_JOBS_SUCCESS, { result: result.json() })
            ),
            catchError((error: Response) => of(ActionCreatorService.createActionWithPayload(
              JobsActions.RETRIEVE_JOBS_ERROR, { error: error.json() }
            )))
          )
      )
    );
}
