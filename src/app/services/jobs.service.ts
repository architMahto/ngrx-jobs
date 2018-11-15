import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { QueryParams } from '../models/query-params';

@Injectable()
export class JobsService {

  constructor(private http: Http) { }

  getJobs(queryParams: QueryParams): Observable<any> {
    const relativeUrl = this.createAPIUrl(queryParams);
    return this.http.get(relativeUrl);
  }

  createAPIUrl(queryParams: QueryParams): string {
    return `https://jobs.github.com/positions.json?${this.createParameters(queryParams)}`;
  }

  createParameters(queryParams: QueryParams): string {
    const paramsStringArray = [];

    // tslint:disable
    for (const param in queryParams) {
      if (param === 'description') {
        paramsStringArray.push(`description=${queryParams[param].toLowerCase()}`);
      }

      if (param === 'location') {
        paramsStringArray.push(`location=${queryParams[param].toLowerCase().split(' ').join('+')}`);
      }

      if (param === 'isFullTime') {
        paramsStringArray.push(`full_time=${queryParams[param]}`);
      }
    }

    return paramsStringArray.join('&');
  }
}
