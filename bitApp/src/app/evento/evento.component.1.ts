import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Subscription } from 'rxjs/Subscription';
import { Observable, of } from 'rxjs';

import { InformeShort, InformeLarge, Evento, Responsable, estados, areas, fallas, responsables } from '../data-model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  @Input() informe: InformeLarge;

  eventos: Evento[];
  informeLocal: InformeLarge;
  evento: Evento;
  eventoForm: FormGroup;
  estados = estados;
  areas = areas;
  fallas = fallas;

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

  rebuildForm() {
    this.eventoForm.reset({
    });
  }

  get listadoEventos(): FormArray {
    return this.eventoForm.get('listadoEventos') as FormArray;
  }

  setEventos(eventos: Evento[]) {
    const eventoFGs = eventos.map(evento => this.fb.group(evento));
    const eventoFormArray = this.fb.array(eventoFGs);
    this.eventoForm.setControl('setEventos(eventos: Evento[]): ', eventoFormArray);
  }

  agregarEvento() {
    this.listadoEventos.push(this.fb.group(new Evento()));
    console.log('agregarEvento(): ', this.listadoEventos);
  }

  // addEvento(evento: Evento): void {
  //   // name = name.trim();
  //   if (!evento) { return; }
  //   this.apiService.crearEvento(evento)
  //     // tslint:disable-next-line:no-shadowed-variable
  //     .subscribe(evento => {
  //       this.eventos.push(evento);
  //     });
  // }

  onSubmit() {
    // this.informeLocal = this.prepararInforme();
    // this.apiService.obtenerLastInformeId(this.informeLocal).subscribe(
    //   data => {},
    //   error => {
    //     console.error('Error obteniendo Last Informe ID');
    //     return Observable.throw(error);
    //   }
    // );
    // this.apiService.crearInforme(this.informeLocal).subscribe(
    //   data => {
    //     return true;
    //   },
    //   error => {
    //     console.error('Error creando registro');
    //     return Observable.throw(error);
    //   }
    // );
    this.rebuildForm();
  }

  ngOnInit() {
    this.createForm();
    this.onChanges();
    // this.informeLocal = this.prepararInforme(this.informe);
  }

  onChanges(): void {
    this.eventoForm.valueChanges.subscribe(val => {
      this.informeLocal = this.prepararInforme();
      this.informeLocal.responsable = this.informe.responsable;
      this.informeLocal.fecha = this.informe.fecha;
      this.informeLocal.turno = this.informe.turno;
      this.informeLocal.informeId = this.informe.informeId;
    });
  }

  prepararInforme(): InformeLarge {

    try {
      this.eventoForm.value['listadoEventos'].forEach(item => {
        // console.log(item.hora);
        item.responsableEvento = this.informeLocal.responsable;
        item.fecha = this.informeLocal.fecha;
        // console.log('preparar 2: ' + item.responsableEvento);
      });
    } catch (e) { }

    console.log('prepararInforme(): ', JSON.stringify(this.eventoForm.value['listadoEventos']));  // ESTE ES UN OBJETO

    // const formModel = this.eventoForm.value;

    // const saveInforme: Informe = {
    //   listadoEventos: formModel as Evento[],
    //   fecha: formModel.fecha as string,
    //   turno: formModel.turno as string,
    //   responsable: formModel.responsable as string,
    //   informeId: formModel.informeId as number,
    // };
//    return saveInforme;
    return this.eventoForm.value;
  }

}
