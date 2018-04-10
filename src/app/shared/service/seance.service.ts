import { value } from './../data/dropdowns';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import {Observable} from "rxjs/Observable";
import { data } from '../data/smart-data-table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import { Seance } from '../modals/seance';


@Injectable()
export class SeanceService {

   /* public seances: BehaviorSubject<any>;
    private dataStore: {  
        seances: Seance[]
      };*/



  constructor(public _http:Http) {
    /*this.dataStore = { seances: [] };
    this.seances = new BehaviorSubject({});*/
   }

  /* public setActionEntity(action): void {
    // console.log(action);
     this.seances.next(action);
   }*/
  getSeances():Observable<any>{
    return this._http.get("http://localhost:4000/seances");
  }
 getSeancebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/seances/"+ id );
 }
addSeance(data :Seance) : Observable<any>{
    return this._http.post("http://localhost:4000/seances", data);
}
updateSeance(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/seances/" +id, data);

}
deleteSeance(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/seances/"+id );
}

}