import { Pipe, PipeTransform } from '@angular/core';
import { FetchAllEmpresasResponse } from '../interfaces/empresas.interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(empresas: FetchAllEmpresasResponse[], page: number = 0, search: string = ''): FetchAllEmpresasResponse[] {
    console.log(empresas)
    if(search.length === 0)
      return empresas.slice(page,page + 6);
    const filteredEmpresas = empresas.filter(empresa => empresa.razon_social.toLowerCase().includes(search.toLowerCase()));
    return filteredEmpresas
  }

}
