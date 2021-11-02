import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../services/empresas.service';

@Component({
  selector: 'app-listaempresas',
  templateUrl: './listaempresas.component.html',
  styleUrls: ['./listaempresas.component.css']
})
export class ListaempresasComponent implements OnInit {
  empresas!:any;

  constructor(private empresasService: EmpresasService) { }

  ngOnInit(): void {
    this.empresasService.getAllEmpresas().subscribe(
      result => {
        console.log(result);
        this.empresas = result 
      }
    ); 
  }

}
