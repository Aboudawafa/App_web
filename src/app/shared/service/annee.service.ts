import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Annee} from "./../modals/annee";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AnneeService {
  constructor(public _http:Http) { }
  getAnnees():Observable<any>{
    return this._http.get("http://localhost:3000/annees");
  }
 getAnneebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:3000/annees/"+ id );
 }
addAnnee(data) : Observable<any>{
    return this._http.post("http://localhost:3000/annees", data);
}
updateAnnee(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:3000/annees/" +id, data);

}
deleteAnnee(id : number) : Observable<any>{
    return this._http.delete("http://localhost:3000/annees/"+id );
}

}