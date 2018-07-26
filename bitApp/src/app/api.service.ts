import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {forkJoin} from 'rxjs';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { InformeShort, Evento, InformeLarge, ListadoEventos, ModificarEventoInformeId } from './data-model';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const informeShort = new InformeShort([{_id: ''}], '', '', '', '');
// const modificarEventoInformeId = new ModificarEventoInformeId('', '');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _URL = 'http://localhost:3000/api/';
  private handleError: HandleError;
  delayMs = 500;
  informeId = 0;
  informeShort = informeShort;
  // modificarEventoInformeId = modificarEventoInformeId;

  // listadoEventos: Array<any>[];
  // eventoId: number;
  eventos: Evento[] = [];
  // informeShort = new InformeShort([], '', '', '', '');
  // let bob = new User('Bob', false);

  informeLarge: InformeLarge;
  // Informe: FormInforme;
  arrayEventos: Array<String>[] = [];
  modificarEventoInformeId: ModificarEventoInformeId = {eventoId: '', informeId: ''};


  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ApiService');
    this.informeShort['listadoEventos'] = new Array<ListadoEventos>();
  }

  buildEvento (evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this._URL + 'Evento', evento, httpOptions)
      .pipe(
        catchError(this.handleError('crearEvento error: ', evento))
      );
  }

  buildInforme (informe: InformeShort): Observable<InformeShort> {
    return this.http.post<InformeShort>(this._URL + 'Informe', informe, httpOptions)
      .pipe(
        catchError(this.handleError('crearInforme error: ', informe))
      );
  }

  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:no-shadowed-variable
  modifyEvento (modificarEventoInformeId: ModificarEventoInformeId): Observable<ModificarEventoInformeId> {
    // tslint:disable-next-line:max-line-length
    console.log('xxx: ' + JSON.stringify(modificarEventoInformeId));
    // tslint:disable-next-line:max-line-length
    return this.http.put<ModificarEventoInformeId>(this._URL + 'Evento/' + modificarEventoInformeId['eventoId'], modificarEventoInformeId, httpOptions)
      .pipe(
        catchError(this.handleError('crearInforme error: ', ))
      );
  }

  getInformes(): Observable<any> {
    return this.http.get(this._URL + 'Informes', httpOptions)
      .pipe(
        catchError(this.handleError('getInformes', []))
      );
  }

  getIncidencias(): Observable<any> {
    return this.http.get(this._URL + 'Eventos', httpOptions)
      .pipe(
        catchError(this.handleError('getIncidencias', []))
      );
  }

  getEvento(eventoId): Observable<any> {
    return this.http.get(this._URL + 'Evento/' + eventoId, httpOptions)
      .pipe(
        catchError(this.handleError('getEvento x Informe', []))
      );
  }
  getEventos(listadeEventos): Observable<any> {
    return this.http.get(this._URL + 'Eventos/' + listadeEventos, httpOptions)
      .pipe(
        catchError(this.handleError('getEventos x Informe', []))
      );
  }
  // getInformes(): Observable<InformeLarge[]> {
  //   return of(informesLarge).pipe(delay(this.delayMs)); // simulate latency with delay
  // }
  sendMail(eventos, remitente, turno, fecha): Observable<any> {
    if (eventos.length) {
      console.log('###################################mas de cero evento');
      // tslint:disable-next-line:max-line-length
      return this.http.get(this._URL + 'sendMail/' + 'jcaguirrecl@gmail.com' + '/' + eventos + '/' + remitente + '/' + turno + '/' + fecha, httpOptions)
      .pipe(
        catchError(this.handleError('sendMail x Informe', []))
      );
    } else {
      console.log('###################################no evento');
      // tslint:disable-next-line:max-line-length
      return this.http.get(this._URL + 'sendMail/' + 'jcaguirrecl@gmail.com' + '/' + '[]' + '/' + remitente + '/' + turno + '/' + fecha, httpOptions)
      .pipe(
        catchError(this.handleError('sendMail x Informe', []))
      );
    }
    // tslint:disable-next-line:max-line-length
    // console.log('enviar listado#################: ' + eventos);
    // tslint:disable-next-line:max-line-length
  }

  sendMail1Evento(eventos, remitente, fecha): Observable<any> {
      // tslint:disable-next-line:max-line-length
      return this.http.get(this._URL + 'sendMail1Evento/' + 'jcaguirrecl@gmail.com' + '/' + JSON.stringify(eventos) + '/' + remitente + '/' + fecha, httpOptions)
      .pipe(
        catchError(this.handleError('sendMail x 1 Evento', []))
      );
  }

  obtenerLastEventoId () {
    return this.http.get(this._URL + 'Eventos/Last', httpOptions)
      .pipe(
        catchError(this.handleError('LastEvento', []))
      );
  }

  // crearInforme (informeLarge: InformeLarge): Observable<InformeLarge> {
  //   this.informeLarge = informeLarge;
  //   console.log('crear Informe: ' + JSON.stringify(this.informeLarge));
  //   this.eventos = informeLarge['listadoEventos'];

  //   for (let i = 0, len = this.eventos.length; i < len; i++) {
  //     this.buildEvento(this.eventos[i])
  //     .subscribe(evento => {
  //       console.log('creando: ' + JSON.stringify(evento));
  //       this.arrayEventos.push(evento['_id']);
  //       console.log('arrayeventos: ' + this.arrayEventos);
  //     });
  //   }

  //   setTimeout(() => {
  //     console.log('sdsd: ' + this.arrayEventos);
  //     console.log('sdsd: ' + JSON.stringify(this.informeShort));
  //     for (let i = 0, len = this.arrayEventos.length; i < len; i++) {
  //       this.informeShort['listadoEventos'].push({_id: this.arrayEventos[i]});
  //     }
  //     this.informeShort['fecha'] = this.informeLarge['fecha'];
  //     this.informeShort['responsable'] = this.informeLarge['responsable'];
  //     this.informeShort['turno'] = this.informeLarge['turno'];
  //     // setTimeout(() => {
  //       this.buildInforme(this.informeShort).
  //       subscribe(informe => {
  //         console.log('!!!!!crear informe: ' + JSON.stringify(informe));
  //         console.log('!!!!!crear informe: ' + informe['_id']);
  //         for (let i = 0, len = this.arrayEventos.length; i < len; i++) {
  //           this.modifyEvento({'eventoId': String(this.arrayEventos[i]), 'informeId': String(informe['_id'])})
  //           .subscribe(evento => {
  //             console.log('Evento modificado: ' + JSON.stringify(evento));
  //           });
  //         }
  //       });
  //   }, 1000);
  //   return null;
  // }



 obtenerLastInformeId () {
  console.log('obtenerLastInformeId(): ');
  return forkJoin(this.http.get(this._URL + 'Informes/LastId'));
 }
  // getDomos(): Observable<IDomos[]> {
  //   return this.http
  //       .get(this._URL + '/All')
  //       .map((response: Response) => {
  //           return <IDomos[]>response.json();
  //       })
  //       .catch(this.handleError);
  // }

  // updateInforme(informe: Informe): Observable<Informe>  {
  //   const oldHero = informes.find(i => i.informeId === informe.informeId);
  //   const newHero = Object.assign(oldHero, informe); // Demo: mutate cached hero
  //   return of(newHero).pipe(delay(this.delayMs)); // simulate latency with delay
  // }
}
