import { Enseignant } from './../modals/enseignant';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EnseignantService {
  constructor(public _http:Http) { }
  getEnseignants():Observable<any>{
    return this._http.get("http://localhost:4000/enseignants");
  }
  Enseignant
 getEnseignantbyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/enseignants/"+ id );
 }
addEnseignant(data) : Observable<any>{
    return this._http.post("http://localhost:4000/enseignants", data);
}
updateEnseignant(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/enseignants/" +id, data);

}
deleteEnseignant(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/enseignants/"+id );
}

}