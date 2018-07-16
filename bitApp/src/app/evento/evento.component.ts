import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Subscription } from 'rxjs/Subscription';
import { Observable, of, Subject } from 'rxjs';

// tslint:disable-next-line:max-line-length
import { InformeShort, InformeLarge, Evento, ListadoEventos, Plataforma, estados, areas, programas, fallas, responsabilidades } from '../data-model';
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

////
  // mamFalla: string;
  // pamFalla: string;
  // mamfallas: string[] = ['Transferencia', 'Busqueda', 'Cinta'];
  // mamfallas: new Subject<any[]>();
  mamfallas = [
    {nombre: 'MAM', falla: 'Tx Cinta'},
    {nombre: 'MAM', falla: 'Tx Integracion'},
    {nombre: 'MAM', falla: 'Libreria'},
    {nombre: 'MAM', falla: 'Storage'},
    {nombre: 'MAM', falla: 'Discos'},
    {nombre: 'MAM', falla: 'Servidor'}
  ];
  pamfallas = [
    {nombre: 'PAM', falla: 'Interplay'},
    {nombre: 'PAM', falla: 'Storage'},
    {nombre: 'PAM', falla: 'Discos'},
    {nombre: 'PAM', falla: 'Workspaces'},
    {nombre: 'PAM', falla: 'Command Server'}
  ];
  edicionfallas = [
    {nombre: 'EDICION', falla: 'Aplicación'},
    {nombre: 'EDICION', falla: 'Superficie Control'},
    {nombre: 'EDICION', falla: 'WorkStation'},
    {nombre: 'EDICION', falla: 'MediaIndexer'},
    {nombre: 'EDICION', falla: 'Mojo'},
    {nombre: 'EDICION', falla: 'Conversor'},
    {nombre: 'EDICION', falla: 'Periféricos'},
  ];
  postaudiofallas = [
    {nombre: 'POST-AUDIO', falla: 'Aplicación'},
    {nombre: 'POST-AUDIO', falla: 'WorkStation'},
    {nombre: 'POST-AUDIO', falla: 'Superficie Control'},
  ];
  conectividadfallas = [
    {nombre: 'CONECTIVIDAD', falla: 'ISP Internet'},
    {nombre: 'CONECTIVIDAD', falla: 'Firewall'},
    {nombre: 'CONECTIVIDAD', falla: 'Balanceador'},
    {nombre: 'CONECTIVIDAD', falla: 'Switch'},
    {nombre: 'CONECTIVIDAD', falla: 'Cableado'},
    {nombre: 'CONECTIVIDAD', falla: 'ISP Regiones'},
    {nombre: 'CONECTIVIDAD', falla: 'Wifi'}
  ];
  datacenterfallas = [
    {nombre: 'DATACENTER', falla: 'Clima'},
    {nombre: 'DATACENTER', falla: 'Servicios GG'},
    {nombre: 'DATACENTER', falla: 'Acceso'},
    {nombre: 'DATACENTER', falla: 'Workspaces'},
    {nombre: 'DATACENTER', falla: 'PDU'}
  ];
  operacionfallas = [
    {nombre: 'OPERACION', falla: 'Play Out'},
    {nombre: 'OPERACION', falla: 'Skype'},
  ];
  graficafallas = [
    {nombre: 'GRAFICA', falla: 'Engine'},
    {nombre: 'GRAFICA', falla: 'Hub'},
    {nombre: 'GRAFICA', falla: 'Aplicación'},
    {nombre: 'GRAFICA', falla: 'Branding'}
  ];
  transcodificacionfallas = [
    {nombre: 'TRANSCODIFICACION', falla: 'Transcode'},
  ];
  codificacionfallas = [
    {nombre: 'CODIFICACION', falla: 'Encoder vivo'},
    {nombre: 'CODIFICACION', falla: 'Dispositivo 4G'},
    {nombre: 'CODIFICACION', falla: 'Encoder transporte'}
  ];
  // pamfallas: string[] = ['Permisos', 'Base de Datos', 'Servicios'];



  estados = estados;
  areas = areas;
  programas = programas;
  fallas = fallas;
  responsabilidades = responsabilidades;

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
        this.informeShort['responsable'] = this.informeLarge['responsable'];
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
      }, 1000);
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
      this.informeLocal.responsable = this.informe.responsable;
      this.informeLocal.fecha = this.informe.fecha;
      this.informeLocal.turno = this.informe.turno;
      this.informeLocal.informeId = this.informe.informeId;
    });
  }

  prepararInforme(): InformeLarge {

    try {
      this.eventoForm.value['listadoEventos'].forEach(item => {
        item.responsableEvento = this.informeLocal.responsable;
        item.fecha = this.informeLocal.fecha;
        ////
        item.turno = this.informeLocal.turno;
      });
    } catch (e) { }

    console.log('prepararInforme(): ', JSON.stringify(this.eventoForm.value['listadoEventos']));  // ESTE ES UN OBJETO

    return this.eventoForm.value;
  }

}
