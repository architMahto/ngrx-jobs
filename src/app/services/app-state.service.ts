import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../models/app-state';
import { Jobs } from '../models/jobs';

@Injectable()
export class AppStateService {

  constructor(private store: Store<AppState>) { }

  select(selectFunction: (appState: AppState) => any): Observable<any> {
    return this.store.select(selectFunction);
  }

  getJobs(): Observable<Jobs> {
    return this.select(appState => appState.jobs);
  }
}
