import { Salle } from './../modals/salle';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SalleService {

/*
    public salles: BehaviorSubject<any>;
    private dataStore: {  
        salles: Salle[]
      };
    
  public setActionEntity(action): void {
   // console.log(action);
    this.salles.next(action);
  }*/





  constructor(public _http:Http) {
   /* this.dataStore = { salles: [] };
    this.salles = new BehaviorSubject({});*/
   }
  getSalles():Observable<any>{
    return this._http.get("http://localhost:3000/salles");
  }
 getSallebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:3000/salles/"+ id );
 }
addSalle(data) : Observable<any>{
    return this._http.post("http://localhost:3000/salles", data);
}
updateSalle(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:3000/salles/" +id, data);

}
deleteSalle(id : number) : Observable<any>{
    return this._http.delete("http://localhost:3000/salles/"+id );
}

}