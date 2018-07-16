import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stream } from '../models/stream';
import * as StreamActions from '../actions/stream.actions';

const streams: Stream[] = [ // just pretending that we are loading data from an API in this effect.
    {
      title: 'C13i',
      src: 'http://10.128.2.39/c13i/c13i-13i.m3u8'
    },
    {
      title: 'T13Radio',
      src: 'http://10.128.2.39/t13-radio/t13-radio.m3u8'
    }
  ];


@Injectable()
export class StreamEffects {
  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType(StreamActions.FETCH_STREAMS),
    map(action => ({ type: StreamActions.SET_STREAMS, payload: streams }))
  );

  constructor(private actions$: Actions) {}
}
