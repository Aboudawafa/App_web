import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Etudiant } from '../shared/modals/etudiant';
@Pipe({
    name: 'filterbyclass'
})
@Injectable()
export class FilterByClass  implements PipeTransform {



    transform(items: any[], nom: string, value: string ): any[] {


    
       if (!items) {
        return [];
    }
    if (!nom || !value) {
        return items;

    }   
    
          else { 
          
          return items.filter(etudiant => etudiant.classe.nom.toLowerCase().includes(value.toLowerCase()));       
    }

    
    }}
