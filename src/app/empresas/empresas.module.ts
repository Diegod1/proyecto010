import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaempresasComponent } from './listaempresas/listaempresas.component';
import { EmpresasService } from './services/empresas.service';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    ListaempresasComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],

  exports:[
    ListaempresasComponent
  ]
})
export class EmpresasModule { }
