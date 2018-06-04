import { Component } from '@angular/core';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { routerTransition } from './router.animations';
import { trigger, style, transition, animate, group, state } from '@angular/animations';

import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mode = new FormControl('over');
  // shouldRun = [/(^|\.)misitio\.co$/, /(^|\.)servidor\.io$/].some(h => h.test(window.location.host));
  constructor(public router: Router) { }
}
