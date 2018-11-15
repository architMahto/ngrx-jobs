import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobsContainerComponent } from './components/jobs-container/jobs-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JobsComponent,
    JobsContainerComponent
  ]
})
export class JobsModule { }
