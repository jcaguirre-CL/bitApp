import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { InformeComponent } from './informe/informe.component';
import { EventoComponent } from './evento/evento.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AppComponent } from './app.component';

const routes = [
  { path: 'inicio', component: InicioComponent, data: { animation: 'inicio' } },
  { path: 'informe', component: InformeComponent, data: { animation: 'inicio' } },
  { path: 'incidencia', component: IncidenciaComponent, data: { animation: 'crear' } },
  { path: 'configuracion', component: ConfiguracionComponent, data: { animation: 'actualizar' } },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [InformeComponent, EventoComponent, ConfiguracionComponent];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});
