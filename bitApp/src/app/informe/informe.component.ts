import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { InformeShort, InformeLarge, Evento, Responsable, estados , turnos, responsables} from '../data-model';
import { ApiService } from '../api.service';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {
  informes: Observable<InformeLarge[]>;
  displayedColumns = ['informeId', 'fecha', 'turno', 'responsable'];
  dataSource = new RegistroDataSource(this.apiService);
  isLoading = false;
  turnos =  turnos;
  responsables = responsables;
  informe:  InformeLarge;
  informeForm: FormGroup;
  responsableCtrl: FormControl;
  informeShort: InformeShort = {};
  listadeEventos: Evento[];

  // filteredResponsables: Observable<any[]>;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    // this.responsableCtrl = new FormControl();
    // this.filteredResponsables = this.responsableCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(responsable => responsable ? this.filtrarResponsables(responsable) : this.responsables.slice())
    //   );
  }

  // filtrarResponsables(nombre: string) {
  //   return this.responsables.filter(responsable =>
  //     responsable.nombre.toLowerCase().indexOf(nombre.toLowerCase()) === 0);
  // }

  createForm() {
    this.informeForm = this.fb.group({
      fecha: '',
      turno: '',
      responsable: '',
      informeId: ''
    });
  }

  getInformes() {
    this.isLoading = true;
    this.informes = this.apiService.getInformes()
                        .pipe(finalize(() => this.isLoading = false));
  }

  prepararInforme(): InformeLarge {
    const formModel = this.informeForm.value;
    const saveInforme: InformeLarge = {
      listadoEventos: formModel as Evento[],
      fecha: formModel.fecha as string,
      turno: formModel.turno as string,
      responsable: formModel.responsable as string,
      informeId: formModel.informeId as string,
    };
    return saveInforme;
  }

  detalleInforme(informe: InformeLarge) {
    // console.log(informe);
  }

  filaSeleccionada(row) {
    this.informeShort = row;
    this.apiService.getEventos(this.informeShort['listadoEventos'])
    .subscribe(val => {
      console.log('arreglo de eventos' + val);
    });
    console.log('Row clicked: ', this.informeShort);
  }

  ngOnInit() {
    this.getInformes();
    this.createForm();
    this.onChanges();
  }

  onChanges(): void {
    this.informeForm.valueChanges.subscribe(val => {
    this.informe = this.prepararInforme();
    });
  }

}

export class RegistroDataSource extends DataSource<any> {
  constructor(private apiService: ApiService) {
    super();
  }
  connect(): Observable<InformeLarge[]> {
    return this.apiService.getInformes();
  }
  disconnect() { }
}
