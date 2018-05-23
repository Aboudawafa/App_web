import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Seance } from '../shared/modals/seance';
@Pipe({
    name: 'filterjour'
})
@Injectable()
export class FilterPipeJour  implements PipeTransform {



    transform(items: any[], jour: string, value: string ): any[] {


    
       if (!items) {
        return [];
    }
    if (!jour || !value) {
        return items;

    }   
    
          else { 
          
          return items.filter(seance => seance.jour.toLowerCase().includes(value.toLowerCase()));       
    }

    
    }}
