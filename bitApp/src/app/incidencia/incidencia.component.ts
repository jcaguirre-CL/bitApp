import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { ApiService } from '../api.service';
import { InformeShort, InformeLarge, Evento, ListadoEventos, niveles, estados, areas, programas,
  tipofallas, atenciones, mamfallas, pamfallas, edicionfallas, postaudiofallas, conectividadfallas,
 datacenterfallas, operacionfallas, transcodificacionfallas, codificacionfallas, estudios13fallas, ingestafallas,
 emisionautofallas, inewsfallas, recepcioncontefallas, transmisionfallas, libreriamusicalfallas,
 otrasfallas, graficafallas, electricidadfallas, responsables} from '../data-model';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';

import { MatSnackBar } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'incidencia-snack',
  templateUrl: 'incidencia.snack.component.html',
  styles: [`
    .snack-informe {
      color: hotwhite;
      font: sans-serif bold 20px/30px;
    }
  `],
})
export class IncidenciaSnackComponent {}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'incidenciaNoCorreo-snack',
  templateUrl: 'incidenciaNoCorreo.snack.component.html',
  styles: [`
    .snack-informe {
      color: hotwhite;
      font: sans-serif bold 20px/30px;
    }
  `],
})
export class IncidenciaNoCorreoSnackComponent {}

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {
  isLoading = false;
  doEnviar = false;

  mamfallas = mamfallas;
  pamfallas = pamfallas;
  edicionfallas = edicionfallas;
  postaudiofallas = postaudiofallas;
  conectividadfallas = conectividadfallas;
  datacenterfallas = datacenterfallas;
  operacionfallas = operacionfallas;
  graficafallas = graficafallas;
  transcodificacionfallas = transcodificacionfallas;
  codificacionfallas = codificacionfallas;
  estudios13fallas = estudios13fallas;
  ingestafallas = ingestafallas;
  emisionautofallas = emisionautofallas;
  inewsfallas = inewsfallas;
  transmisionfallas = transmisionfallas;
  recepcioncontefallas = recepcioncontefallas;
  libreriamusicalfallas = libreriamusicalfallas;
  electricidadfallas = electricidadfallas;
  otrasfallas = otrasfallas;

  responsables = responsables;
  estados = estados;
  areas = areas;
  niveles = niveles;
  programas = programas;
  tipofallas = tipofallas;
  atenciones = atenciones;

  displayedColumns = ['fecha', 'respevento', 'area', 'nivel', 'plataforma', 'estado', 'atencion'];
  dataSource = new RegistroDataSource(this.apiService);

  incidencias: Observable<Evento[]>;
  incidenciaForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder, public snackBar: MatSnackBar) {  }

  // highlight(element: Element) {
  //   element.highlighted = !element.highlighted;
  // }

  createForm() {
    this.incidenciaForm = this.fb.group({
      eventoId : '',
      informeId : '',
      respevento : '',
      fecha : '',
      hora : '',
      informante : '',
      area : '',
      programa : '',
      nivel : '',
      plataforma : {nombre: '', itemfalla: ''},
      tipofalla : '',
      descripcion : '',
      solucion : '',
      respoperacion : '',
      estado : '',
      fechares : '',
      atencion : '',
      impacto : ''
    });
  }

  getIncidencias() {
    this.isLoading = true;
    this.incidencias = this.apiService.getIncidencias()
                        .pipe(finalize(() => this.isLoading = false));
  }

  onSubmit() {
    if (this.doEnviar) {
      console.log('enviar correo');
      this.apiService.buildEvento(this.incidenciaForm.value).
      subscribe(data => {
        console.log('!!!!!crear incidencia: ' + JSON.stringify(data));
        this.apiService.sendMail1Evento(data['_id'], data.respevento, data.fecha).
        subscribe(respon => {
          console.log('correo enviado' + respon);
          this.snackBar.openFromComponent(IncidenciaSnackComponent, {
            duration: 3000,
          });
        });
      });
    } else {
      console.log('no enviar correo');
      this.apiService.buildEvento(this.incidenciaForm.value).
      subscribe(data => {
        console.log('!!!!!crear incidencia: ' + JSON.stringify(data));
        this.snackBar.openFromComponent(IncidenciaNoCorreoSnackComponent, {
          duration: 3000,
        });
      });
    }
    this.incidenciaForm.reset();
          // console.log('!!!!!crear informe: ' + informe['_id']);
      // for (let i = 0, len = this.arrayEventos.length; i < len; i++) {
      //   this.apiService.modifyEvento({'eventoId': String(this.arrayEventos[i]), 'informeId': String(informe['_id'])})
      //   .subscribe(evento => {
      //     console.log('Evento modificado: ' + JSON.stringify(evento));
      //   });
      // }
  }

  ngOnInit() {
    this.createForm();
    this.getIncidencias();
  }

}

export class RegistroDataSource extends DataSource<any> {
  constructor(private apiService: ApiService) {
    super();
  }
  connect(): Observable<Evento[]> {
    return this.apiService.getIncidencias();
  }
  disconnect() { }
}
