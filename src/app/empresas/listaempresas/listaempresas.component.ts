import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../services/empresas.service';
import { FetchAllEmpresasResponse } from '../interfaces/empresas.interfaces';

@Component({
  selector: 'app-listaempresas',
  templateUrl: './listaempresas.component.html',
  styleUrls: ['./listaempresas.component.css']
})
export class ListaempresasComponent implements OnInit {
  empresas!:any;
  public page: number = 0;
  search: string = '';
  constructor(private empresasService: EmpresasService) { }

  ngOnInit(): void {
    this.empresasService.getAllEmpresas().subscribe(
      result => {
        console.log(result);
        this.empresas = result 
      }
    ); 
  }
  prevPage(){
    if(this.page > 0)
      this.page -= 6;
  }
  nextPage(){

    this.page += 6;
  }

  onSearchEmpresa(search: string){
    this.search = search;
    console.log(search)
  }
}
