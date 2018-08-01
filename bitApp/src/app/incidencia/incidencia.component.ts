import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { InformeShort, InformeLarge, Responsable, Evento, ListadoEventos, niveles, estados, areas, programas,
  tipofallas, atenciones, mamfallas, pamfallas, edicionfallas, postaudiofallas, conectividadfallas,
 datacenterfallas, operacionfallas, transcodificacionfallas, codificacionfallas, estudios13fallas, ingestafallas,
 emisionautofallas, inewsfallas, recepcioncontefallas, transmisionfallas, libreriamusicalfallas,
 otrasfallas, graficafallas, electricidadfallas, responsables, impactos} from '../data-model';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';

import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

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
  // tslint:disable-next-line:component-selector
  selector: 'incidencia-dialog',
  templateUrl: 'incidencia.dialog.component.html',
  styleUrls: ['./incidencia.dialog.component.css']
})
export class IncidenciaDialogComponent implements OnInit {

  responsable: Responsable = {
      responsableId: '',
      nombre: '',
      correo: '',
      cargo: ''
    };

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
  impactos = impactos;

  incidenciaDialogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<IncidenciaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Evento) {
      this.responsable.nombre = data.respevento;
    }
    // @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.incidenciaDialogForm.reset();
    this.dialogRef.close();
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.incidenciaDialogForm = this.fb.group({
      eventoId : this.data.eventoId,
      informeId : this.data.informeId,
      respevento : [this.data.respevento, Validators.required],
      fecha : [this.data.fecha, Validators.required],
      hora : [this.data.hora, Validators.required],
      informante : [this.data.informante],
      area : [this.data.area, Validators.required],
      programa : [this.data.programa, Validators.required],
      nivel : [this.data.nivel, Validators.required],
      // plataforma : {nombre: [{value: this.data.plataforma.nombre, disabled: true}, Validators.required], itemfalla: ''},
      plataformaNombre : [{value: this.data.plataforma.nombre, disabled: true}, Validators.required],
      plataformaItemFalla : [{value: this.data.plataforma.itemfalla, disabled: true}, Validators.required],
      tipofalla : [this.data.tipofalla, Validators.required],
      descripcion : [this.data.descripcion],
      solucion : [this.data.solucion],
      respoperacion : [this.data.respoperacion],
      estado : [this.data.estado, Validators.required],
      fechares : [this.data.fechares],
      atencion : [this.data.atencion, Validators.required],
      impacto : [this.data.impacto]
    });
  }



  onSubmit() {
    console.log('Submit' + JSON.stringify(this.incidenciaDialogForm.value));
    this.apiService.modificarEvento(this.incidenciaDialogForm.value)
    .subscribe(evento => {
      console.log('Evento modificado: ' + JSON.stringify(evento));
      this.incidenciaDialogForm.reset();
      this.dialogRef.close();
    });
  }

}

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

  animal: string;
  name: string;

  constructor(private apiService: ApiService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(IncidenciaDialogComponent, {
      width: '800px',
      data: row
      // data: {name: row.respevento, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  // highlight(element: Evento) {
  //   element.highlighted = !element.highlighted;
  // }

  createForm() {
    this.incidenciaForm = this.fb.group({
      eventoId : '',
      informeId : '',
      respevento : [null, Validators.required],
      fecha : [null, Validators.required],
      hora : [null, Validators.required],
      informante : '',
      area : [null, Validators.required],
      programa : [null, Validators.required],
      nivel : [null, Validators.required],
      plataforma : {nombre: '', itemfalla: ''},
      tipofalla : [null, Validators.required],
      descripcion : '',
      solucion : '',
      respoperacion : '',
      estado : [null, Validators.required],
      fechares : '',
      atencion : [null, Validators.required],
      impacto : ''
    });
  }

  getIncidencias() {
    this.isLoading = true;
    this.incidencias = this.apiService.getIncidencias()
                        .pipe(finalize(() => this.isLoading = false));
    // this.dataSource.addData = this.incidencias;
    console.log(this.incidencias);
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
          this.incidenciaForm.reset();
          this.createForm();
          // this.getIncidencias();
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
        this.incidenciaForm.reset();
        this.createForm();
        // this.getIncidencias();
      });
    }
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

filaSeleccionada(row: any) {
  console.log(row);
  this.openDialog(row);
}

}

export class RegistroDataSource extends DataSource<any> {
  constructor(private apiService: ApiService) {
    super();
  }

  addData() {
    return this.apiService.getIncidencias();
  }
  connect(): Observable<Evento[]> {
    return this.apiService.getIncidencias();
  }
  disconnect() { }
}
