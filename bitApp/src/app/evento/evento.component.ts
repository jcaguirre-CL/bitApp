import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Informe, Evento, Responsable } from '../data-model';
import { ApiService } from '../api.service';

import { Address, Hero, estados, areas } from '../data-model';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnChanges {
  @Input() informe: Informe;

  eventoForm: FormGroup;
  estados = estados;
  areas = areas;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService) {

    this.createForm();
  }

  createForm() {
    this.eventoForm = this.fb.group({
      listadoEventos: this.fb.array([])
    });
  }

  ngOnChanges() {
    this.rebuildForm();
    console.log('changes', this.informe);
  }

  rebuildForm() {
    this.eventoForm.reset({
      responsable: this.informe.responsable
    });
    this.setEventos(this.informe.listadoEventos); // Aqui se deberian asociar los eventos relacionados con el informe seleccionado
  }

  get listadoEventos(): FormArray {
    return this.eventoForm.get('listadoEventos') as FormArray;
  }

  setEventos(eventos: Evento[]) {
    const eventoFGs = eventos.map(evento => this.fb.group(evento));
    const eventoFormArray = this.fb.array(eventoFGs);
    this.eventoForm.setControl('listadoEventos', eventoFormArray);
  }

  agregarEvento() {
    this.listadoEventos.push(this.fb.group(new Evento()));
    console.log('agregar', this.informe);
  }
}
