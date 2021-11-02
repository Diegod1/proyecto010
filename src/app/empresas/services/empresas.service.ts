import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchAllEmpresasResponse } from '../interfaces/empresas.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { }

  getAllEmpresas(){
    return this.http.get<FetchAllEmpresasResponse>('https://www.datos.gov.co/resource/8hn7-rpp8.json')
    .pipe(
      map( result => result)
    )
  }

}
