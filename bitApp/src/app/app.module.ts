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

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { SnackbarcustomComponent } from './snackbarcustom/snackbarcustom.component';
import { InformeComponent } from './informe/informe.component';
import { EventoComponent } from './evento/evento.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarcustomComponent,
    InformeComponent,
    EventoComponent,
    ConfiguracionComponent,
    IncidenciaComponent,
    InicioComponent
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
    MatSnackBarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
