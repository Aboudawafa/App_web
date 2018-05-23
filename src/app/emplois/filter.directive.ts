import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Seance } from '../shared/modals/seance';
@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe  implements PipeTransform {



    transform(items: any[], nom: string, value: string ): any[] {


    
       if (!items) {
        return [];
    }
    if (!nom || !value) {
        return items;

    }   
    
          else { 
          
          return items.filter(seance => seance.classe.nom.toLowerCase().includes(value.toLowerCase()));       
    }

    
    }}
