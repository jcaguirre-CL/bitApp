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

import { AuthService } from './auth.service';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mode = new FormControl('over');

  constructor(private auth: AuthService, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'c13',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/1200xC13.svg'));
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
