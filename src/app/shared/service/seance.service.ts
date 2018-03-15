import { Seance } from './../modals/seance';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SeanceService {
  constructor(public _http:Http) { }
  getSeances():Observable<any>{
    return this._http.get("http://localhost:4000/seances");
  }
 getSeancebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/seances/"+ id );
 }
addSeance(data) : Observable<any>{
    return this._http.post("http://localhost:4000/seances", data);
}
updateSeance(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/seances/" +id, data);

}
deleteSeance(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/seances/"+id );
}

}