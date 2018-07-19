import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Subscription } from 'rxjs/Subscription';
import { Observable, of, Subject } from 'rxjs';

// tslint:disable-next-line:max-line-length
import { InformeShort, InformeLarge, Evento, ListadoEventos, niveles, estados, areas, programas,
   tipofallas, atenciones, mamfallas, pamfallas, edicionfallas, postaudiofallas, conectividadfallas,
  datacenterfallas, operacionfallas, transcodificacionfallas, codificacionfallas, estudios13fallas, ingestafallas,
  emisionautofallas, inewsfallas, recepcioncontefallas, transmisionfallas, libreriamusicalfallas,
  otrasfallas, graficafallas, electricidadfallas} from '../data-model';
import { ApiService } from '../api.service';
import { all } from 'q';

////
const informeShort = new InformeShort([{_id: ''}], '', '', '', '');

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

////
  informeLarge: InformeLarge;
  arrayEventos: Array<String>[] = [];
  informeShort = informeShort;

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

  estados = estados;
  areas = areas;
  niveles = niveles;
  programas = programas;
  tipofallas = tipofallas;
  atenciones = atenciones;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService) {
////
    this.informeShort['listadoEventos'] = new Array<ListadoEventos>();
    this.createForm();
  }

  createForm() {
    this.eventoForm = this.fb.group({
      listadoEventos: this.fb.array([])
    });
  }

  rebuildForm() {
    for (let i = 0, len = this.listadoEventos.length; i < len + 1; i++) {
      this.listadoEventos.removeAt(0);
    }
    this.eventoForm.reset({
      listadoEventos: this.fb.array([])
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

  onSubmit() {
      this.informeLarge = this.informeLocal;
      console.log('crear Informe: ' + JSON.stringify(this.informeLarge));
      this.eventos = this.informeLarge['listadoEventos'];
      for (let i = 0, len = this.eventos.length; i < len; i++) {
        this.apiService.buildEvento(this.eventos[i])
        .subscribe(evento => {
          console.log('creando: ' + JSON.stringify(evento));
          this.arrayEventos.push(evento['_id']);
          console.log('arrayeventos: ' + this.arrayEventos);
        });
      }
      setTimeout(() => {
        console.log('sdsd: ' + this.arrayEventos);
        console.log('sdsd: ' + JSON.stringify(this.informeShort));
        for (let i = 0, len = this.arrayEventos.length; i < len; i++) {
          this.informeShort['listadoEventos'].push({_id: this.arrayEventos[i]});
        }
        this.informeShort['fecha'] = this.informeLarge['fecha'];
        this.informeShort['respevento'] = this.informeLarge['respevento'];
        this.informeShort['turno'] = this.informeLarge['turno'];
        // setTimeout(() => {
        this.apiService.buildInforme(this.informeShort).
        subscribe(informe => {
          console.log('!!!!!crear informe: ' + JSON.stringify(informe));
          console.log('!!!!!crear informe: ' + informe['_id']);
          for (let i = 0, len = this.arrayEventos.length; i < len; i++) {
            this.apiService.modifyEvento({'eventoId': String(this.arrayEventos[i]), 'informeId': String(informe['_id'])})
            .subscribe(evento => {
              console.log('Evento modificado: ' + JSON.stringify(evento));
            });
          }
        });
        // tslint:disable-next-line:max-line-length
        this.apiService.sendMail(this.arrayEventos, this.informeLarge['respevento'], this.informeLarge['turno'], this.informeLarge['fecha']).
        subscribe(respon => {
          console.log('correo enviado' + respon);
        });
      }, 1500);

      // return null;
    // }



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
  }

  onChanges(): void {
    this.eventoForm.valueChanges.subscribe(val => {
      this.informeLocal = this.prepararInforme();
      this.informeLocal.respevento = this.informe.respevento;
      this.informeLocal.fecha = this.informe.fecha;
      this.informeLocal.turno = this.informe.turno;
      this.informeLocal.informeId = this.informe.informeId;
    });
  }

  prepararInforme(): InformeLarge {

    try {
      this.eventoForm.value['listadoEventos'].forEach(item => {
        item.responsableEvento = this.informeLocal.respevento;
        item.fecha = this.informeLocal.fecha;
        ////
        item.turno = this.informeLocal.turno;
      });
    } catch (e) { }

    console.log('prepararInforme(): ', JSON.stringify(this.eventoForm.value['listadoEventos']));  // ESTE ES UN OBJETO

    return this.eventoForm.value;
  }

}
