import { Action } from '@ngrx/store';

import { ActionWithPayload } from '../models/action-with-payload';

export class ActionCreatorService {

  constructor() { }

  static createAction(type: string): Action {
    return { type };
  }

  static createActionWithPayload<T>(type: string, payload: T): ActionWithPayload<T> {
    return { type, payload };
  }
}
