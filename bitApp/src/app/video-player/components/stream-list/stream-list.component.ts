import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { VideoPlayerState } from '../../store/store.state';
import * as StreamActions from '../../store/actions/stream.actions';
import { Stream } from '../../store/models/stream';

const canal: Array<Stream> = [
  {
    title: 'C13HD',
    // src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
    src: 'http://10.128.2.39/c13i/c13i-13i.m3u8'
  }
];

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})

export class StreamListComponent implements OnInit {

  streamList$: Observable<any>;
  streams: Stream[];
  streamListSubscription: Subscription;
  canal = canal;

  constructor(private store: Store<VideoPlayerState>) {
    this.store.dispatch(new StreamActions.FetchStreams());
  }

  ngOnInit() {
    this.streamList$ = this.store.select('videoPlayer');
    this.streamList$.subscribe(
      (val: VideoPlayerState) => this.streams = val.streamList
    );
    this.store.dispatch(new StreamActions.SetSelectedStream(this.canal[0]));
  }

  setSelectedStream(stream: Stream) {
    this.store.dispatch(new StreamActions.SetSelectedStream(stream));
  }

}
