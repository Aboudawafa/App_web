import { Niveau } from './../modals/niveau';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NiveauService {
  constructor(public _http:Http) { }
  getNiveaus():Observable<any>{
    return this._http.get("http://localhost:3000/niveaux");
  }
 getNiveaubyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:3000/niveaux/"+ id );
 }
addNiveau(data) : Observable<any>{
    return this._http.post("http://localhost:3000/niveaux", data);
}
updateNiveau(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:3000/niveaux/" +id, data);

}
deleteNiveau(id : number) : Observable<any>{
    return this._http.delete("http://localhost:3000/niveaux/"+id );
}

}