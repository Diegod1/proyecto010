import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchAllEmpresasResponse } from "../interfaces/empresas.interfaces";
import { map , debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { }

  getAllEmpresas(){
    return this.http.get<FetchAllEmpresasResponse>('https://www.datos.gov.co/resource/8hn7-rpp8.json')
    .pipe(
      map( this.transformEmpresas),debounceTime(500)
    )
  }
  
  private transformEmpresas(resp: FetchAllEmpresasResponse): FetchAllEmpresasResponse {

    return resp;
  }


}
