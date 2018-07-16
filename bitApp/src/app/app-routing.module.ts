import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { InformeComponent } from './informe/informe.component';
import { EventoComponent } from './evento/evento.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes = [
  { path: 'inicio', component: InicioComponent, data: { animation: 'inicio' }, canActivate: [AuthGuard] },
  { path: 'informe', component: InformeComponent, data: { animation: 'inicio' }, canActivate: [AuthGuard] },
  { path: 'incidencia', component: IncidenciaComponent, data: { animation: 'crear' }, canActivate: [AuthGuard] },
  { path: 'configuracion', component: ConfiguracionComponent, data: { animation: 'actualizar', canActivate: [AuthGuard] } },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
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
