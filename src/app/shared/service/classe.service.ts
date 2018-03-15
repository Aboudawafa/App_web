import { Classe } from './../modals/classe';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ClasseService {
  constructor(public _http:Http) { }
  getClasses():Observable<any>{
    return this._http.get("http://localhost:4000/classes");
  }
 getClassebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/classes/"+ id );
 }
addClasse(data) : Observable<any>{
    return this._http.post("http://localhost:4000/classes", data);
}
updateClasse(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/classes/" +id, data);

}
deleteClasse(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/classes/"+id );
}

}