//Se envía el archivo al backend y se regresa el análisis

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ANALISIS, URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {

  private analisis$ = new BehaviorSubject<any>({});
  datos$ = this.analisis$.asObservable();

  constructor(private http: HttpClient) { }

  enviarArchivo(formData: FormData) : Observable<any>{
    const url = `${URL}${ANALISIS}`;
    console.log(formData);
    var type = formData.get('vuelta') == '1' ? 'json' : 'blob'
    return this.http
      .post<any>(url, formData, {responseType: type as 'json'});
  }

  guardarDatos(datos: any){
    this.analisis$.next(datos);
  }
}
