import { value } from './../data/dropdowns';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Etudiant} from "./../modals/etudiant";
import {Observable} from "rxjs/Observable";
import { data } from '../data/smart-data-table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

 
@Injectable()
export class EtudiantService {
    public etudiants: BehaviorSubject<any>;
    private dataStore: {  
        etudiants: Etudiant[]
      };
  constructor(public _http:Http) { 
    this.dataStore = { etudiants: [] };
    this.etudiants = new BehaviorSubject({});
  }
  public setActionEntity(action): void {
   // console.log(action);
    this.etudiants.next(action);
  }


  getAllEtudiants():Observable<any>{
    return this._http.get("http://localhost:4000/etudiants");
  }
 getEtudiantbyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/etudiants/"+ id );
 }
addEtudiant(data) : Observable<any>{
    return this._http.post("http://localhost:4000/etudiants", data);
}
updateEtudiant(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/etudiants/" +id, data);

}
deleteEtudiant(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/etudiants/"+id );
}

}