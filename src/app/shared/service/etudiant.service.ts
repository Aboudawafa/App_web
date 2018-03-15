import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Etudiant} from "./../modals/etudiant";
import {Observable} from "rxjs/Observable";
import { data } from '../data/smart-data-table';

 
@Injectable()
export class EtudiantService {
  constructor(public _http:Http) { }
  getAllEtudiants(data):Observable<any>{
    return this._http.get("http://localhost:4000/etudiants", data);
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