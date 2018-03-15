import { Specialite } from './../modals/specialite';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SpecialiteService {
  constructor(public _http:Http) { }
  getSpecialites():Observable<any>{
    return this._http.get("http://localhost:4000/specialites");
  }
 getSpecialitebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/specialites/"+ id );
 }
addSpecialite(data) : Observable<any>{
    return this._http.post("http://localhost:4000/specialites", data);
}
updateSpecialite(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/specialites/" +id, data);

}
deleteSpecialite(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/specialites/"+id );
}

}