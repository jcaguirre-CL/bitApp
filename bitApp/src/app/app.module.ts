import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSnackBarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { routerTransition } from './router.animations';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { SnackbarcustomComponent } from './snackbarcustom/snackbarcustom.component';
import { InformeComponent } from './informe/informe.component';
import { EventoComponent } from './evento/evento.component';
import { EventoSnackComponent } from './evento/evento.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
// tslint:disable-next-line:max-line-length
import { IncidenciaComponent, IncidenciaSnackComponent, IncidenciaNoCorreoSnackComponent, IncidenciaDialogComponent } from './incidencia/incidencia.component';
import { InicioComponent } from './inicio/inicio.component';

import { MatRadioGroup } from '@angular/material';
import { LoginComponent } from './login/login.component';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { VideoPlayerModule } from './video-player/video-player.module';
import { AlertsModule } from 'angular-alert-module';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    SnackbarcustomComponent,
    InformeComponent,
    EventoComponent,
    ConfiguracionComponent,
    IncidenciaComponent,
    IncidenciaSnackComponent,
    IncidenciaNoCorreoSnackComponent,
    IncidenciaDialogComponent,
    InicioComponent,
    LoginComponent,
    EventoSnackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpModule,
    FlexLayoutModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/api/auth']
      }
    }),
    VideoPlayerModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    AlertsModule.forRoot()
  ],
  entryComponents: [EventoComponent,
    EventoSnackComponent,
    IncidenciaComponent,
    IncidenciaSnackComponent,
    IncidenciaNoCorreoSnackComponent,
    IncidenciaDialogComponent],
  providers: [
    ApiService,
    HttpErrorHandler,
    MessageService,
    MatRadioGroup,
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
