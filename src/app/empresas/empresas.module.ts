import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaempresasComponent } from './listaempresas/listaempresas.component';
import { EmpresasService } from './services/empresas.service';


@NgModule({
  declarations: [
    ListaempresasComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    ListaempresasComponent
  ]
})
export class EmpresasModule { }
