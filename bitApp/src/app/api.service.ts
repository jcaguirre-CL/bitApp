import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { informes, Informe } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  delayMs = 500;

  getInformes(): Observable<Informe[]> {
    return of(informes).pipe(delay(this.delayMs)); // simulate latency with delay
  }
}
