import { Salle } from './../modals/salle';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SalleService {
  constructor(public _http:Http) { }
  getSalles():Observable<any>{
    return this._http.get("http://localhost:4000/salles");
  }
 getSallebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/salles/"+ id );
 }
addSalle(data) : Observable<any>{
    return this._http.post("http://localhost:4000/salles", data);
}
updateSalle(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/salles/" +id, data);

}
deleteSalle(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/salles/"+id );
}

}