import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Informe, Evento, Responsable, estados } from '../data-model';
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
  informes: Observable<Informe[]>;
  displayedColumns = ['informeId', 'responsable'];
  dataSource = new RegistroDataSource(this.apiService);
  isLoading = false;
  informe: Informe;
  informeForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.createForm();
    this.informe = {listadoEventos: [], responsable: 'Responsable 1 manual', fecha: '', turno: '', informeId: 1};
  }

  createForm() {
    this.informeForm = this.fb.group({
      fecha: '',
      turno: '',
      responsable: ''
    });
  }

  ngOnInit() { this.getInformes(); }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.informe = this.informeForm.value;
  }

  getInformes() {
    this.isLoading = true;
    this.informes = this.apiService.getInformes()
                        .pipe(finalize(() => this.isLoading = false));
  }
  detalleInforme(informe: Informe) {
    // console.log(informe);
  }
}

export class RegistroDataSource extends DataSource<any> {
  constructor(private apiService: ApiService) {
    super();
  }
  connect(): Observable<Informe[]> {
    return this.apiService.getInformes();
  }
  disconnect() { }
}
