import {Job} from './job';
import {createDefaultLoadable, Loadable} from './loadable';

export interface Jobs extends Loadable {
  readonly entities: Array<Job>;
}

export function createDefaultJobs(): Jobs {
  return {
    entities: [],
    ...createDefaultLoadable()
  };
}
