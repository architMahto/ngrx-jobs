import { Component, OnInit } from '@angular/core';
import { JobsActions } from './state/jobs/jobs.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private jobsActions: JobsActions) {}

  ngOnInit() {
    this.jobsActions.retrieveJobs({ description: 'Python', location: 'New York'});
  }
}
