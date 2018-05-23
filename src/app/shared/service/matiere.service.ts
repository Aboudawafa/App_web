import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Matiere} from "./../modals/matiere";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MatiereService {
  constructor(public _http:Http) { }
  getMatieres():Observable<any>{
    return this._http.get("http://localhost:3000/matieres");
  }
 getMatierebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:3000/matieres/"+ id );
 }
addMatiere(data) : Observable<any>{
    return this._http.post("http://localhost:3000/matieres", data);
}
updateMatiere(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:3000/matieres/" +id, data);

}
deleteMatiere(id : number) : Observable<any>{
    return this._http.delete("http://localhost:3000/matieres/"+id );
}

}