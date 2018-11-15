import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { FeaturesModule } from './features/features.module';

import { AppComponent } from './app.component';

import { reducers } from './state/rootReducer';
import { EffectsList } from './state/effectsList';
import { ActionCreatorsProviders } from './state/actionCreatorsProviders';

import { ServiceProviders } from './services/serviceProviders';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(EffectsList),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    FeaturesModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    ...ActionCreatorsProviders,
    ...ServiceProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
